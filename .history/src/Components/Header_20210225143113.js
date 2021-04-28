import PropTypes from 'prop-types';

const Header = ({title}) => {
    return ( 
        <header className="app-header">
            <h1 style={{color:'red', background}}>{title}</h1>
        </header>
     );
}

Header.defaultProps = {
    title: 'Task Tracker'
  };
  

Header.propTypes={
title:PropTypes.string.isRequired,
}
export default Header;