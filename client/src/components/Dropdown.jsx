import React, { useState } from 'react';

const Dropdown = (props) => {

    const [selectedValue, setSelectedValue] = useState('');

    return (
        <div>
            <select value={selectedValue} onChange={(e) => {
                setSelectedValue(e.target.value)
                props.getSelectedGenre(e)
            }}>
                {props.options.map((item, index) => <option key={index} value={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;