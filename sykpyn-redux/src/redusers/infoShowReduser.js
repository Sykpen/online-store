import { SHOW_INFO } from "../constants/constants";

const initialState = {
  info: [],
};

export const infoShowReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return { ...state, info: "КУ_КУ" };
    default:
      return state;
  }
};
