import { todoApi } from "./../api/todoAPI";

const SET_ITEMS = "SET_ITEMS";
const SET_ITEM = "SET_ITEM";
const SET_DONE = "SET_DONE";
const SET_IMPORTANT = "SET_IMPORTANT";
const SET_DELETE_ITEM = "SET_DELETE_ITEM";
const ADD_NEW_ITEM = "ADD_NEW_ITEM";
const IS_MODAL_WINDOW_ADD_ITEM = "IS_MODAL_WINDOW_ADD_ITEM";
const ON_CHANGE_SEARCH_LABEL = "ON_CHANGE_SEARCH_LABEL";
const SET_FILTER_SEARCH = "SET_FILTER_SEARCH";
const SET_MAIN_TITLE = "SET_MAIN_TITLE";

const initialState = {
  mainTitle: "Mirudistok App",
  items: [],
  item: { title: "", text: "" },
  itemsLength: null,
  isModalWindowAddItem: false,
  searchLabel: "",
  filterSearch: "all",
};

const gengenerationId = (arr) => {
  let newArry = arr.reduce((max, current) => {
    max = max > current.id ? max : current.id;
    return max;
  }, 0);
  return ++newArry;
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS: {
      return {
        ...state,
        items: action.items,
        itemsLength: action.items.length,
      };
    }
    case SET_ITEM: {
      const item = state.items.find((i) => i.id === +action.id);
      return {
        ...state,
        item: { ...item },
      };
    }
    case SET_DONE: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return { ...item, done: !item.done };
          }
          return item;
        }),
      };
    }
    case SET_IMPORTANT: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return { ...item, important: !item.important };
          }
          return item;
        }),
      };
    }
    case SET_DELETE_ITEM: {
      const index = state.items.findIndex((item) => item.id === action.id);
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ],
      };
    }
    case ADD_NEW_ITEM: {
      const newItem = {
        title: action.title,
        id: gengenerationId(state.items),
        text: action.text,
        important: false,
        done: false,
      };
      return { ...state, items: [...state.items, newItem] };
    }
    case IS_MODAL_WINDOW_ADD_ITEM: {
      return {
        ...state,
        isModalWindowAddItem: !state.isModalWindowAddItem,
      };
    }
    case ON_CHANGE_SEARCH_LABEL: {
      return { ...state, searchLabel: action.label };
    }
    case SET_FILTER_SEARCH: {
      return {
        ...state,
        filterSearch: action.filter,
      };
    }
    case SET_MAIN_TITLE: {
      return {
        ...state,
        mainTitle: action.title,
      };
    }
    default:
      return state;
  }
};

const setItemsAC = (items) => {
  return {
    type: SET_ITEMS,
    items,
  };
};

export const setItemAc = (id) => {
  return {
    type: SET_ITEM,
    id,
  };
};

export const setDoneAc = (id) => {
  return {
    type: SET_DONE,
    id,
  };
};

export const setImportantAc = (id) => {
  return {
    type: SET_IMPORTANT,
    id,
  };
};

export const setDeleteItemAc = (id) => {
  return {
    type: SET_DELETE_ITEM,
    id,
  };
};

export const addNewItemAc = (title, text) => {
  return {
    type: ADD_NEW_ITEM,
    title,
    text,
  };
};

export const isModalWindowAddItemAc = () => {
  return {
    type: IS_MODAL_WINDOW_ADD_ITEM,
  };
};

export const onChangeSearchLabelAc = (label) => {
  return {
    type: ON_CHANGE_SEARCH_LABEL,
    label,
  };
};

export const setFilterSearchAc = (filter) => {
  return {
    type: SET_FILTER_SEARCH,
    filter,
  };
};

export const setmainTitleAc = (title) => {
  return {
    type: SET_MAIN_TITLE,
    title,
  };
};

export const todoListThunkCreator = () => (dispatch) => {
  const todo = new todoApi();
  todo.getTodo().then((items) => {
    dispatch(setItemsAC(items));
  });
};

export default itemReducer;
