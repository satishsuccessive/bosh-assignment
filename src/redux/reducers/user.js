import { EDIT_USER, GET_ALL_USERS } from "../actionType";

const initialState = {
	users: [{}],
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case EDIT_USER: {
			const { id, userData } = action.payload;
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === id) {
						return { ...user, ...userData };
					}
					return user;
				}),
			};
		}
		case GET_ALL_USERS: {
			return {
				...state,
				users: action.payload.users,
			};
		}
		default:
			return state;
	}
};

export default userReducer;
