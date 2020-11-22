import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT } from '../actions/mainActions';

const profileReducer = (state = null, action) => {
    switch (action.type) {
        case LOGIN_ACCOUNT:
            return {...state, ...action.data};
        case LOGOUT_ACCOUNT:
            return null;
        default:
            return state;
    }
};

export default profileReducer;