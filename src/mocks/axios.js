import localStorageManager from "src/libraries/local-storage-manager";
import _ from 'lodash'

const getData = (method, url, data = null) => {

  return new Promise((accept, reject) => {
    //Randomize the answer
    setTimeout(() => {
      if(Math.random() <= 0.3) {
        reject()
      }else{
        accept({data: buildData(method, url, data)})
      }
    }, Math.random()*2000);
  });
}


const MOCK_STORAGE_KEY = 'todos'
function getMaxNum(numbersArray){
  let maxNumber = numbersArray[0] || 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if( numbersArray[i] > maxNumber ){
      maxNumber = numbersArray[i];
    }
  }
  return maxNumber;
}

const buildData = (method, url, d = null) => {
  const data = _.cloneDeep(d)
  let r = {}
  const mockData = localStorageManager.get('mock', {})
  if(method === 'get'){
    if(url === '/todos'){
      r = _.get(mockData ,MOCK_STORAGE_KEY, [])
    }
  }
  if(method === 'post'){
    if(url === '/todos'){
      r = _.get(mockData ,MOCK_STORAGE_KEY, [])
      let ids = _.map(r, 'id') || [0]
      data.id = (getMaxNum(ids) + 1)
      r.push(data)
      _.set(mockData, MOCK_STORAGE_KEY, r)
      localStorageManager.set('mock', mockData)
      r = data
    }
  }
  return r
}

export default getData
