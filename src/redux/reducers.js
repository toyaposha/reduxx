const counterReducer = (state=0, action) => {
switch (action.type) {
    case 'INCREASE_COUNTER' :
        return state +1 
        default : 
        return state
    case  'DECREASE_COUNTER' :
        return state -1
            
}
}
 export default counterReducer