import React, { Component } from 'react';
import classNames from 'classnames';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Todo extends Component {
    render() {
        const { item, onClick } = this.props;
        return(           
            <div className={classNames('list', {listDone : item.isDone === true})}><FontAwesomeIcon icon="check-square" /> <div onClick={onClick} className={classNames('Todo', { TodoDone: item.isDone === true})}>
                <p>{this.props.item.title}</p>
            </div></div>
        )
    }
}

export default Todo;