import React, { Component } from 'react';
 
class Home extends Component{
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <div>
            <h1>Welcome</h1>
            <button onClick={this.props.onLogOut}>Log out</button>
        </div>
      </div>
    )
  }
}
 
export default Home