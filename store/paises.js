export const state = () => ({
  paisesFavoritos: []
})

export const getters = {
  favoritos (state) {
    return state.paisesFavoritos
  },
  totalFavoritos (state) {
    return state.paisesFavoritos.length
  }
}

export const mutations = {
  addFavorito (state, payload) {
    state.paisesFavoritos.push({ ...payload })
  },
  deleteFavorito (state, payload) {
    state.paisesFavoritos = state.paisesFavoritos.filter(x => x.id !== payload)
  }
}

export const actions = {
  adicionarFavorito ({ commit }, payload) {
    commit('addFavorito', payload)
  },
  deletarFavorito ({ commit }, payload) {
    commit('deleteFavorito', payload)
  }
}
