import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import candyReducer from "./candy/CandyReducer";
import iceCreamReducer from "./icecream/IcecreamReducer";
import UserReducer from "./User/UserReducer";
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    candy: candyReducer,
    user:UserReducer
})
export default rootReducer