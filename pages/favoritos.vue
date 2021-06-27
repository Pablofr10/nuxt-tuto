<template>
  <div>
    <h1>Países Favoritos {{ totalFavoritos }}</h1>
    <ul>
      <li v-for="pais in favoritos" :key="pais.id">
        <nuxt-link :to="'paises/' + pais.id">
          {{ pais.nome }}
        </nuxt-link>
        <v-btn depressed color="error" @click="deletarFavorito(pais.id)">
          Delete favorito
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      paises: [
        { id: 1, nome: 'Angola' },
        { id: 2, nome: 'Brasil' },
        { id: 3, nome: 'Cabo Verde' },
        { id: 4, nome: 'Portugal' }
      ]
    }
  },
  computed: {
    ...mapGetters('paises', ['favoritos', 'totalFavoritos'])
  },
  methods: {
    ...mapActions('paises', ['adicionarFavorito', 'deletarFavorito'])
  }
}
</script>
