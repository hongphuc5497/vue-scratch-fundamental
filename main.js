var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		image: {
			src: './images/green_sock_img.jpg',
			alt: 'Product Image',
			link: 'https://ww.google.com',
			target: '_blank',
		},
		inventory: 120,
    onSale: true
	},
});

// Vue Instance

// {{ }} - Vue Expression

// Reactive

// Attribute Binding - v-bind:src='expression'
// Shorthand - :src='expression'

// Conditional Rendering
// v-if, v-else-if, v-else, v-show
