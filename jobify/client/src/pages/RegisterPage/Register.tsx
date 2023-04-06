import { ChangeEvent, FormEvent, useState } from 'react';

import Wrapper from './StyledRegister';
import { Logo, FormRow, Alert } from '../../components';
import { IAlert, IFormInputValues } from '../../interfaces';

const initialFormInputValues = {
  name: '',
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

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password || (!isMember && !name)) {
      setAlert({
        message: 'Please provide all values',
        type: 'danger',
        isShowingAlert: true,
      });
    } else if (isMember) {
      console.log(formInputValues, 'first');
    } else {
      console.log(formInputValues, 'second');
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormInputValues({ ...formInputValues, [e.target.name]: e.target.value });
  }

  function toggleMember() {
    setFormInputValues({ ...formInputValues, isMember: !isMember });
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleFormSubmit}>
        <Logo />
        <h3>login</h3>
        {alert.isShowingAlert && <Alert alert={alert} clearAlert={setAlert} />}
        {!isMember && (
          <FormRow
            name="name"
            type="text"
            handleChange={handleChange}
            value={name}
          />
        )}
        <FormRow
          name="email"
          type="text"
          handleChange={handleChange}
          value={email}
        />
        <FormRow
          name="password"
          type="text"
          handleChange={handleChange}
          value={password}
        />
        <button type="submit" className="btn btn-block ">
          submit
        </button>
        <button type="button" className="btn btn-block btn-hipster">
          demo app
        </button>
        <p>
          Not a member yet ?
          <button type="button" className="member-btn" onClick={toggleMember}>
            Register
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
