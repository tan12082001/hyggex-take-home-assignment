// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeIcon from '../assets/homeicon.png';

const PathDisplayComponent = ({ subject, topic }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathName = currentPath.replace('/', ' ˃ ');
  // const data = useSelector((state) => state.subjects.subjects);

  // console.log(`data is: ${data}`);
  // console.log(`data is: ${JSON.stringify(data)}`);
  // console.log(data[0].topics[0].flashcards);
  // data.forEach((item, index) => {
  //   console.log(`Item ${index}:`, item.subjectName);
  //   console.log(`item ${index}: `, item.topics);
  //   item.topics.forEach((item, index) => {
  //     console.log(`topics: ${index}`, item.topicName);
  //   });
  // });
  // console.log(`current path is: ${currentPath} and name is ${pathName}`);
  return (
    <div className="path-display-outer">
      <img src={HomeIcon} alt="Home" className="home-icon" />
      <span>
        {pathName}
        {' '}
        {'>'}
        {' '}
        {subject}
        {' '}
        {'>'}
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
