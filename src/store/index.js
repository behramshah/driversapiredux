import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import { offsetReducer } from "./offsetreducer"
import { favoriteReducer } from "./favoriteReducer";

export default combineReducers({
    list: listReducer,
    offset: offsetReducer,
    favorite: favoriteReducer
});