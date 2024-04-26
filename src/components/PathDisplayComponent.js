import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeIcon from '../assets/homeicon.png';

const PathDisplayComponent = ({ subject, topic }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathName = currentPath.replace('/', ' > ');

  return (
    <div className="path-display-outer">
      <img src={HomeIcon} alt="Home" className="home-icon" />
      <span>
        {pathName}
        {' '}
        {subject && <span>{'>'}</span>}
        {' '}
        {subject}
        {' '}
        {topic && <span>{'>'}</span>}
        {' '}
        {topic}
      </span>
    </div>
  );
};

PathDisplayComponent.propTypes = {
  subject: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};

export default PathDisplayComponent;
