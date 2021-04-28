const Header = ({title}) => {
    return ( 
        <header className="app-header">
            <h1>{props.title}</h1>
        </header>
     );
}
 
Header.defaultProps={
    title:'Task Tasker',
}
export default Header;