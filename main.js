var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
    image: {
      src: './images/green_sock_img.jpg',
      alt: 'Product Image'
    },
    inStock: true
	},
});

// Vue Instance

// {{ }} - Vue Expression

// Reactive

// Attribute Binding - v-bind:src='expression'
// Shorthand - :src='expression'

// Conditional Rendering
// v-if, v-else-if, v-else
