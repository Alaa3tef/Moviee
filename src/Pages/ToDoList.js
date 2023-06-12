// import React, { useState } from "react";
// import ToDoForm from "./ToDoForm";

// function ToDoList() {
//     const [todos, setTodos] = useState([]);

//   const addTodo = todo => {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//     }

//     const newTodos = [todo, ...todos];

//     setTodos(newTodos);
//     console.log(todo,...todos);
//   };

//     return (
//         <>
//             <ToDoForm onSubmit={addTodo} />
//             <div className="w-50 mx-auto" style={{ backgroundColor: "#e9e9e9", height: "200px" }}>
//                 <p className="display-6 text-center pt-5">Let's get some work done!</p>
//             </div>
//         </>
//     )
// }

// export default ToDoList;