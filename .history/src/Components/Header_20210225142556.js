import PropTypes from 'prop-types';

const Header = ({title}) => {
    return ( 
        <header className="app-header">
            <h1>{title}</h1>
        </header>
     );
}

Greeting.defaultProps = {
    name: 'Stranger'
  };
  

Header.propTypes={
title:PropTypes.string,
}
export default Header;