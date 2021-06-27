<template>
  <div>
    <client-only>
      <vue-typer text="Países Favoritos" />
    </client-only>
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
    <carousel :autoplay="true" :per-page="1">
      <slide>
        <v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="500"
          src="https://picsum.photos/id/11/500/300"
        />
      </slide>
      <slide>
        <v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="500"
          src="https://picsum.photos/id/11/500/300"
        />
      </slide>
    </carousel>
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
