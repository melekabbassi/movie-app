import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";


function favoritesReducer (state = [], action) {   
    switch(action.type) {
        case "ADD_FAVORITE":
            return state.concat([action.payload]);
        case "REMOVE_FAVORITE":
            return state.filter((item, index) => index !== action.id);
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        favorites: favoritesReducer
    }),
    applyMiddleware(logger)
);


export default store;