Ti.include("lib/jasmine-core/jasmine.js");
Ti.include("lib/titanium-jasmine/jasmine-titanium.js");

Ti.include("lib/jsOAuth/jsOAuth.js");
Ti.include("lib/jsOAuth/jsOAuth_Twitter.js");
Ti.include("env.js");

// tests
Ti.include("spec/mainSpec.js");

var jasmineEnv = jasmine.getEnv();
jasmineEnv.addReporter(new jasmine.TitaniumReporter());
jasmineEnv.execute();
