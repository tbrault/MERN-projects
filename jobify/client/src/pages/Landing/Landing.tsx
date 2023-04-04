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
            This app allow to handle job applications with statistics. It will
            be my showcase MERN website until I will develop a more complex new
            one. Please click on the button below in order to register if it is
            your first visit. Enjoy !!
          </p>
        </article>
        <img className="img main-img" src={main} alt="main image" />
      </div>
    </Wrapper>
  );
}

export default Landing;
