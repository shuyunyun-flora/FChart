class PubSub {
    private messages = {};
    private lastUid = -1;
    public static that;

    constructor() {
        PubSub.that = this;
    }

    public publish(message, data, sync, immediateExceptions) {
        var deliver = this.createDeliveryFunction(message, data, immediateExceptions),
            hasSubscribers = this.messageHasSubscribers(message);

        if (!hasSubscribers) {
            return false;
        }

        if (sync === true) {
            deliver();
        } else {
            setTimeout(deliver, 0);
        }
        return true;
    }

    public subscribe(message, func): any {
        if (typeof func !== 'function') {
            return false;
        }

        // message is not registered yet
        if (!this.messages.hasOwnProperty(message)) {
            this.messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++this.lastUid);
        this.messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    public unsubscribe = function (value) {
        var isTopic = typeof value === 'string' && this.messages.hasOwnProperty(value),
            isToken = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic) {
            this.clearSubscriptions(value);
            return;
        }

        for (m in this.messages) {
            if (this.messages.hasOwnProperty(m)) {
                message = this.messages[m];

                if (isToken && message[value]) {
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for (t in message) {
                        if (message.hasOwnProperty(t) && message[t] === value) {
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };

    private createDeliveryFunction(message, data, immediateExceptions) {
        return function deliverNamespaced() {
            var topic = String(message),
                position = topic.lastIndexOf('.');

            // deliver the message as it is now
            PubSub.that.deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while (position !== -1) {
                topic = topic.substr(0, position);
                position = topic.lastIndexOf('.');
                PubSub.that.deliverMessage(message, topic, data, immediateExceptions);
            }
        };
    };

    private deliverMessage(originalMessage, matchedMessage, data, immediateExceptions) {
        var subscribers = PubSub.that.messages[matchedMessage],
            callSubscriber = immediateExceptions ? PubSub.that.callSubscriberWithImmediateExceptions : PubSub.that.callSubscriberWithDelayedExceptions,
            s;

        if (!PubSub.that.messages.hasOwnProperty(matchedMessage)) {
            return;
        }

        for (s in subscribers) {
            if (subscribers.hasOwnProperty(s)) {
                callSubscriber(subscribers[s], originalMessage, data);
            }
        }
    };

    private messageHasSubscribers(message) {
        var topic = String(message),
            found = Boolean(PubSub.that.messages.hasOwnProperty(topic) && PubSub.that.hasKeys(PubSub.that.messages[topic])),
            position = topic.lastIndexOf('.');

        while (!found && position !== -1) {
            topic = topic.substr(0, position);
            position = topic.lastIndexOf('.');
            found = Boolean(PubSub.that.messages.hasOwnProperty(topic) && PubSub.that.hasKeys(PubSub.that.messages[topic]));
        }

        return found;
    }

    private hasKeys(obj) {
        var key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                return true;
            }
        }
        return false;
    }

    private callSubscriberWithDelayedExceptions(subscriber, message, data) {
        try {
            subscriber(message, data);
        } catch (ex) {
            setTimeout(PubSub.that.throwException(ex), 0);
        }
    }

    private callSubscriberWithImmediateExceptions(subscriber, message, data) {
        subscriber(message, data);
    }

    private throwException(ex) {
        return function reThrowException() {
            throw ex;
        };
    }
}

export = PubSub