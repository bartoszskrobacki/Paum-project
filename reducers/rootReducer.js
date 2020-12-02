import {combineReducers} from "redux";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import finalizeOrderReducer from "./finalizeOrderReducer";


export default combineReducers({
    userState: userReducer,
    orderState: orderReducer,
    finalizeOrderState: finalizeOrderReducer
})
