import { useState } from 'react';
import './App.scss';
import AlertIcon from './assets/images/icon-error.svg'
import LeftContent from './components/leftContent/LeftContent';

function App() {

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValue, setIsValue] = useState<boolean>(true);
  const [isLastNameValid, setIsLastNameValid] =useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] =useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] =useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!firstName) {
      setIsValue(false);
    } else {
      setIsValue(true);
    }
  
    if (!lastName) {
      setIsLastNameValid(false);
    } else {
      setIsLastNameValid(true);
    }

    if (!email) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }

    if (!password) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }


  }

  const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }


  return (
    <>
      <div className='App'>
        <div className="app-content">
          <LeftContent />
          <div className="app-content--form">
            <div className="trial-button">
              <button className="purple-btn btn"><span>Try it free 7 days</span> then $20/mo. thereafter</button>
            </div>
            <form className='form-container--form' onSubmit={handleSubmit}>
              <div className="input-container">
                <input 
                  className={`input ${!isValue ? 'input-container--error': ''}`}
                  placeholder='First Name' 
                  type="text" 
                  onChange={handleChangeFirstName}
                  value={firstName}
                />
                {!isValue &&
                  <>
                    <span className='input-error'>First Name cannot be empty</span>
                    <img className='alert-icon' src={AlertIcon} alt="" />
                  </>
                }
              </div>
              <div className="input-container">
                <input 
                  className={`input ${!isLastNameValid ? 'input-container--error': ''}`}
                  placeholder='Last Name' 
                  type="text" 
                  onChange={handleChangeLastName}
                  value={lastName}
                />
                {!isLastNameValid &&
                  <>
                    <span className='input-error'>Last Name cannot be empty</span>
                    <img className='alert-icon' src={AlertIcon} alt="" />
                  </>
                }
              </div>
              <div className="input-container">
                <input 
                  className={`input ${!isEmailValid ? 'input-container--error': ''}`}
                  placeholder='Email' 
                  type="email" 
                  onChange={handleChangeEmail}
                  value={email}
                />
                {!isEmailValid &&
                  <>
                    <span className='input-error'>Looks like this is not an email</span>
                    <img className='alert-icon' src={AlertIcon} alt="" />
                  </>
                }
              </div>
              <div className="input-container">
                <input 
                  className={`input ${!isPasswordValid ? 'input-container--error': ''}`}
                  placeholder='Password' 
                  type="Password" 
                  onChange={handleChangePassword}
                  value={password}
                />
                {!isPasswordValid &&
                  <>
                    <span className='input-error'>Password can not be empty</span>
                    <img className='alert-icon' src={AlertIcon} alt="" />
                  </>
                }
              </div>
              <div className="submit">
                <button 
                  className="submit-btn btn"
                >
                  claim your free trial
                </button>
                <p className="terms">By clicking the button, you are agreeing to our <span>Terms and Services.</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  )
}

export default App
