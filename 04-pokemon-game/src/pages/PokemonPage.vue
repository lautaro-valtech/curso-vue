<template>
  <h1 v-if="!pokemon">Cargando...</h1>

  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonPicture 
      :pokemon-id="pokemon.id" 
      :show-pokemon="showPokemon" 
    />
    <PokemonOptions 
      :pokemons="pokemonOptions" 
      @selection="checkAnswer" 
    />
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonOptions,
    PokemonPicture
  },
  data() {
    return {
      pokemonOptions: [],
      pokemon:        null,
      showPokemon:    false,
      showAnswer:     false,
      message:        ''
    }
  },
  methods: {
    async randomizePokemons() {
      this.pokemonOptions = await getPokemonOptions()
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonOptions[rndInt]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer  = true

      if (selectedId === this.pokemon.id) {
        this.message = `Correcto, ${ this.pokemon.name }`
      } else {
        this.message = `Oops, era ${ this.pokemon.name }`
      }
    },
    newGame() {
      this.pokemon     = null
      this.showPokemon = false
      this.showAnswer  = false
      this.randomizePokemons()
    }
  },
  mounted() {
    this.randomizePokemons()
  }
};
</script>

<style></style>
