System.register(['angular2/core', './courses.component', './authors.component', "./tweet.component", "./panel.component", "./form.component", "./signup-form.component"], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, tweet_component_1, panel_component_1, form_component_1, signup_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (panel_component_1_1) {
                panel_component_1 = panel_component_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello Angular</h1>\n        <courses></courses>\n        <authors></authors>\n        <tweet></tweet>\n        <bs-panel header=\"This is first title\"><div class=\"body\"> This is the body</div></bs-panel>\n        <form></form>\n        <signup-form></signup-form>\n    ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorComponent, tweet_component_1.TweetComponent, panel_component_1.PanelComponent, form_component_1.FormComponent, signup_form_component_1.SignUpFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map