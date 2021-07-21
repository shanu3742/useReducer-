import React, {useReducer }  from 'react';







function App() {


    
//step 4 :change state using reducer function
    const reducer = (state, action) => {
      if(action.type ==='increment'){
       return	state= state+1;
      }
      else if(action.type==='decrement'){
       return	state = state-1
      }
      else{
        return state;
      }
    
    }
    //step 2: set initial value
    const initialstate = 0
    //step 1:define reducer
    const[state,dispatch]= useReducer(reducer,initialstate)

   
  return (
    <>
   {/*step3: define all type of action you want on onClick */}
<h1><span onClick= {() => dispatch({ type: 'increment'})}>+</span>{state}<span  onClick= {() => dispatch({ type: 'decrement'})}>-</span></h1>    
    </>
    

  );
}

export default App;