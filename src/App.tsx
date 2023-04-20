import './App.scss';


function App() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='App'>
        <div className="app-content">
          <div className="app-content--text">
            <h1 className="text-h1">Learn to code by watching others</h1>
            <p className="text-p">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
          </div>
          <div className="app-content--form">
            <div className="trial-button">
              <button className="purple-btn btn"><span>Try it free 7 days</span> then $20/mo. thereafter</button>
            </div>
            <form className='form-container--form' onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="input-container">
                  <input className='input-name input' placeholder='Name' required type="text" />
                  <input className='input-lastname input' placeholder='Last Name' required type="text" />
                  <input className='input-email input' placeholder='Email' required type="email" />
                  <input className='input-password input' required placeholder='Password' type="password" />
                </div>
                <div className="submit">
                  <button className="submit-btn btn">claim your free trial</button>
                  <p className="terms">By clicking the button, you are agreeing to our <span>Terms and Services.</span></p>
                </div>
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
