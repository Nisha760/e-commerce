import { initialData } from "../state/data";

const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        case "fetch data":
            return {
                ...state,
                completeData: action.payload
            }
        case "set current display data":
            {

                const value = action.payload.toLowerCase();
                if(value === "all")
                {
                    return {
                        ...state,
                        currentDisplayData: state.completeData.items
                    }
                }

                const filteredArr = state.completeData.items.filter((ele) => {
                    if (ele.category.toLowerCase().includes(value))
                        return true;
                    if (ele.title.toLowerCase().includes(value))
                        return true;
                    if (ele.brand.toLowerCase().includes(value))
                        return true;
                    return false;
                })
                return {
                    ...state,
                    currentDisplayData: filteredArr
                }
            }
        default:
            return state
    }
}

export { dataReducer };