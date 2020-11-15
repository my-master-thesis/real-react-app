import * as types from '../constants/ActionTypes'

export const addContact = () => ({ type: types.ADD_CONTACT })
export const deleteContact = id => ({ type: types.DELETE_CONTACT, id })
export const editContact = (id, firstName, lastName, email, phone, companyId) => ({ type: types.EDIT_CONTACT, id, firstName, lastName, email, phone, companyId })
export const favoriteContact = id => ({ type: types.FAVORITE_CONTACT, id })
