import { EDIT_USER, GET_ALL_USERS } from "./actionType";

export const getAllUsers = (users) => ({
	type: GET_ALL_USERS,
	payload: { users },
})

export const editUser = (id, userData) => ({
	type: EDIT_USER,
	payload: { id, userData }
});
