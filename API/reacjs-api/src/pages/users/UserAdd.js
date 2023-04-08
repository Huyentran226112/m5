import React from "react";
import axios from "axios";
import UserModel from '../../models/UserModel';
import { Navigate } from "react-router-dom";

export default class PersonList extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };
    // axios
    // .post('https://6083df209b2bed00170404a0.mockapi.io/angular/users/',{ user })
    // .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     window.location.href = '/users'
    //   });

    UserModel.store(user)
      .then(res => {
        window.location.href = '/users'

      }).catch( err =>{
        console.log(err);

        alert ('da co loi xay ra ');
      } );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}