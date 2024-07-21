import React, { useEffect, useState } from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    /* const [valor, setValor] = useState(0);

    const incrementar = () =>{
        setValor(valor + 1);
    } */

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todosLocal = JSON.parse(
            localStorage.getItem('todos')) || [];
            setTodos(todosLocal);
    }, []);


    return (
        <div className="Home">
            <h2>Minhas Tarefas</h2>
            <Link to={'./formtodo'}>Nova Tarefa</Link>
            <ul>
                {todos.map(todo=>(
                    <li key={todo.key}>{todo.nomeTarefa} - {todo.observacao}</li>
                ))}
            </ul>

            {/*<button onClick={incrementar}>Incrementar</button>
            {valor}*/}
        </div>
    );

}

export default Home;