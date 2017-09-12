Vue.component('proverb', {
	template: `
		<div>
			<i class="fa fa-cog fa-spin fa-5x fa-fw" v-if="!loaded"></i>
			<span class="sr-only" v-if="!loaded">Loading...</span>			
			<h1>{{ proverb }}</h1>
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