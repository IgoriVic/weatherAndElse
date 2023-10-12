import React from 'react';
import './LoginInput.scss';

interface LogInputProps {
  label: string;
  value: string;
  onChange: Function;
}

const LoginInput: React.FC<LogInputProps> = ({ label, value, onChange }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='number-input'>
      <label htmlFor={label}>{label}</label>
      <input
        className='login-date-validation'
        type='text'
        value={value}
        onChange={handleChange}
        maxLength={2}
      ></input>
    </div>
  );
};

export default LoginInput;
