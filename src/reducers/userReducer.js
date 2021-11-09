import { GET_USER } from "../actionType";
export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
