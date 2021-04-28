import PropTypes from 'prop-types';

const Button = ({color,text}) => {
    return <button style={{backgroundColor:color}}className="btn">{text}</button>;
}
Button.defaultProps={
    color:"steelblue"
}

Button.propType={
    text: propTypes.string,
    color: propTypes.string
}


export default Button
