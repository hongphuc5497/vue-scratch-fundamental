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
		inStock: true,
		onSale: true,
		details: ['80% cotton', '20 polyester', 'Gender-neutral'],
		variants: [
			{
				variantId: 123,
				variantColor: 'green',
				variantImage: './images/green_sock_img.jpg',
			},
			{
				variantId: 456,
				variantColor: 'blue',
				variantImage: './images/blue_sock_img.jpg',
			},
		],
		cart: 0,
	},
	methods: {
		addToCart() {
			this.cart += 1;
		},
		updateProduct(variantImage) {
			this.image.src = variantImage;
		},
		removeFromCart() {
			this.cart -= 1;
		},
	},
});

// Vue Instance

// {{ }} - Vue Expression

// Reactive

// Attribute Binding
// v-bind:src='expression', shorthand - :src='expression'

// Conditional Rendering
// v-if, v-else-if, v-else, v-show

// List Rendering
// v-for, :key,

// Event Handling
// v-on:event, methods attribute, shorthand - @click, @mouseover, @submit, @keyup, ...

// Class & Style Binding
// :class, :style