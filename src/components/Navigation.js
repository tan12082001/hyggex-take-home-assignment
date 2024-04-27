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
    <div className="desk-navigation-bar md:flex-row flex flex-col justify-between md:px-24 px-10 py-7 items-center">
      <div className="desk-nav-bar-logo">
        <img src={NavLogo} alt="hyggex-logo" className="nav-logo-img" />
      </div>
      <div className="desk-nav-bar-items-login flex flex-row gap-4 md:gap-10 items-center">
        {navPages.map(({
          to, label,
        }) => (
          <div key={to}>
            <Link
              to={to}
              className={label === 'Login' ? 'nav-bar-login bg-gradient-to-b from-blue-900 to-blue-600 border-none rounded-full text-white py-2 px-4' : 'each-nav-bar-item'}
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
