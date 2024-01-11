import React, { useState, useEffect } from 'react';

function Task4() {
    const [variableD, setVariableD] = useState('Hi');
    const [title, setTitle] = useState('Hi');

    useEffect(() => {
        setTitle(`${variableD}`); 
    }, [variableD]);

    const handleVariableDChange = (newValue) => {
        setVariableD(newValue);
        document.title = newValue;
    };

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => handleVariableDChange('Hello')}>
                Change Variable D
            </button>
        </div>
    );
}

export default Task4;
