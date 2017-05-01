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
    var PanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PanelComponent = (function () {
                function PanelComponent() {
                    this.isHidden = true;
                }
                PanelComponent.prototype.onHeaderClick = function ($event) {
                    this.isHidden = !this.isHidden;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PanelComponent.prototype, "header", void 0);
                PanelComponent = __decorate([
                    core_1.Component({
                        selector: 'bs-panel',
                        template: "\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" (click)=\"onHeaderClick($event)\">\n            {{header}}\n            <i class=\"pull-right glyphicon\" [ngClass]=\"{\n                'glyphicon-chevron-down': isHidden,\n                'glyphicon-chevron-up' : !isHidden\n            }\"></i>\n        </div>\n        <div class=\"panel-body\" *ngIf=\"!isHidden\">\n            <ng-content select=\".body\"></ng-content>\n        </div>\n        \n    </div>\n    \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PanelComponent);
                return PanelComponent;
            }());
            exports_1("PanelComponent", PanelComponent);
        }
    }
});
//# sourceMappingURL=panel.component.js.map