import { Link } from "react-router-dom";
const Header = () => {
    return (
    <>
<nav className="navbar navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link to="/">
    <a className="navbar-brand" >ManuBox</a>
    </Link>
    <button className="navbar-toggler" type="button">
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link to="/">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Home</a>
        </li>
        </Link>
        <Link to="/simulation">
        <li className="nav-item">
          <a className="nav-link">Simulation</a>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>
</>)}
export default Header;