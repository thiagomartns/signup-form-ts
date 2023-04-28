import './App.scss';
import LeftContent from './components/leftContent/LeftContent';
import FormContent from './components/formContent/FormContent';

function App() {

  return (
    <>
      <div className='App'>
        <div className="app-content">
          <LeftContent />
          <FormContent />
        </div>
      </div>
      <div className="overlay"></div>
    </>
  )
}

export default App
