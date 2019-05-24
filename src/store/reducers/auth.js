import { 
    LOGIN_USER, LOGOUT_USER
} from '../actions/actionTypes'

const initialState = {
    user: {
        uid: '',
        email: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state, 
                user: {
                    uid: action.payload.uid,
                    email: action.payload.email
                }
            }
            case LOGOUT_USER:
                return {
                    ...state, 
                    user: {
                        uid: '',
                        email: ''
                    }
                }
        default:
            return state
    }
}

export default reducer