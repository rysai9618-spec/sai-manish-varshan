import React,{useState} from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
const counterSlice = createSlice({
name:"counter",
initialState:{value:0},
reducers:{
increment:(state)=>{
state.value +=1
},
decrement:(state)=>{
state.value -=1
}
}
});
const todosSlice = createSlice({
name:"todos",
initialState:{todos:[]},
reducers:{
addTodo:(state,action)=>{
state.todos.push({
id:Date.now(),
text:action.payload,
completed:false
})
},
toggleTodo:(state,action)=>{
const todo = state.todos.find(
todo=>todo.id===action.payload
);
if(todo){
todo.completed=!todo.completed
}
}
}
});
const store = configureStore({
reducer:{
counter:counterSlice.reducer,
todos:todosSlice.reducer
}
});
function ManApp(){
const count = useSelector(
(state)=>state.counter.value
);
const todos = useSelector(
(state)=>state.todos.todos
);
const dispatch = useDispatch();
const [text,setText]=useState("");
return(
<div style={{textAlign:"center"}}>
<h1>Redux Toolkit Example</h1>
<h2>Counter : {count}</h2>
<button onClick={()=>
dispatch(counterSlice.actions.increment())
}>
Increment
</button>
<button onClick={()=>
dispatch(counterSlice.actions.decrement())
}>
Decrement
</button>
<hr/>
<h2>Todo List</h2>
<input
value={text}
onChange={(e)=>
setText(e.target.value)
}
/>
<button onClick={()=>{
dispatch(
todosSlice.actions.addTodo(text)
);
setText("");
}}>
Add
</button>
{
todos.map((todo)=>(
<p
key={todo.id}
onClick={()=>dispatch(
todosSlice.actions.toggleTodo(todo.id)
)}
style={{
cursor:"pointer",
textDecoration:
todo.completed ?
"line-through":"none"
}}
>
{todo.text}
</p>
))
}
</div>
);
)
function App(){
return(
<Provider store={store}>
<MainApp/>
</Provider>
);
}
export default App;