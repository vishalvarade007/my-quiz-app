import rootReducer from "./Reducers/IndexReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;