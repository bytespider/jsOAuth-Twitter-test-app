var consumerKey;
var consumerSecret;

describe("Twitter", function() {
    var twitter = new OAuth.Twitter({
        consumerKey: consumerKey,
        consumerSecret: consumerSecret
    });
    
    it('should authenticate a user', function () {
        
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
   
    it("should show the user is logged in", function () {
        expect(twitter.signedIn()).toBeTruthy();
    });
   
    it("should fetch the user's home timeline", function () {
        var result;
        var app = {
            success: function (data) {
                result = data;
            },
            failure: function (data) {
                result = data;
            }
        };
        spyOn(app, 'success').andCallThrough();
        spyOn(app, 'failure').andCallThrough();
        
        twitter.homeTimeline(null, app.success, app.failure);
        
        waitsFor(function () {
            return app.success.callCount > 0 || app.failure.callCount > 0;
        }, 60000);
        
        runs(function () {
            expect(app.success).toHaveBeenCalled();
            expect(app.failure).not.toHaveBeenCalled();
        });
    });
});
