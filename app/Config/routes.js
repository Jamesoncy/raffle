'use-strict';

module.exports.routes = {
	"GET /hello-world": "Person.helloWorld",
	"GET /test-code": "Person.testCode",
	"GET /login": "Page.login",
	"POST /login": "User.checkLogin"
}