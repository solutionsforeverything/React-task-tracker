import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    return ( 
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add"/>
            <Button color="blue" text="Add"/>
            <Button color="yellow" text="Add"/>

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