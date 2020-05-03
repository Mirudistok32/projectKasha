import { Aphorisms } from "./../api/aphorismsAPI";

const SET_APHORISMS = "SET_APHORISMS";

const initialState = {
  aphorisms: [],
};

const aphorismsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APHORISMS: {
      return { ...state, aphorisms: action.aphorisms };
    }
  }

  return state;
};

const setAphorismsAC = (aphorisms) => {
  return {
    type: SET_APHORISMS,
    aphorisms,
  };
};

export const setAphorismsThunkCreator = () => (dispatch) => {
  const aphorisms = new Aphorisms();
  aphorisms.getAphorisms().then((items) => {
    dispatch(setAphorismsAC(items));
  });
};

export default aphorismsReducer;
