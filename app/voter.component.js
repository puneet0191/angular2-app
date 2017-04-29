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
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.voteCount = 0;
                    this.isVoted = false;
                    this.voteChange = new core_1.EventEmitter();
                }
                VoterComponent.prototype.onUpClick = function ($event) {
                    if (!this.isVoted) {
                        this.isVoted = !this.isVoted;
                        this.voteCount += 1;
                        this.voteChange.emit({ voteCount: this.voteCount });
                    }
                };
                VoterComponent.prototype.onDownClick = function ($event) {
                    if (this.isVoted) {
                        this.isVoted = !this.isVoted;
                        this.voteCount -= 1;
                        this.voteChange.emit({ voteCount: this.voteCount });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "isVoted", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voteChange", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n    <div width=\"20px;\">\n        <i class=\"glyphicon glyphicon-menu-up\"\n        [class.isUpVoted]=\"isVoted\" (click)=\"onUpClick($event)\" ></i>\n        <span>{{voteCount}}</span>\n        <i class=\"glyphicon glyphicon-menu-down\"\n           [class.isDownVoted]=\"!isVoted\" (click)=\"onDownClick($event)\" ></i>\n    </div>\n    ",
                        styles: ["\n        .isUpVoted{\n            color: orange;\n        }\n        .isDownVoted{\n            color: orange;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map