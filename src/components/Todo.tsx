import React from 'react';
import { TodoItem } from './TodoItem';

const Todos = ({ todos }) => {
    return (
        <div>
            {
                todos.map((todo: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
                    return <TodoItem key={todo.id} todo={todo}/>
                       
                })
            }
        </div>
    )
}

export default Todos;