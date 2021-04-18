import React from 'react';
import TodoItem from './TodoItem';
export const Todos = (props) => {

    return (
        <div className="container my-3 " >
            <h3 className="text-danger my-3">Todos List</h3>
            {props.todos.length === 0 ?
                <div class="alert alert-info" role="alert">
                    No Todos left to display!</div> :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}
                    />    
                }
                )
            }
        </div>
    )
}
