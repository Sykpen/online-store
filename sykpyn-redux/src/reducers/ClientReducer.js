import { SET_CURRENT_CLIENT_DATA, SET_CLIENTS } from "../constants";

const initialState = {
  id: "",
  email: "",
  password: "",
  address: "",
  first_name: "",
  last_name: "",
  nick_name: "",
  balance: "",
  bonus: "",
  clientsList: [],
};

export const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENTS:
      return {
        ...state,
        clientsList: action.clients,
      };
    case SET_CURRENT_CLIENT_DATA:
      return {
        ...state,
        id: action.data.id,
        email: action.data.email,
        address: action.data.address,
        firstName: action.data.first_name,
        lastName: action.data.last_name,
        nickName: action.data.nick_name,
        balance: action.data.balance,
        bonus: action.data.bonus,
      };
    default:
      return state;
  }
};
