// import { demo } from "../Types"
let initialState = {
  data: '',
  users:[],
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
      };
    case 'ADD_DATA':
      return {
        ...state,
        data: action.payload
      };
      case 'UPLOAD_IMAGE':
        return {
          ...state,
          data: action.payload
        };
    default:
      return state;
  }

}
export default reducer