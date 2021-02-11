Vue.component('product', {
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
	},
	template: `
  <div class="product">
    <div class="product-image">
      <a :href="imageProduct.link" :target="imageProduct.target">
        <img v-bind:src="image" :alt="imageProduct.alt" />
      </a>
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>

      <p v-if="inStock">In Stock</p>
      <p v-else :class="{ outStock: !inStock }">Out of Stock</p>

      <p>Shipping: {{ shipping }} </p>

      <span v-show="onSale && inStock">On Sale!</span>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <div
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)"
      ></div>

      <button
        v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Add to cart
      </button>
      <button @click="removeFromCart">Remove from cart</button>
    </div>
  </div>
  `,
	data() {
		return {
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
		};
	},
	methods: {
		addToCart() {
			this.$emit('add-to-cart');
		},
		removeFromCart() {
			this.$emit('remove-from-cart');
		},
		updateProduct(index) {
			this.selectedVariant = index;
		},
	},
	computed: {
		title() {
			if (this.onSale) {
				return this.brand + ' ' + this.product;
			}

			return this.product;
		},
		image() {
			return this.variants[this.selectedVariant].variantImage;
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity;
		},
		shipping() {
			if (this.premium) {
				return 'Free';
			}

			return 2.99;
		},
	},
});

var app = new Vue({
	el: '#app',
	data: {
		premium: true,
		cart: 0,
	},
	methods: {
		updateCart(type) {
			if (type == 'add') {
				this.cart += 1;
			} else if (type == 'remove') {
				this.cart -= 1;
			}
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

// Components
// Vue.component('componentName', {
//   props: ,
//   template: ``,
//   data() {
//     return {}
//   },
//   methods: ,
//   computed: ,
//   ...
// })
