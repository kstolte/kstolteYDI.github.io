webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column is-two-thirds\">\n      <div class=\"hero is-info\">\n        <div class=\"hero-body\">\n          <div class=\"container\">\n            <h1 class=\"title\">Employment Experience</h1>\n          </div>\n        </div>\n      </div>\n      <section class=\"section\">\n        <div class=\"is-size-6\">\n          <div class=\"content\" *ngFor=\"let job of jobs\">\n            <div class=\"level is-marginless\">\n              <div class=\"level-left\">\n                <h2 class=\"is-marginless\">{{job.title}}</h2>\n              </div>\n              <div class=\"level-right\" style=\"Vertical-Align:bottom\">\n                <p class=\"has-text-weight-light\">{{job.startDate | date}} - {{(job.endDate | date) || \"Present\"}}</p>\n              </div>\n            </div>\n            <div class=\"level is-marginless\">\n              <div class=\"level-left\">\n                <p class=\"has-text-weight-light\">{{job.employer}}</p>\n              </div>\n              <div class=\"level-right\">\n                <p class=\"has-text-weight-light\">{{job.location}}</p>\n              </div>\n            </div>\n            <p class=\"is-marginless has-text-justified\">{{job.jobSummary}}</p>\n            <ul class=\"has-text-justified\" style=\"margin-top:0;\">\n              <li *ngFor=\"let role of job.jobRoles\">{{role.Role}}</li>\n            </ul>\n            <div *ngIf=\"job.jobTechnologies\">\n              <h4>Technology Stack</h4>\n              <div class=\"tags\">\n                <span class=\"tag {{tech.Color}}\" *ngFor=\"let tech of job.jobTechnologies\">{{tech.Technology}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n    <div class=\"container column is-one-third\">\n      <section class=\"section\">\n        <div class=\"is-size-6\">\n          <figure class=\"image\">\n            <img src=\"assets/images/headShot.png\">\n          </figure>\n          <h1 class=\"title has-text-centered\">Keith Stolte</h1>\n          <ul class=\"fa-ul\">\n            <li class=\"email\">\n              <i class=\"fas fa-envelope\"></i>\n              <a href=\"mailto:keithrstolte@gmail.com\">keithrstolte@gmail.com</a>\n            </li>\n            <li class=\"github\">\n              <i class=\"fab fa-github has-text-github\"></i>\n              <a href=\"https://www.github.com/kstolte\" target=\"_blank\">github.com/kstolte</a>\n            </li>\n            <li class=\"linkedin\">\n              <i class=\"fab fa-linkedin has-text-linkedin\"></i>\n              <a href=\"https://linkedin.com/in/keithrstolte\" target=\"_blank\">Profile</a>\n            </li>\n            <li class=\"twitter\">\n              <i class=\"fab fa-twitter has-text-twitter\"></i>\n              <a href=\"https://twitter.com/sqltrailblazer\" target=\"_blank\">@sqlTrailblazer</a>\n            </li>\n          </ul>\n        </div>\n      </section>\n      <section class=\"hero is-small is-github\">\n        <div class=\"hero-body\">\n          <div class=\"container\">\n            <h1 class=\"title is-bold\">\n              <i class=\"fab fa-github\"></i>\n              GitHub\n            </h1>\n            <h2 class=\"subtitle\">Contributed Repositories</h2>\n            <article class=\"media\" *ngFor=\"let repo of contributedRepo.contributedRepositories.edges\">\n              <figure class=\"media-left\">\n                <p class=\"image is-32x32\">\n                  <img src=\"{{repo.node.owner.avatarUrl}}\" />\n                </p>\n              </figure>\n              <div class=\"media-content\">\n                <div class=\"content\">\n                  <a href=\"{{repo.node.url}}\" target=\"_blank\">{{repo.node.owner.login}} - {{repo.node.name}}</a>\n                </div>\n              </div>\n            </article>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Job */
/* unused harmony export Role */
/* unused harmony export Technologies */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Job = /** @class */ (function () {
    function Job() {
    }
    return Job;
}());

var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());

var Technologies = /** @class */ (function () {
    function Technologies() {
    }
    return Technologies;
}());

var MSSQL = {
    Technology: "MSSQL Server",
    Color: "is-sql"
};
var NetFramework = {
    Technology: ".Net Framework",
    Color: "is-netFramework"
};
var NetCore = {
    Technology: ".Net Core 2.0",
    Color: "is-netFramework"
};
var SharePoint = {
    Technology: "SharePoint",
    Color: "is-warning"
};
var AppleComp = {
    Technology: "MacOS",
    Color: "is-dark"
};
var JOBS = [
    {
        title: "Software Developer",
        employer: "Yellow Dog Software",
        location: "Norfolk, VA",
        startDate: new Date("2016-11-01"),
        endDate: null,
        jobSummary: "Develop and maintain components of an inventory management software solution. The solution is based on a MSSQL database backend with a long-term support WinForms Client application and iOS/Android Applications.",
        jobRoles: [
            {
                Role: "Recent development has been based around new feature implementation in WinForms Client, React Web Apps, .Net Core API, iOS/Android Applications, and ExpressJS GraphQL server."
            },
            {
                Role: "Resolve all issues with software and final escalation point for end users."
            },
            {
                Role: "Conceptualize, plan, and execute new features and technology into the software solution."
            },
            {
                Role: "Create system integrations between Yellow Dog Inventory and third party systems."
            },
            {
                Role: "Architected and implemented an internal tool for Support and Implementation groups to track real time system status to deliver proactive support and client assistance."
            }
        ],
        jobTechnologies: [
            { Technology: "React" },
            { Technology: "React-Native" },
            MSSQL,
            NetFramework,
            NetCore,
            { Technology: "GitHub", Color: "is-github" },
            { Technology: "Git" },
            { Technology: "Angular" },
            { Technology: "WinForms" },
            { Technology: "REST APIs" },
            { Technology: "GraphQL", Color: "is-graphql" },
            AppleComp
        ]
    },
    {
        title: "Technology Committee Chair",
        employer: "Plaza Volunteer Rescue Squad",
        location: "Virginia Beach, VA",
        startDate: new Date("2012-11-01"),
        endDate: new Date("2018-01-01"),
        jobSummary: "",
        jobRoles: [
            {
                Role: "Setup and maintained an Office 365 Environment consisting of email, internal SharePoint Sites and an external SharePoint website for 80+ users."
            },
            { Role: "Setup and maintained an online website donation process that generated additional revenue donation." },
            {
                Role: "Assisted with researching and procuring an ambulance at a purchase price of $235,000."
            },
            {
                Role: "Volunteered 56 hours per month providing emergency medical services on an ambulance and heavy rescue truck."
            }
        ],
        jobTechnologies: [MSSQL, SharePoint, NetFramework, { Technology: "WireShark" }]
    },
    {
        title: "DBA / IT Manager",
        employer: "Yellow Dog Software",
        location: "Norfolk, VA",
        startDate: new Date("2016-05-15"),
        endDate: new Date("2016-10-31"),
        jobSummary: "Served in a DevOps Role for a software development organization. Performed as the escalation point for support tickets to provide fixes and fact finding prior to being escalated to the development group.",
        jobRoles: [
            {
                Role: "Maintained and supported 50+ physical servers that were both onsite and hosted through a third party datacenter."
            },
            { Role: "Implemented Tier 4 support for escalation of tickets." },
            {
                Role: "Pinpointed opportunities for database improvement in support of the software."
            },
            {
                Role: "Composed, released, and applied SQL Scripts to production environments to resolve bugs or optimize client systems."
            },
            { Role: "Assisted support team with timely ticket resolution." },
            {
                Role: "Installed a Network Management System to track uptime and maintained an uptime of 99.99% across the server and network infrastructure."
            }
        ],
        jobTechnologies: [MSSQL, NetFramework, { Technology: "PowerShell" }]
    },
    {
        title: "Application Support Analyst",
        employer: "Gold Key | PHR Hotels & Resorts",
        location: "Virginia Beach, VA",
        startDate: new Date("2015-06-01"),
        endDate: new Date("2016-05-15"),
        jobSummary: "Implemented and maintained the Software items in the Service Portfolio and Pipeline.",
        jobRoles: [
            {
                Role: "Developed SQL reports and queries for IT Department and customer use."
            },
            {
                Role: "Maintained SharePoint sites with on premise SharePoint Server Farm."
            },
            {
                Role: "Developed multifaceted SharePoint sites to assist customers with storing and cataloging documents, data, and processes. "
            },
            { Role: "Provided Tier 3 end user support." },
            {
                Role: "Conducted deep dives into software application logic while troubleshooting and performed analysis on complex application usage scenarios."
            },
            {
                Role: "Provided advanced system administration/configuration tasks and consulted customers on proposed changes within In House (Custom) Applications and third party COTS software products."
            }
        ],
        jobTechnologies: [
            MSSQL,
            SharePoint,
            { Technology: "Visual Basic", Color: "is-netFramework" },
            { Technology: "WireShark" },
            { Technology: "Juniper Networks" },
            { Technology: "POSiTouch" },
            { Technology: "Micros POS" },
            { Technology: "Opera PMS" },
            { Technology: "OnQ PMS" },
            { Technology: "Microsoft Dynamics SL" },
            { Technology: "IIS" },
            AppleComp
        ]
    },
    {
        title: "Support Tech I",
        employer: "Gold Key | PHR Hotels & Resorts",
        location: "Virginia Beach, VA",
        startDate: new Date("2013-03-15"),
        endDate: new Date("2015-06-01"),
        jobSummary: "Provided onsite and phone support to all levels of employees.",
        jobRoles: [
            {
                Role: "Developed low to medium level SQL reports and queries for IT Department and customer use."
            },
            {
                Role: "Executed desktop and server support for multiple hardware configurations, operating systems, and applications."
            },
            {
                Role: "Maintained SharePoint site with on premise SharePoint Server Farm."
            },
            {
                Role: "Conducted deep dives into software application logic while troubleshooting and performed analysis on complex application usage scenarios."
            },
            {
                Role: 'Setup and delivered a SharePoint site that securely stores all associate personnel records.'
            },
            {
                Role: 'Troubleshooted, maintained, and supported multiple internal applications on a variety of platforms and frameworks.'
            },
            {
                Role: 'Implemented complex applications and products to outlets along the Virginia Beach Oceanfront.'
            }
        ],
        jobTechnologies: [
            MSSQL,
            SharePoint,
            { Technology: 'Visual Basic', Color: 'is-netFramework' },
            { Technology: 'WireShark' },
            { Technology: 'Juniper Networks' },
            { Technology: 'POSiTouch' },
            { Technology: 'WireShark' },
            AppleComp
        ]
    },
    {
        title: 'Junior Project Manager',
        employer: 'Met Life',
        location: 'Greater New York City Area',
        startDate: new Date('2012-06-15'),
        endDate: new Date('2013-03-15'),
        jobSummary: "Telecommuting job to assist with an enterprise wide migration from Lotus Notes to Microsoft SharePoint.",
        jobRoles: [
            {
                Role: 'Co-Managed an Enterprise-wide migration from Lotus Notes applications and databases to SharePoint.'
            },
            {
                Role: 'Constant communication to clients on a daily basis, to keep them notified on the status of their projects.'
            },
            {
                Role: 'Maintained Excellent Customer Service with the Business Owners of Applications.'
            },
            {
                Role: 'Assisted with maintaining security permissions on SharePoint websites.'
            }
        ],
        jobTechnologies: [SharePoint, { Technology: 'Lotus Notes' }]
    },
    {
        title: 'Chief Audio Engineer, Stage Manager & Stage Hand',
        employer: 'Roper Performing Arts Center',
        location: 'Norfolk, VA',
        startDate: new Date('2009-02-01'),
        endDate: new Date('2012-06-15'),
        jobSummary: "",
        jobRoles: [
            {
                Role: 'Performed as a Stage Manager to make critical decisions while in rehearsals and live theatrical performances.'
            },
            {
                Role: 'Provided live sound reinforcement for various types of performing genres.'
            },
            {
                Role: 'Designed the updated theatre’s sound system, still currently in use.'
            },
            {
                Role: 'Assisted with load-in and load-out of equipment and props for use during stage performances.'
            }
        ],
        jobTechnologies: [
            { Technology: 'Google Sheets' },
            { Technology: 'Pro Tools' },
            AppleComp
        ]
    }, {
        title: 'Production Assistant',
        employer: 'Studio Center Total Production',
        location: 'Norfolk, VA',
        startDate: new Date('2007-05-20'),
        endDate: new Date('2012-03-15'),
        jobSummary: "",
        jobRoles: [
            {
                Role: 'Created a collaboration tool to track the status of contacting talent in various localities and time zones for multiple projects.'
            },
            { Role: 'Troubleshooted routing and patching issues between multiple studio rooms and sound sources.' },
            {
                Role: 'Provided recording services for client script auditioning..'
            },
            {
                Role: 'Provided expert feedback and guided voiceover talent to performing at their best.'
            }
        ],
        jobTechnologies: [
            { Technology: 'Google Sheets' },
            { Technology: 'Pro Tools' },
            AppleComp
        ]
    }
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Keith Stolte';
        this.jobs = JOBS;
        this.contributedRepo = {
            contributedRepositories: {
                edges: [
                    {
                        node: {
                            name: 'docs',
                            url: 'https://github.com/sendgrid/docs',
                            owner: {
                                login: 'sendgrid',
                                avatarUrl: 'https://avatars0.githubusercontent.com/u/181234?v=4'
                            }
                        }
                    },
                    {
                        node: {
                            name: 'bulma',
                            url: 'https://github.com/jgthms/bulma',
                            owner: {
                                login: 'jgthms',
                                avatarUrl: 'https://avatars1.githubusercontent.com/u/1254808?v=4'
                            }
                        }
                    },
                    {
                        node: {
                            name: 'github-release-notes',
                            url: 'https://github.com/github-tools/github-release-notes',
                            owner: {
                                login: 'github-tools',
                                avatarUrl: 'https://avatars0.githubusercontent.com/u/16116810?v=4'
                            }
                        }
                    },
                    {
                        node: {
                            name: 'expo-docs',
                            url: 'https://github.com/expo/expo-docs',
                            owner: {
                                login: 'expo',
                                avatarUrl: 'https://avatars3.githubusercontent.com/u/12504344?v=4'
                            }
                        }
                    },
                    {
                        node: {
                            name: 'expo',
                            url: 'https://github.com/expo/expo',
                            owner: {
                                login: 'expo',
                                avatarUrl: 'https://avatars3.githubusercontent.com/u/12504344?v=4'
                            }
                        }
                    },
                    {
                        node: {
                            name: 'cz-emoji',
                            url: 'https://github.com/ngryman/cz-emoji',
                            owner: {
                                login: 'ngryman',
                                avatarUrl: 'https://avatars2.githubusercontent.com/u/892048?v=4'
                            }
                        }
                    },
                    {
                        node: {
                            name: 'react-native-website',
                            url: 'https://github.com/facebook/react-native-website',
                            owner: {
                                login: 'facebook',
                                avatarUrl: 'https://avatars3.githubusercontent.com/u/69631?v=4'
                            }
                        }
                    },
                    {
                        node: {
                            name: 'azuredatastudio',
                            url: 'https://github.com/Microsoft/azuredatastudio',
                            owner: {
                                login: 'Microsoft',
                                avatarUrl: 'https://avatars2.githubusercontent.com/u/6154722?v=4'
                            }
                        }
                    },
                    {
                        node: {
                            name: 'SSH.NET',
                            url: 'https://github.com/sshnet/SSH.NET',
                            owner: {
                                login: 'sshnet',
                                avatarUrl: 'https://avatars3.githubusercontent.com/u/16708801?v=4'
                            }
                        }
                    }
                ]
            }
        };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

// GitHub GraphQL Query
// query {
//   viewer {
//    repositoriesContributedTo (first:20) {
//      edges {
//        node {
//          name
//          url
//          owner{
//            login
//            avatarUrl}
//        }
//      }
//    }
//   }
//  }


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map