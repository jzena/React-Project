import React from 'react';

export default (props) => {
    const { currentTodo, changeCurrent } = props;
    const handleInputchange = (evt) => {
        const val = evt.target.value;
        changeCurrent(val);
    }
    return (
        <form>
            <input type="text"
                onChange={handleInputchange}
                value={currentTodo} />
        </form>
    );
}
