import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormTodo = () => {

    //const [nomeTarefa, setNomeTarefa] = useState('');

    const navigate = useNavigate();
    const [todo, setTodo] = useState({key:0, 'nomeTarefa':'', observacao: ''});

    const atualizarValor = (input) =>{
        setTodo({...todo,[input.target.id]:input.target.value});
    }

    const salvar = () =>{
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const novoTodo = { ...todo,key: todos.length};
        /* setTodo({...todo, key: todos.length});
        todos.push({...todo, key: todos.length}); */
        /* setTodo({...todo, ['key']:todos.lenght})*/
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        navigate(-1);
    }



    return(
        <div>
            <h1>Cadastro de Formulário</h1>
            <input type="text" onChange={atualizarValor} value={todo.nomeTarefa} id="nomeTarefa"/>
            <input type="text" onChange={atualizarValor} value={todo.observacao} id="observacao"/>
            <button onClick={salvar}>Cadastrar</button>
        </div>
    )

}
export default FormTodo;