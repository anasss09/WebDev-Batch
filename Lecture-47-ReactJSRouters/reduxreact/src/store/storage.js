import { createStore } from "redux";
import rootReducer from "../reduce/rootReducer";

const store = createStore(rootReducer)

export default store;