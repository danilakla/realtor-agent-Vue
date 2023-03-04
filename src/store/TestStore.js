
export const testModule = {
    state: () => ({
       backCounter:0
    }),
    getters: {
      getBackMore(state){
          return state.backCounter*2;
      }
    },

    mutations: {
        setBack(state) {
            state.backCounter =             state.backCounter +1;
        },

    },
    namespaced: true
}
