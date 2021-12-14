import React from 'react'


const TodoItem = ({todo}) => {
   return (
       <tr>
            <td>
               {todo.username}
           </td>
           <td>
               {todo.first_name}
           </td>
           <td>
               {todo.last_name}
           </td>

       </tr>
   )
}


const TodoList = ({users}) => {
   return (
       <table>
            <th>
               Username
           </th>
           <th>
               First name
           </th>
           <th>
               Last Name
           </th>
           {users.map((todo) => <TodoItem todo={todo} />)}
       </table>
   )
}


export default TodoList