import { CalcFinance } from "./../api/calcFinanceAPI";

const SET_CALC_ITEMS = "SET_CALC_ITEMS";
const SET_FILTER = "SET_FILTER";
const SET_NEW_CALC_ITEM = "SET_NEW_CALC_ITEM";
const SET_NEW_SETTING = "SET_NEW_SETTING";
const DELETE_ITEM = "DELETE_ITEM";

const initialState = {
  items: [],
  total: 1000,
  income: 0,
  expenses: 0,
  filter: "all",
};

const calcFinanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CALC_ITEMS: {
      return {
        ...state,
        items: action.items,
        income: action.items.reduce((acc, i) => {
          if (i.number > 0) {
            acc = acc + i.number;
          }
          return acc;
        }, 0),
        expenses: action.items.reduce((acc, i) => {
          if (i.number < 0) {
            acc = acc + i.number;
          }
          return acc;
        }, 0),
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filter: action.filter,
      };
    }

    case SET_NEW_CALC_ITEM: {
      const newItem = {
        id: Date.now().toString(),
        text: action.text,
        number: +action.number,
      };
      return {
        ...state,
        items: [...state.items, newItem],
        income:
          +action.number >= 0 ? state.income + +action.number : state.income,
        expenses:
          +action.number < 0 ? state.expenses + +action.number : state.expenses,
        total: state.total + +action.number,
      };
    }
    case SET_NEW_SETTING: {
      return {
        ...state,
        items: [],
        total: +action.number,
        income: 0,
        expenses: 0,
      };
    }
    case DELETE_ITEM: {
      const { number } = state.items.find((i) => i.id === action.id);

      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
        total: state.total - +number,
        income: number >= 0 ? state.income - +number : state.income,
        expenses: number < 0 ? state.expenses - +number : state.expenses

      };
    }
    default: {
      return state;
    }
  }
};

const setCalcItemsAc = (items) => {
  return {
    type: SET_CALC_ITEMS,
    items,
  };
};

export const setNewCalcItemAc = (text, number) => {
  return {
    type: SET_NEW_CALC_ITEM,
    text,
    number,
  };
};

export const setFilterAC = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  };
};

export const setNewSettingsAC = (number) => {
  return {
    type: SET_NEW_SETTING,
    number,
  };
};

export const deleteItemAC = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};

export const setCalcItemsThunkCreator = () => (dispatch) => {
  const calcFinance = new CalcFinance();
  calcFinance.getCalcItems().then((items) => {
    dispatch(setCalcItemsAc(items));
  });
};

export default calcFinanceReducer;
