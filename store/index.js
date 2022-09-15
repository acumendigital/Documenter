import VuexPersistence from 'vuex-persist'

function getPlugins() {
  const plugins = []

  if (process.browser) {
    const vuexLocal = new VuexPersistence({
      key: 'documenter',
      storage: window.sessionStorage,
    })

    plugins.push(vuexLocal.plugin)
  }
  return plugins
}

export const plugins = getPlugins()

export const state = () => ({
  blockProperty: [],
  pageSectionRes: [],
})

export const mutations = {
  addBlockProperty(state, blockProperty) {
    state.blockProperty.push(blockProperty)
  },
  setBlockProperty(state, block) {
    state.blockProperty[block.index] = block.blockState
    console.log(block)
  },
  setCodeBlockResponsebyIndex(state, response) {
    state.blockProperty[response.index].note = response.responseContent
  },
  addPageSection(state, pageSection) {
    state.pageSectionRes.push(pageSection)
  },
}

export const actions = {
  getPresenceInSet({ state }, id) {
    return state.pageSectionRes.has(id)
  },
}

export const getter = {}
