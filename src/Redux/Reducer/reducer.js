const initialstate = {
    data:[],
    product:[]
}


const reducer = (state = initialstate , action) =>{
    console.log("action ",action)
    switch(action.type){
        case "GET_DATA" :
            return {
                ...state,
                data : action.payload
            }
            break;
            case "GET_ITEM" :
            return {
                ...state,
                product : action.payload
            }
            break;
            default:
                return state
    }
}

export default reducer;