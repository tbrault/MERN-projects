import { Link } from 'react-router-dom';
import NotFound from '../../assets/images/not-found.svg';
import Wrapper from './StyledErrorPage';

function ErrorPage(): JSX.Element {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={NotFound} alt="Not found page" className="img" />
        <h3>ohhh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/landing">back home</Link>
      </div>
    </Wrapper>
  );
}
export default ErrorPage;
