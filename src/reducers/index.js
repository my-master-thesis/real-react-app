import { combineReducers } from 'redux'
import contacts from './contacts'
import companies from './companies'

const rootReducer = combineReducers({
  contacts,
  companies,
})

export default rootReducer
