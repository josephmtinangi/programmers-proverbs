Vue.component('proverb', {
	template: `
		<div>
			<i class="fa fa-cog fa-spin fa-5x fa-fw" v-if="!loaded"></i>
			<span class="sr-only" v-if="!loaded">Loading...</span>

			<blockquote class="blockquote">		
				<p class="mb-0">{{ proverb }}</p>
			</blockquote>

			<a class="btn btn-primary btn-sm twitter-share-button"
			  :href="'https://twitter.com/intent/tweet?text=' + proverb " target="_blank" v-if="loaded">
			<i class="fa fa-twitter"></i> Tweet</a>
			<br /><br />

			<button class="btn btn-outline-dark btn-lg" v-if="loaded" @click="getProverb">Next</button>
		</div>
	`,
	data: function () {
		return {
			loaded: false,
			proverb: ''
		}
	},
	methods: {
		getProverb: function () {
			this.loaded = false;
			this.proverb = '';
			axios.get('http://proverbs-app.antjan.us/random')
				.then(function(response) {
					this.proverb = response.data;
					this.loaded = true;
				}.bind(this))
				.catch(function (error) {
					console.log(error);
				});			
		}
	},
	mounted() {
		this.getProverb();
	}
})

new Vue({
	el: '#app',
	data: {
		proverb: '',
	}
})