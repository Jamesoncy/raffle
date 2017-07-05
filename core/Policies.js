"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var policies = exports.policies = {
	"Person": {
		"helloWorld": ["isAdmin", "isLoggedIn"],
		"testCode": ["isLoggedIn"]
	},
	"Sample": {
		"sampleFunction": ["isLoggedIn"]
	}
};