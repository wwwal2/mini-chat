import React from 'react';
import { Typography } from '@mui/material';
import '../App.css';

interface TextProps {
    message?: string;
    userName?: string | null;
}

const Text: React.FC<TextProps> = ({ message, userName }) => {
    return (
        <div className="message-container">
            <Typography variant='h6'>{userName}:</Typography>
            <Typography variant='body2'>{message}</Typography>
        </div>
    );
}

export default Text;
