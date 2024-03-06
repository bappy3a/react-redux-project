import { createStore } from "redux";
import counterReduser from "./counter/counterReducer";


const store = createStore(counterReduser);

export default store;