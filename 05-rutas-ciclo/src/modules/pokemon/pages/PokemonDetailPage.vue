<template>
  <h1>Pokemon Detail Page: <span>#{{ id }}</span></h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      pokemon: null
    }
  },
  created() {
    this.getPokemon()
  },
  methods: {
    async getPokemon() {
      try {
        const pokemonApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        const pokemonData = await pokemonApiResponse.json()
        console.log('pokemon', pokemonData)
        this.pokemon = pokemonData
      } catch (err) {
        this.$router.push('/')
        console.log('Pokemon not found')
      }
    }
  },
  watch: {
    id() {
      this.getPokemon()
    }
  }
}
</script>
