System.register(['angular2/core', './tweet.service', './heart.component', './summary.pipe'], function(exports_1, context_1) {
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
    var core_1, tweet_service_1, heart_component_1, summary_pipe_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetServies) {
                    this.tweetInfo = tweetServies.getTweetInfo();
                }
                TweetComponent.prototype.onLikeChange = function ($event, tweet) {
                    if ($event.heart) {
                        tweet.totalLikes += 1;
                    }
                    else {
                        tweet.totalLikes -= 1;
                    }
                };
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n        <div *ngFor=\"#tweet of tweetInfo\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <a href=\"#\">\n                        <img class=\"media-object\" src=\"{{tweet.tweetImage}}\">\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                    <h4 class=\"media-heading\"><span>{{tweet.authorName}}</span>{{tweet.tweetHandle}}</h4>\n                    {{tweet.tweetContent | summary:20 }}\n                    <heart [isHeart]=\"tweet.isLiked\" (changeCount)=\"onLikeChange($event, tweet)\"></heart>\n                    {{tweet.totalLikes}}\n                </div>\n            </div>\n        </div>\n        <br/>\n    ",
                        providers: [tweet_service_1.TweetServices],
                        directives: [heart_component_1.HeartComponent],
                        pipes: [summary_pipe_1.PipeSummary]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetServices])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map