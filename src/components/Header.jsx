import { headerImg } from '../assets';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__left">
          <div>
            <h1>
              <span>More than just</span> <span>shorter links</span>
            </h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="get-started">get started</button>
          </div>
        </div>
        <div className="header__right">
          <img src={headerImg} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
