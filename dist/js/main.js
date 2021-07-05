const App = {
	data() {
		return {
			cards: [],
			page: 1,
			limit: 16,
			loading: false
		}
	},
	methods: {
		async getCards() {
      try {
      	this.loading = true
        const {data} = await axios.get(`https://6075786f0baf7c0017fa64ce.mockapi.io/products?page=${this.page}&limit=${this.limit}`)
        this.cards.push(...data)
				this.page++
				this.loading = false
      } catch (e) {
        console.log(e.message)
      }
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
