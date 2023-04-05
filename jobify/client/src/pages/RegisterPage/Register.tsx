import Wrapper from './StyledRegister';
import { Logo, FormRow, Alert } from '../../components';

function Register(): JSX.Element {
  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />
        <h3>login</h3>
        <Alert />
        <FormRow lableName="Name" type="text" />
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
