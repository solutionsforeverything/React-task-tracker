const Header = (props) => {
    return ( 
        <header className="app-header">
            <h1>{}</h1>
        </header>
     );
}
 
Header.defaultProps={
    title:'Task Tasker',
}
export default Header;