import {applyMiddleware, createStore} from "redux";


import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"
import AsyncStorage from "@react-native-community/async-storage";
import {persistStore, persistReducer} from "redux-persist";


const middleware = [thunk];



export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware));

/*

const persistConfig = {
    key: "root3",
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig,rootReducer);
export const persistor = persistStore(store);
*/
