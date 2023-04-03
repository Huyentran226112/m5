import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        console.log('Initialization ');
        super(props);

        // Tao state
        this.state = {
            editId: -1,
            todo: null,
            todos: []
        }
    }

    setTodo = (value) => {
        this.setState({ todo: value })
    }
    addTodo = () => {
        let cr_todos = this.state.todos;
        cr_todos.push(this.state.todo);

        // them vao todos
        this.setState({ todos: cr_todos });

        // Lam rong todo
        this.setState( { todo: '' } )

    }
    editTodo = (id) => {
        // Lay todo tu mang
        let todo = this.state.todos[id];

        // Set editId
        this.setState( { editId: id } )

        // Dua gia tri vao o input
        this.setState( { todo: todo } )
    }
    deleteTodo = (id) => {
        // const ask = confirm('Ban co chac chan xoa');
        // if( ask == true ){
            let cr_todos = this.state.todos;
            cr_todos.splice( id,1 );
            this.setState({ todos: cr_todos });
        // }

    }

    updateTodo = () => {
        const id = this.state.editId;

        //Cap nhat mang cr_todos
        let cr_todos = this.state.todos;
        cr_todos[id] = this.state.todo;

        // thiet lap gia tri todos
        this.setState({ todos: cr_todos });

        // Lam rong todo
        this.setState( { todo: '' } )

        // Set editId
        this.setState( { editId: -1 } )
    }
    render() {
        const addButton = <button onClick={this.addTodo}> Add </button>;
        const updateButton = <button onClick={this.updateTodo}> Update </button>;
        return (
            <div>
                <h1> {this.state.todo} </h1>

                {
                    this.state.editId == -1 ? null : (
                        <h2>Danh chinh sua: #{this.state.editId}</h2>
                    ) 
                }

                <input type={'text'}
                    onChange={(e) => this.setTodo(e.target.value)}
                    value={ this.state.todo }
                />

                { this.state.editId == - 1 ? addButton : updateButton  }
                <br />
                <table>
                    <thead>
                        <tr>
                            <th> Ten nhiem vu </th>
                            <th> Hanh dong </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map( (todo,key) => (
                                <tr key={key}>
                                    <td>
                                        {todo}
                                    </td>
                                    <td> 
                                        <button onClick={ () => this.editTodo(key) }> Edit </button> 
                                        | 
                                        <button onClick={ () => this.deleteTodo(key) }> Delete </button> 
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
    componentDidUpdate () {
        console.log("componentDidUpdate  da chay");
    }
}

export default Todo;