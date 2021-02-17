import axios from 'axios';
import { getAllUsers, editUser } from './action';

const url = 'https://reqres.in/api/users';

const fetchUsers = () => {
	return axios.get(url);
};

const updateUser = (id, data) => {
	return axios.put(`${url}/${id}`, data);
}

export const getUsersList = () => (dispatch) => {
	return fetchUsers().then((res) => {
		const allUsers = res.data.data;
		dispatch(getAllUsers(allUsers));
	});
};

export const updateUserById = (id, data) => (dispatch) => {
	return updateUser(id, data).then((res) => {
		console.log(res.data);
		dispatch(editUser(id, res.data));
	});
};
