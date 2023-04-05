import LogoImage from '../assets/images/logo.svg';

function Logo(): JSX.Element {
  return (
    <>
      <img src={LogoImage} alt="Logo jobify" className="logo" />
    </>
  );
}

export default Logo;
