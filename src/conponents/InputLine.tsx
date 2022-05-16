import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

import '../App.css';

interface InputLineProps {
    publish: (message:string) => void;
}

const InputLine: React.FC<InputLineProps> = ({ publish }) => {
    const [message, setMessage] = useState<string>('hello');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <div className="inputline-container">
            <TextField label="your message" variant="standard" onChange={handleInputChange}/>
            <Button variant='outlined' onClick={() => publish(message)}>Send</Button>
        </div>
    );
}

export default InputLine;
