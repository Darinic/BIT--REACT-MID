const Navbar = () => {
    return (  
        <nav className="navbar">
        <h1>The dojo Blog</h1>
        <div className="links">
            <a href="/"> Home</a>
            <a href="/create">New Blog</a>
        </div>
        </nav>
    );
}
 
export default Navbar;

{/* <a href="/create" style={{
    color: "yellow",
    backgroundColor: '#f1356d'
    borderRadius: '8px' */}