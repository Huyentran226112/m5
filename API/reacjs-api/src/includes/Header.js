import React from 'react';
import Menu from './Menu';
function Header(props) {
    return (
        <div>
            <h1>Header - {props.username}</h1>
            <Menu username={props.username}/>
        </div>
    );
}

export default Header;