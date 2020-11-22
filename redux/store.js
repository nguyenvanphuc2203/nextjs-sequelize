import {createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
    key: 'root',
    storage: storage
    // stateReconciler: autoMergeLevel2 
}

const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(pReducer, composeWithDevTools(
    applyMiddleware()
));

export const persistor = persistStore(store);
