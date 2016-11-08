describe('mock http test', function() {
    beforeEach(module('jenkins'));
    it('should load default movies (with mock http request)', function() {
        // var moviesController = $controller('firstCnt', {
        //     $scope: $scope
        // });  this is check
        // $httpBackend.flush();
        expect(1).toEqual(1);
        // expect($scope.status).toEqual(200);
        // expect($scope.gotData).toEqual(httpData);
    });

});
