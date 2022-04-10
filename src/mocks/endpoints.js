import _ from "lodash";
import {MOCK_STORAGE_KEY, getMaxNum, getMockedData, setMockedData} from "src/mocks/utilities";

const GET_TODOS = () => {
  return _.get(getMockedData() ,MOCK_STORAGE_KEY, [])
}

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
