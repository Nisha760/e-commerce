import { combineReducers } from "redux";
import { cartReducer } from "./reducer/cart";
import { dataReducer } from "./reducer/data";
import { userReducer } from "./reducer/user";


const rootReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer,
    user: userReducer
})


export { rootReducer };