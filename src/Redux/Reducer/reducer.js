const initialstate = {
    data:[]
}


const reducer = (state = initialstate , action) =>{
    switch(action.type){
        case "GET_DATA" :
            return {
                ...state,
                data : action.payload
            }
            break;
            default:
                return state
    }
}

export default reducer;