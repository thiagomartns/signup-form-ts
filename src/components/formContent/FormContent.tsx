import './formContent.scss';
import TrialButton from '../trialButton/TrialButton';
import FormInputs from '../formInputs/FormInputs';

const FormContent = () => {

  return (
    <div className="app-content--form">
      <TrialButton />
      <FormInputs />
    </div>
  )
}

export default FormContent