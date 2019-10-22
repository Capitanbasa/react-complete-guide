import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header" onClick={props.clickEvent}>{props.name}</div>
                <div className="meta">I am {props.age } years old</div>
                <div className="description"><p>{props.children}</p></div>
            </div>
            <div className="extra content">
                <div className="field">
                    <div className="ui input">
                        <input type='text' onChange={props.changed} value={props.name}/>
                    </div>
                </div>
                <br />
                <div className="ui two buttons">
                    <button className="ui red button" onClick={props.delete}>DELETE</button>
                </div> 
            </div>
        </div>
    );
}
export default person;