import localStorageManager from "src/libraries/local-storage-manager";

/** KEY inside the local storage to store mock main object*/
const LOW_LEVEL_MOCK_STORAGE_KEY = 'mock'

/** KEY inside the mock main object to store todos*/
const MOCK_STORAGE_KEY = 'todos'

/** builds max id + 1 from a array of ids*/
const getMaxNum = (numbersArray) => {
  let maxNumber = numbersArray[0] || 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if( numbersArray[i] > maxNumber ){
      maxNumber = numbersArray[i];
    }
  }
  return maxNumber;
}

/** gets mock main object from the local storage */
const getMockedData = () => {
  return localStorageManager.get(LOW_LEVEL_MOCK_STORAGE_KEY, {})
}

/** sets mock main object into the local storage */
const setMockedData = (mockData) => {
  localStorageManager.set('mock', mockData)
}

export {
  MOCK_STORAGE_KEY,
  getMaxNum,
  getMockedData,
  setMockedData
}
