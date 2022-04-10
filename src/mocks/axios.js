import localStorageManager from "src/libraries/local-storage-manager";
import _ from 'lodash'
import {GET_TODOS, POST_TODOS, DELETE_TODOS} from "src/mocks/endpoints";

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




const buildData = (method, url, d = null) => {
  const data = _.cloneDeep(d)
  let r = null
  const mockData = localStorageManager.get('mock', {})
  if(method === 'get'){
    if(url === '/todos'){
      r = GET_TODOS()
    }
  }
  if(method === 'post'){
    if(url === '/todos'){
      r = POST_TODOS(data)
    }
  }
  if(method === 'delete'){
    const result = /\/todos\/(\d+)/gm.exec(url)
    if(result){
      r = DELETE_TODOS(parseInt(result[1]))
    }
  }
  return r
}

export default getData
