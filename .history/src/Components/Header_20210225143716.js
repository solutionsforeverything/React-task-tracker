import PropTypes from 'prop-types';

const Header = ({title}) => {
    return ( 
        <header className="header">
            <h1>{title}</h1>
        </header>
     );
}

Header.defaultProps = {
    title: 'Task Tracker'
  };
  

Header.propTypes={
title:PropTypes.string.isRequired,
}

//const headerStyle={color:'red', backgroundColor:'yellow'};
export default Header;