
describe('Unit Testing: Display data from Json', function () {

    var scope, $controllerConstructor, httpService;
    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller, $injector) {
      scope = $rootScope.$new();
      $controllerConstructor = $controller;
      httpService = $injector.get('$http');
      
      $controllerConstructor('dataController', { $scope: scope, $http: httpService});
    }));

    it('Should make a call to server to fetch data', function(){
      var respData = {data:{id:1}};
      var responseObj = { 
        then: function(callback) {
          callback(respData);
        }
      };

      var httpwrapStub = sinon.stub(httpService, 'get');
      httpwrapStub.returns(responseObj);
      scope.initialise();
      expect(scope.tableData.id).to.equal(1);
    });


    it('should display data on JSON call to the table', function(){
      scope.sortingOrder = '';
      scope.sort_table('id');
      expect(scope.sortingOrder).to.equal('id');
      expect(scope.reverse).to.equal(false);
    });
    it('should show down-arrow on userId column by default ', function(){
      scope.sortingOrder = 'userId';
      var result = scope.getClass(scope.sortingOrder);
      expect(result).to.equal('icon-arrow-down');
    });
    it('should show down-arrow if user wants data in descending order', function(){
      scope.sortingOrder = 'userId';
      scope.reverse= true;
      var result = scope.getClass(scope.sortingOrder);
      expect(result).to.equal('icon-arrow-up');
    });
});