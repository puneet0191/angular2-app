System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TweetServices;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TweetServices = (function () {
                function TweetServices() {
                }
                TweetServices.prototype.getTweetInfo = function () {
                    return [{ tweetContent: "This is my First Tweet, but I don't really like the way things are going on in my life at the moment", tweetImage: 'http://lorempixel.com/100/100/people/?1', authorName: 'Somme One', tweetHandle: '@someone', isLiked: true, totalLikes: 2 },
                        { tweetContent: "This is my First Tweet", tweetImage: 'http://lorempixel.com/100/100/people/?2', authorName: 'Anny One', tweetHandle: '@anyone', isLiked: false, totalLikes: 40 },
                        { tweetContent: "This is my First Tweet", tweetImage: 'http://lorempixel.com/100/100/people/?3', authorName: 'Yourr Self', tweetHandle: '@yourself', isLiked: true, totalLikes: 20 }];
                };
                TweetServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TweetServices);
                return TweetServices;
            }());
            exports_1("TweetServices", TweetServices);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map