import "./logo.scss";
/**
 *
 * functionnal component who render the logo of the website
 */
function Logo() {
  return (
    <div className="logo" title="logo">
      <img src="./img/logoHRnet.png" alt="logo" />
      <h1 className="logo__title">
        <span className="logo__title__maj">W</span>EALTH{" "}
        <span className="logo__title__maj">H</span>EALTH
      </h1>
    </div>
  );
}

export default Logo;
