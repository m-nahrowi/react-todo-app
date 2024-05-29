import React from "react";


export const TodoItem = ({ todo, toggleCompleted }) => {
    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return { textDecoration: 'line-through' }
        } else {
            return { textDecoration: 'none' }
        }
    }


    return (
        <div style={styles.todoItem}>
            {/* menambahkan checkbox */}
            <input
                type="checkbox"
                style={styles.checkbox}
                // jalankan fungsi toggleCompleted
                onChange={() => toggleCompleted(todo.id)}
            />

            <p style={getTodoTitleStyle()}>{todo.title}</p>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // chechbox
    checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px',
    }
}
