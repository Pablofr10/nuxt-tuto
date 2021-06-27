<template>
  <h1>Você está em: País {{ id }}</h1>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  data () {
    return {
      id: this.$route.params.id,
      pais: [
        { id: 1, nome: 'Angola' },
        {
          id: 2,
          nome: 'Brasil',
          content:
            'Smart TV HD LED 32” Samsung 32T4300A - Wi-Fi HDR 2 HDMI 1 USB com as melhores condições você encontra no site do Magalu. Confira!'
        },
        { id: 3, nome: 'Cabo Verde' },
        { id: 4, nome: 'Portugal' }
      ].find(x => x.id === +this.$route.params.id)
    }
  },
  head () {
    return {
      title: this.pais.nome,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.pais.content
        }
      ]
    }
  }
}
</script>
