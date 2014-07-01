app
	.service('CartService', function() {
		var cart = {
			items: [{
				qty: 10,
				description: 'Produto 1',
				cost: 9.95,
				tipo: 1
			}, {
				qty: 5,
				description: 'Produto 2',
				cost: -19.99,
				tipo: 0
			}]
		};

		var tipos = [{
			id: 1,
			name: 'Entrada'
		}, {
			id: 0,
			name: 'Saida'

		}];
		this.getCart = function() {
			return cart;
		}

		this.getTipos = function() {
			return tipos;
		}

		this.add = function() {
			cart.items.push({
				qty: 1,
				description: '',
				cost: 0,
				tipo: 1
			});
		}

		this.remove = function(index) {
			cart.items.splice(index, 1);
		}

		this.getLength = function() {
			return cart.items.length
		}

		this.mudarValor = function(index) {
			// tipo.id = item.id

			var item = cart.items[index];

			if (item.tipo == 0) {
				item.cost = item.cost * -1;
			} else {
				item.cost = item.cost * -1;
			}
		}

		this.getTotal = function() {
			var total = 0;
			angular.forEach(cart.items, function(item) {
				total += item.qty * item.cost;
			});

			return total;
		}	
	})
.service('statesService', function($http){
	var states = {};
	this.getStates = function(callback){
		$http.get('http://statesapi.apiary.io/app.apiary.io/states').success(callback);
	}
})