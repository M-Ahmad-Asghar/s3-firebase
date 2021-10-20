const initialState = {
    isUserLoggedIn: false,
    user: null,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP': {
            // logic
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload
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
        default:
            return state;
    }
}
export default authReducer