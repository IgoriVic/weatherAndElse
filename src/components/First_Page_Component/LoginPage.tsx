import React, { useState } from 'react';
import './LoginPage.scss';
import LoginButton from '../FuncComponents/LoginButton/LoginButton';
import LoginInput from '../FuncComponents/LoginInput/LoginInput';

const LoginPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const thisDate = new Date();
  const currentDate = thisDate.getDate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (newValue.length <= 2) {
      setInputValue(newValue);
    }
  };

  const handleLogButtonClick = (buttonValue: string) => {
    const newValue = inputValue + buttonValue;

    if (newValue.length <= 2) {
      setInputValue(newValue);
    }
  };

  const handleReset = () => {
    setInputValue('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Number(inputValue) === currentDate) {
      window.location.href = 'main-page';
    } else {
      alert('Wrong Date');
    }
  };

  return (
    <div className='log-div'>
      <div className='title'>
        <p>Login Page</p>
      </div>
      <div className='login-input'>
        <LoginInput
          label={'Enter A Current Date'}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className='date-buttons'>
        <LoginButton
          label={'0'}
          onClick={() => handleLogButtonClick('0')}
          value={'0'}
        />
        <LoginButton
          label={'1'}
          onClick={() => handleLogButtonClick('1')}
          value={'1'}
        />
        <LoginButton
          label={'2'}
          onClick={() => handleLogButtonClick('2')}
          value={'2'}
        />
        <LoginButton
          label={'3'}
          onClick={() => handleLogButtonClick('3')}
          value={'3'}
        />
        <LoginButton
          label={'4'}
          onClick={() => handleLogButtonClick('4')}
          value={'4'}
        />
        <LoginButton
          label={'5'}
          onClick={() => handleLogButtonClick('5')}
          value={'5'}
        />
        <LoginButton
          label={'6'}
          onClick={() => handleLogButtonClick('6')}
          value={'6'}
        />
        <LoginButton
          label={'7'}
          onClick={() => handleLogButtonClick('7')}
          value={'7'}
        />
        <LoginButton
          label={'8'}
          onClick={() => handleLogButtonClick('8')}
          value={'8'}
        />
        <LoginButton
          label={'9'}
          onClick={() => handleLogButtonClick('9')}
          value={'9'}
        />
      </div>
      <div className='main-buttons'>
        <button className='clear-input' type='button' onClick={handleReset}>
          Reset
        </button>
        <form onSubmit={handleSubmit} className='submit-date'>
          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
