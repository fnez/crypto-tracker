<template>
  <div>
      <p>Name: {{ coin.name }}</p>
      <p>Symbol: {{ coin.symbol }}</p>
      <p>Price (USD): {{ coin.price_usd }}</p>
  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Coins',
        data() {
            return {
                coin: {}
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            '$route' : 'fetchData'
        },
        methods: {
            fetchData() {
                axios.get(`https://api.coinmarketcap.com/v1/ticker/${this.$route.params.id}/`)
                    .then((resp) => {
                        console.log(`resp is ${resp}`);
                        this.coin = resp.data[0]
                        console.log(`this.coin is ${this.coin}`)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }
</script>


//Note: We get the parameter from the $route object params property. This object is auto injected by VueRouter. The parameter we want is the :id parameter which we defined in our router file. On success, as defined in the 'then' promise method we save the data returned inro our coin object. This is then rendered on in the template.