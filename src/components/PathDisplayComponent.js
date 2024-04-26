import { useLocation } from 'react-router-dom';
import HomeIcon from '../assets/homeicon.png';

const PathDisplayComponent = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathName = currentPath.replace('/', ' ˃ ');

  console.log(`current path is: ${currentPath} and name is ${pathName}`);
  return (
    <div className="path-display-outer">
      <img src={HomeIcon} alt="Home" className="home-icon" />
      <span>
        {pathName}
      </span>
    </div>
  );
};

export default PathDisplayComponent;
