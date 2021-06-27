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
      id: this.$route.params.id
    }
  }
}
</script>
