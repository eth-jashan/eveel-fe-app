import { LOGIN, PHONE } from "../action/auth";

const initialState = {
  uid: null,
  token: null,
  first_name: "",
  last_name: "",
  phone_number: "",
  email_id: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        uid: action.uid,
        token: action.token,
        first_name: action.first_name,
        last_name: action.last_name,
        email_id: action.email_id,
      };
    case PHONE:
      return {
        ...state,
        phone_number: action.number,
        token: action.token,
        uid: action.uid,
      };
    default:
      return state;
  }
};

//user/${uid}
