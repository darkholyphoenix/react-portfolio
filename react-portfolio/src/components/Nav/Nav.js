import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Wood from '../../assets/cover/wood.jpg'



function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
  document.title = contactSelected
  }, [contactSelected]);
  return (
    <header className="flex-row px-1" style={{ backgroundImage: `url(${Wood})`, color:'white' }}>
      <h2>
        <a>
           James Bowen <br/> Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <Link to= "/about">
              About me
            </Link>
          </li>
          <li className={`mx-2`}>
          <Link to= "/contact">
              Contact
            </Link>
          </li>
          <li className ={`mx-2`}>
          <Link to= "/Portfolio">
              Portfolio
            </Link>
          </li>
          <li className ={`mx-2`}>
          <Link to= "/Resume">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
