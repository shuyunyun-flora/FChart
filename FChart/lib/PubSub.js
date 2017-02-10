define(["require", "exports"], function (require, exports) {
    "use strict";
    var PubSub = (function () {
        function PubSub() {
            this.messages = {};
            this.lastUid = -1;
            this.unsubscribe = function (value) {
                var isTopic = typeof value === 'string' && this.messages.hasOwnProperty(value), isToken = !isTopic && typeof value === 'string', isFunction = typeof value === 'function', result = false, m, message, t;
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
            PubSub.that = this;
        }
        PubSub.prototype.publish = function (message, data, sync, immediateExceptions) {
            var deliver = this.createDeliveryFunction(message, data, immediateExceptions), hasSubscribers = this.messageHasSubscribers(message);
            if (!hasSubscribers) {
                return false;
            }
            if (sync === true) {
                deliver();
            }
            else {
                setTimeout(deliver, 0);
            }
            return true;
        };
        PubSub.prototype.subscribe = function (message, func) {
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
        ;
        PubSub.prototype.createDeliveryFunction = function (message, data, immediateExceptions) {
            return function deliverNamespaced() {
                var topic = String(message), position = topic.lastIndexOf('.');
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
        ;
        PubSub.prototype.deliverMessage = function (originalMessage, matchedMessage, data, immediateExceptions) {
            var subscribers = PubSub.that.messages[matchedMessage], callSubscriber = immediateExceptions ? PubSub.that.callSubscriberWithImmediateExceptions : PubSub.that.callSubscriberWithDelayedExceptions, s;
            if (!PubSub.that.messages.hasOwnProperty(matchedMessage)) {
                return;
            }
            for (s in subscribers) {
                if (subscribers.hasOwnProperty(s)) {
                    callSubscriber(subscribers[s], originalMessage, data);
                }
            }
        };
        ;
        PubSub.prototype.messageHasSubscribers = function (message) {
            var topic = String(message), found = Boolean(PubSub.that.messages.hasOwnProperty(topic) && PubSub.that.hasKeys(PubSub.that.messages[topic])), position = topic.lastIndexOf('.');
            while (!found && position !== -1) {
                topic = topic.substr(0, position);
                position = topic.lastIndexOf('.');
                found = Boolean(PubSub.that.messages.hasOwnProperty(topic) && PubSub.that.hasKeys(PubSub.that.messages[topic]));
            }
            return found;
        };
        PubSub.prototype.hasKeys = function (obj) {
            var key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return true;
                }
            }
            return false;
        };
        PubSub.prototype.callSubscriberWithDelayedExceptions = function (subscriber, message, data) {
            try {
                subscriber(message, data);
            }
            catch (ex) {
                setTimeout(PubSub.that.throwException(ex), 0);
            }
        };
        PubSub.prototype.callSubscriberWithImmediateExceptions = function (subscriber, message, data) {
            subscriber(message, data);
        };
        PubSub.prototype.throwException = function (ex) {
            return function reThrowException() {
                throw ex;
            };
        };
        return PubSub;
    }());
    return PubSub;
});
//# sourceMappingURL=PubSub.js.map