import { Link } from 'react-router-dom';
import NavLogo from '../assets/navlogo.png';

const NavigationHeader = () => {
  const navPages = [
    {
      to: '/',
      label: 'Home',
    },
    {
      to: '/flashcards',
      label: 'Falshcard',
    },
    {
      to: '/contact',
      label: 'Contact',
    },
    {
      to: '/faq-section',
      label: 'FAQ',
    },
    {
      to: '/login',
      label: 'Login',
    },
  ];

  return (
    <div className="desk-navigation-bar">
      <div className="desk-nav-bar-logo">
        <img src={NavLogo} alt="hyggex-logo" className="nav-logo-img" />
      </div>
      <div className="desk-nav-bar-items-login">
        {navPages.map(({
          to, label,
        }) => (
          <div key={to}>
            <Link
              to={to}
              className={label === 'Login' ? 'nav-bar-login bg-gradient-to-b from-06286e-900 to-164eco-600' : 'each-nav-bar-item'}
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationHeader;
