var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		brand: 'Nike',
		imageProduct: {
			alt: 'Product Image',
			link: 'https://ww.google.com',
			target: '_blank',
		},
		onSale: true,
		details: ['80% cotton', '20 polyester', 'Gender-neutral'],
		selectedVariant: 0,
		variants: [
			{
				variantId: 123,
				variantColor: 'green',
				variantImage: './images/green_sock_img.jpg',
				variantQuantity: 20,
			},
			{
				variantId: 456,
				variantColor: 'blue',
				variantImage: './images/blue_sock_img.jpg',
				variantQuantity: 0,
			},
		],
		cart: 0,
	},
	methods: {
		addToCart() {
			this.cart += 1;
		},
		updateProduct(index) {
			this.selectedVariant = index;
		},
		removeFromCart() {
			this.cart -= 1;
		},
	},
	computed: {
		title() {
			if (this.onSale) {
				return this.brand + ' ' + this.product;
			} else {
				return this.product;
			}
		},
		image() {
			return this.variants[this.selectedVariant].variantImage;
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity;
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

// Computed Properties


