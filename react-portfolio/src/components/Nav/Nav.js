import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Wood from '../../assets/cover/wood.jpg'


function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1" style={{ backgroundImage: `url(${Wood})`, color:'white' }}>
      <h2>
        <a>
           James Bowen
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li classname ="mx-2">
            <a>
              Portfolio
            </a>
          </li>
          <li classname ="mx-2">
            <a>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
