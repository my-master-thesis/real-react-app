import * as types from '../constants/ActionTypes'

export const addTask = (defaultContactId) => ({ type: types.ADD_TASK, defaultContactId })
export const editTask = (id, title, description, contactId) => ({ type: types.EDIT_TASK, id, title, description, contactId })
export const editTaskDuration = (id, startDate, duration) => ({ type: types.EDIT_TASK_DURATION, id, startDate, duration })
export const addContact = () => ({ type: types.ADD_CONTACT })
export const deleteContact = id => ({ type: types.DELETE_CONTACT, id })
export const editContact = (id, firstName, lastName, email, phone, companyId) => ({ type: types.EDIT_CONTACT, id, firstName, lastName, email, phone, companyId })
export const favoriteContact = id => ({ type: types.FAVORITE_CONTACT, id })
