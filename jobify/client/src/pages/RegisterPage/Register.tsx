import { useRef, useState } from 'react';

import Wrapper from './StyledRegister';
import { Logo, FormRow, Alert } from '../../components';
import { IAlert, IFormInputValues } from '../../interfaces';

const initialFormInputValues = {
  email: '',
  password: '',
  isMember: true,
};

const initialAlert = {
  message: '',
  type: '',
  isShowingAlert: false,
};

function Register(): JSX.Element {
  const [alert, setAlert] = useState<IAlert>(initialAlert);
  const [formInputValues, setFormInputValues] = useState<IFormInputValues>(
    initialFormInputValues
  );
  const { email, password, name, isMember } = formInputValues;

  function handleFormSubmit(e: any) {
    e.preventDefault();
    if (!email || !password || (!isMember && !name)) {
      setAlert({
        message: 'Please provide all values',
        type: 'danger',
        isShowingAlert: true,
      });
    }
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleFormSubmit}>
        <Logo />
        <h3>login</h3>
        {alert.isShowingAlert && <Alert alert={alert} clearAlert={setAlert} />}
        {!isMember && <FormRow lableName="Name" type="text" />}
        <FormRow lableName="Email" type="text" />
        <FormRow lableName="Password" type="text" />
        <button type="submit" className="btn btn-block ">
          submit
        </button>
        <button type="button" className="btn btn-block btn-hipster">
          demo app
        </button>
        <p>
          Not a member yet ?
          <button type="button" className="member-btn">
            Register
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
