var consumerKey;
var consumerSecret;

describe("Twitter", function() {
    it('should authenticate a user', function () {
        var twitter = new OAuth.Twitter({
            consumerKey: consumerKey,
            consumerSecret: consumerSecret
        });
        
        var successCallback = jasmine.createSpy('success_a');
        var failureCallback = jasmine.createSpy('failure_a');
        
        twitter.authenticate(successCallback, failureCallback);
        
        waitsFor(function () {
            return successCallback.wasCalled || failureCallback.wasCalled;
        }, "user to be authenticated", 30000);
        
        runs(function () {
            expect(successCallback).toHaveBeenCalled();
            expect(failureCallback).not.toHaveBeenCalled();
        });
    });
    /*
    waits(3000);
        
    it('should not authenticate a user', function () {
        var twitter = new OAuth.Twitter({
            consumerKey: consumerKey,
            consumerSecret: consumerSecret
        });
        var successCallback = jasmine.createSpy('success_b');
        var failureCallback = jasmine.createSpy('failure_b');
        
        twitter.authenticate(successCallback, failureCallback);
        
        waitsFor(function () {
            return successCallback.wasCalled || failureCallback.wasCalled;
        }, "user to not be authenticated", 30000);
        
        runs(function () {
            expect(failureCallback).toHaveBeenCalled();
            expect(successCallback).not.toHaveBeenCalled();
        });
    });
    */  
});
