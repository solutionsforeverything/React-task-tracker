import PropTypes from 'prop-types';

const Header = ({title}) => {
    return ( 
        <header className="app-header">
            <h1>{title}</h1>
        </header>
     );
}

Header.propTypes={
    
}
export default Header;