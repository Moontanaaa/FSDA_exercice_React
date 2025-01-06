import PropTypes from 'prop-types';

const Avatar = ({ image, firstName, lastName }) => {
    return (
        <li>
            <img src={image} alt={`${firstName} ${lastName}`} />
            <p>{firstName} {lastName}</p>
        </li>
    );
};

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default Avatar;