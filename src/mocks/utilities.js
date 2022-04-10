import localStorageManager from "src/libraries/local-storage-manager";

const LOW_LEVEL_MOCK_STORAGE_KEY = 'mock'
const MOCK_STORAGE_KEY = 'todos'
const getMaxNum = (numbersArray) => {
  let maxNumber = numbersArray[0] || 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if( numbersArray[i] > maxNumber ){
      maxNumber = numbersArray[i];
    }
  }
  return maxNumber;
}

const getMockedData = () => {
  return localStorageManager.get(LOW_LEVEL_MOCK_STORAGE_KEY, {})
}

const setMockedData = (mockData) => {
  localStorageManager.set('mock', mockData)
}

export {
  MOCK_STORAGE_KEY,
  getMaxNum,
  getMockedData,
  setMockedData
}
