import { initialCart } from "../state/cart";

const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case 'add to cart':
            {
                const index = state.findIndex(o => o.id === action.payload.id);
                let local = JSON.parse(localStorage.getItem("cart"));
                if (index !== -1) {
                    let newState ;

                    let localIndex = local.findIndex(o => o.id === action.payload.id);
                    local.splice(localIndex, 1, action.payload);
                    localStorage.setItem("cart", JSON.stringify(local)) ;

                    newState = local ;
                    return newState
        

                }
                const newState = [...state];
                newState.push(action.payload);
                if(localStorage.getItem("cart") == null)
                {
                    local = [] ;
                }
                local.push(action.payload) ;
                localStorage.setItem("cart", JSON.stringify(local)) ;
                return newState;
            };
        case 'set cart':
            {

                return [...action.payload]
            }

        case 'clear cart':
            {
                localStorage.clear();
                return [];
            }

        case 'delete item': {
            let local = JSON.parse(localStorage.getItem("cart"));
            let localIndex = local.findIndex(o => o.id === action.payload);
            local.splice(localIndex, 1);
            localStorage.setItem("cart", JSON.stringify(local));
            const newState = local ;
            return newState;
        }
        default:
            return state;
    }
}

export { cartReducer };