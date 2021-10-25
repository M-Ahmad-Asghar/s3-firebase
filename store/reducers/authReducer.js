const initialState = {
    isUserLoggedIn: false,
    user: null,
    userState:false,
    userSet:false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP': {
            // logic
            return {
                ...state,
                isUserLoggedIn: false,
                userSet: true
            };
        }
        case 'LOGIN': {
            // logic
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload
            };
            
        }
        case 'AUTH_STATE': {
            // logic
            return {
                ...state,
                userState: true,
                user: action.payload
            };
        }
        case 'LOGOUT': {
            // logic
            return {
                ...state,
                isUserLoggedIn: false,
                user: null
            };
        }
        default:
            return state;
    }
}
export default authReducer