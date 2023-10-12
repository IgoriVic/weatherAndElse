import React from 'react';
import './LoginButton.scss';

interface ButtonProps {
    label: string;
    value: string;
    onClick: (value: string) => void;
}

const LoginButton: React.FC<ButtonProps> = ({label, value, onClick}) => {
    const handleClick = () => {
        onClick(value);
    }

    return (
        
        <button onClick={handleClick} className='custom-button'>{label}</button>
    )
}

export default LoginButton;