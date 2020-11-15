import { combineReducers } from 'redux'
import contacts from './contacts'
import companies from './companies'
import tasks from './tasks'

const rootReducer = combineReducers({
  contacts,
  companies,
  tasks,
})

export default rootReducer
