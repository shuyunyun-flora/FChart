requirejs.config({
    baseUrl: './',
    paths: {
        "jquery": "lib/jquery/jquery-1.12.4",
        "jqueryui": "lib/jquery/jquery-ui-1.12.0/jquery-ui",
        "spectrum": "lib/jquery/spectrum/spectrum",
        "datetimepicker": "lib/jquery/jquery.datetimepicker",
        "jquery-mousewheel": "lib/jquery/jquery-mousewheel",
        "lodash": "lib/lodash",
        "app": "script/app"
    }
});
require(["app"]);
//# sourceMappingURL=config.js.map