const INITIAL_STATE = {
    b : 1
};
 
export default (state = INITIAL_STATE, action) => {
   
    if(action.type==='AGE DOWN'){
        return{
            ...state,
            b:state.a+state.b
        }
    }
    
    return state;
}