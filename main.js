const app = new Vue({
	el: '#app',
	data: {
		products: [],
	},
	created() {
		fetch('https://6024c8e236244d001797af40.mockapi.io/products')
			.then((response) => response.json())
			.then((json) => {
				this.products = json;
			});
	},
});
