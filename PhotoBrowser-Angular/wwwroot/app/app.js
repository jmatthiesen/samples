(function() {
	angular.module("photoBrowser", [])
	.controller("list", listController);
	
	function listController($http){
		$http.get("../images/images.json", function (result) {
			result.forEach((image) => {
				console.log("image");
			})
		})
	}
	
	listController.$inject = ["$http"];
})();