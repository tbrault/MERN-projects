import LogoImage from '../assets/images/logo.svg';

function Logo(): JSX.Element {
  return (
    <>
      <img src={LogoImage} alt="Logo jobify" />
    </>
  );
}

export default Logo;
