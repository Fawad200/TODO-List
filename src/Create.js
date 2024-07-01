import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [task, setTask] = useState('');

    const handleAdd = async () => {
        try {
            const result = await axios.post('http://localhost:3001/add', { task });
            console.log(result.data); // Log or handle response as needed
            setTask(''); // Clear input field after successful addition
            window.location.reload(); // Reload the page
        } catch (err) {
            console.error('Error adding task:', err);
        }
    };

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <form className="create_form">
            <input
                type="text"
                placeholder="Enter Task"
                value={task}
                onChange={handleChange}
            />
            <button type="button" onClick={handleAdd}>Add</button>
        </form>
    );
}

export default Create;
