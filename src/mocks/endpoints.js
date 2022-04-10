import _ from "lodash";
import {MOCK_STORAGE_KEY, getMaxNum, getMockedData, setMockedData} from "src/mocks/utilities";

/** It returns the todos stored in the local storage*/
const GET_TODOS = () => {
  return _.get(getMockedData() ,MOCK_STORAGE_KEY, [])
}

/** It stores a ne todo in the local storage with a new id and returns it*/
const POST_TODOS = (data) => {
  const mockData = getMockedData()
  let r = GET_TODOS()
  let ids = _.map(r, 'id') || [0]
  data.id = (getMaxNum(ids) + 1)
  r.push(data)
  _.set(mockData, MOCK_STORAGE_KEY, r)
  setMockedData(mockData)
  r = data
  return r
}

/** It delete a todo from the local storage by id*/
const DELETE_TODOS = (id) => {
  const mockData = getMockedData()
  let r = GET_TODOS()
  r = _.filter(r, (i) => i.id !== id)
  _.set(mockData, MOCK_STORAGE_KEY, r)
  setMockedData(mockData)
  return null
}

export {
  GET_TODOS,
  POST_TODOS,
  DELETE_TODOS
}
