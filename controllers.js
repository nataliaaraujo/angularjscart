app
  .controller('HomeCtrl', function($scope, CartService) {

    // Itens no Carrinho
    $scope.cart = CartService.getCart();
    $scope.tipos = CartService.getTipos();

    $scope.mudarValor = function(index) {
      CartService.mudarValor(index);

    };

    // Quantidade de Itens
    $scope.qtdItem = function() {
      return CartService.getLength();
    },

    // Adicioanr Item
    $scope.addItem = function() {
      CartService.add();
    },

    // Remover Item
    $scope.removeItem = function(index) {
      CartService.remove(index);
    },

    // Total dos itens
    $scope.total = function() {
      return CartService.getTotal();
    };

  })
  .controller('aboutCtrl', function($scope) {

  });