"use strict";

module.exports.policies = {
	"User": {
		"showUserDetails": ["isLoggedInPolicy"],
		"checkLogin": ["loginRequiredRequest"]
	}
};