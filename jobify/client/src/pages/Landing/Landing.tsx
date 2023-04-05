import Wrapper from './StyledLanding';
import main from '../../assets/images/main.svg';
import { Logo } from '../../components';
import { Link } from 'react-router-dom';

function Landing(): JSX.Element {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <article>
          <h1>
            job <span>traking</span> app
          </h1>
          <p>
            This web application allows to handle job applications with
            statistics. It will be my MERN website showcase until I will develop
            a more complex one. Please click on the button below in order to
            register if it is your first visit. Enjoy !!
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </article>
        <img className="img main-img" src={main} alt="main image" />
      </div>
    </Wrapper>
  );
}

export default Landing;
