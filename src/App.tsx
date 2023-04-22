import { useState } from 'react';
import './App.scss';
import AlertIcon from './assets/images/icon-error.svg'
import LeftContent from './components/leftContent/LeftContent';

function App() {

  const [firstName, setFirstName] = useState<string>('');
  const [isValue, setIsValue] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!firstName) {
      setIsValue(false);
      return
    }

    setIsValue(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
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
                  className={`input-firstName input ${!isValue ? 'input-container--error': ''}`}
                  placeholder='First Name' 
                  type="text" 
                  onChange={handleChange}
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
                  className='input-lastname input' 
                  placeholder='Last Name' 
                  type="text" 
                />
              </div>
              <div className="input-container">
                <input 
                  className='input-email input' 
                  placeholder='Email' 
                  type="email" 
                />
              </div>
              <div className="input-container">
                <input 
                  className='input-password input' 
                  placeholder='Password' 
                  type="password" 
                />
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
