const INITIAL_STATE = {
    a: 1,
};
 
export default (state = INITIAL_STATE, action) => {
    if(action.type==='AGE_UP'){
        return{
            ...state,
            a:state.a+state.b
        }
    }
    if(action.type==='AGE_DOWN'){
        return{
            ...state,
            a:state.a+state.b
        }
    }
    return state;
}