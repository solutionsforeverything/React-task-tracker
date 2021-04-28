import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title,onAdd,showAdd}) => {

    return ( 
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text={showAdd} onClick={onAdd}/>

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