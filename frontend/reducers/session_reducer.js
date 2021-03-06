import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_action';

const _nullSession = {
    currentUser: null
}

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}