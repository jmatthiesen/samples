(function () {
    angular.module("photoBrowser", [])
	.controller("list", ["$scope","$http", listController]);

    function listController($scope, $http) {
        $http.get("images/images.json").success((result) => {
            $scope.images = result.files;
        })
    }

    listController.$inject = ["$http"];
})();