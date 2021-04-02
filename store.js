import {applyMiddleware, createStore, compose} from "redux";


import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"
import AsyncStorage from "@react-native-community/async-storage";
import {persistStore, persistReducer} from "redux-persist";
import {reduxFirestore, getFirestore} from "redux-firestore";
import {reactReduxFirebase, getFirebase} from "react-redux-firebase";
import firebase from './config';



export const store = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase)
)
);

/*

const persistConfig = {
    key: "root3",
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig,rootReducer);
export const persistor = persistStore(store);
*/
