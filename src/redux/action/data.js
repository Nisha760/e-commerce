const fetchDataActionCreator = (data) => {
    return {
        type: "fetch data",
        payload: data
    }
}

const setCurrentDisplayData = (value = "all")=>{
    return {
        type: "set current display data",
        payload: value
    }
}


export { fetchDataActionCreator, setCurrentDisplayData };