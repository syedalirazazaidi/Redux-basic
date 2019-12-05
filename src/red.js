import { createStore } from 'redux';
const  inState = {
  age  : 21,
} ; 
const myReducer = (state = inState, action)=>{
  const newState = {...state};
  if(action.type==='ADD'){
    newState.age+= 1
  }
return newState;
}

const store = createStore(myReducer)
store.subscribe(()=>{
  console.log('State Change')
})

store.dispatch({type : 'ADD'})
console.log(store.getState())