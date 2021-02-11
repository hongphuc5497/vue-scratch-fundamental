const app = new Vue({
	el: '#app',
	data: {
		products: [],
	},
	computed: {
		totalProducts() {
			return this.products.reduce((sum, product) => sum + product.quantity, 0);
		},
	},
	created() {
		fetch('https://6024c8e236244d001797af40.mockapi.io/products')
			.then((response) => response.json())
			.then((json) => {
				this.products = json;
			});
	},
});
