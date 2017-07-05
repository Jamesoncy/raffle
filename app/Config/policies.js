module.exports.policies = {
	"Person": {
		"helloWorld": ["isAdmin", "isLoggedIn"],
		"testCode": ["isLoggedIn"]
	},
	"Sample": {
		"sampleFunction": ["isLoggedIn"]
	}
}