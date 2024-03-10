import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

const myLogger = (store) => (next) => (actions) => {
    console.log(`Action: ${JSON.stringify(actions)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);
    //console.log(`After: ${JSON.stringify(next)}`);

    //pass action 
    return next(actions);
}

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;