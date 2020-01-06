
const mainReducer=(state=[],action)=>{
    if(action.type==="CHANGE_MOVIE"){
        return{
            ...state,
                data:action.data
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;