import _ from 'lodash'

const LOCAL_STORAGE_MAIN_KEY = 'to-do-app-storate'

const lowLevelGetFromLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_MAIN_KEY) || '{}')
}

const lowLevelSetIntoLocalStorage = (storage) => {
  window.localStorage.setItem(LOCAL_STORAGE_MAIN_KEY, JSON.stringify(storage))
}

const set = (key, value = null) => {
  //check for ssr
  if(window){
    let storage = lowLevelGetFromLocalStorage()
    storage = _.set(storage, key, value)
    lowLevelSetIntoLocalStorage(storage)
  }
}

const get = (key, defaultValue = null) => {
  //check fo ssr
  if(window) {
    let storage = lowLevelGetFromLocalStorage()
    return _.get(storage, key, defaultValue)
  }

  return defaultValue
}

export default {
  set,
  get
}
