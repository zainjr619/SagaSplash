import {combineReducers} from 'redux';
import loadingReducer from "./loadingReducer";
import imagesReducers from "./imagesReducers";
import errorReducer from "./errorReducer";

const rootReducer=combineReducers(
    {
        isLoading:loadingReducer,
        images:imagesReducers,
        error:errorReducer,

    }
);
export default  rootReducer;



