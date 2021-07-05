const App = {
	data() {
		return {
			cards: []
		}
	},
	methods: {
		async getCards() {
			const {data} = await axios.get('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
			this.cards = data
		},
		getDate(val){
			return moment(new Date(val * 1000)).format('DD.MM.YY, hh:mm');
		}
	},
	mounted() {
		this.getCards()
	}
}

Vue.createApp(App).mount('#app')
