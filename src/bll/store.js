import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import itemReducer from './item-reducer'
import { reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    itemReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
