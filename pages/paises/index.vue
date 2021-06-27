<template>
  <div>
    <h1>Países</h1>
    <ul>
      <li v-for="pais in paises" :key="pais.id">
        <nuxt-link :to="'paises/' + pais.id">
          {{ pais.nome }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
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
  }
}
</script>
