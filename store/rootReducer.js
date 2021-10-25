import { combineReducers } from "redux";
import reducer from '../store/reducers/reducer'
import authReducer from '../store/reducers/authReducer'
 const rootReducer = combineReducers({
    reducer, authReducer
})

export default rootReducer