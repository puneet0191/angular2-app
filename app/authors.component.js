System.register(['angular2/core', './author.service', './favorite.component', './voter.component'], function(exports_1, context_1) {
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
    var core_1, author_service_1, favorite_component_1, voter_component_1;
    var AuthorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            AuthorComponent = (function () {
                function AuthorComponent(authorService) {
                    this.title = "Authors";
                    this.fullStar = 1;
                    this.emptyStar = 0;
                    this.authorInfo = authorService.getAuthorInfo();
                    this.authorNames = authorService.getAuthorNames();
                }
                AuthorComponent.prototype.onClick = function ($event) {
                    console.log("Inside");
                    if (this.fullStar == 1) {
                        this.emptyStar = 1;
                        this.fullStar = 0;
                    }
                    else {
                        this.emptyStar = 0;
                        this.fullStar = 1;
                    }
                };
                AuthorComponent.prototype.onFavoriteClick = function ($event) {
                    console.log($event);
                };
                AuthorComponent.prototype.onVoteClick = function ($event) {
                    console.log($event);
                };
                AuthorComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h2>{{title}}</h2>\n        <p>List of Authors</p>\n        <ul>\n            <li *ngFor=\"#authInfo of authorInfo\">\n                {{authInfo.authorName}}<favorite [isFavorite]=\"authInfo.isFavorite\" (change)=\"onFavoriteClick($event)\"></favorite>\n            </li>\n        </ul>\n        <h3>Vote Component</h3>\n        <voter [voteCount]=\"0\" [isVoted]=\"true\" (voteChange)=\"onVoteClick($event)\"></voter>\n    ",
                        selector: 'authors',
                        providers: [author_service_1.AuthorService],
                        directives: [favorite_component_1.FavoriteComponent, voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService])
                ], AuthorComponent);
                return AuthorComponent;
            }());
            exports_1("AuthorComponent", AuthorComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map