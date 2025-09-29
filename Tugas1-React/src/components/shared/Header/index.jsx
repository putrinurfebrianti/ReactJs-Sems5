import { Link } from "react-router";

export default function Header(){
    return (

        <>
    <div className="container"
    style={{ 
    backgroundColor: '#282828', 
    color: '#fefcfcff',          
    padding: '3rem',           
    borderRadius: '10px'      
    }}
    
    > <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
    <div className="col-md-3 mb-2 mb-md-0"> 
    <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
    <i className="fa-solid fa-headphones fa-beat-fade fa-2xl" style={{color:"#c96666ff"}}
    ></i> 
    <span className="ms-2 fs-4" style={{color:"#c96666ff"}}>Headphones Store</span>
    </a> </div> <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
    <li><Link to="/" className="nav-link px-2" style={{color:"#c96666ff"}}>Home</Link></li> 
    <li><Link to="/headphones" className="nav-link px-2" style={{color:"#c96666ff"}}>Headphones</Link></li> 
    <li><Link to="/teams" className="nav-link px-2" style={{color:"#c96666ff"}}>Team</Link></li>  
    <li><Link to="/contacts" className="nav-link px-2" style={{color:"#c96666ff"}}>Contact</Link></li> 
    </ul> <div className="col-md-3 text-end"> 
    <Link to="/login"><button type="button" className="btn btn-danger me-2">Login</button></Link>
    <Link to="/register"><button type="button" className="btn btn-danger">Register</button></Link> 
    </div> </header> </div>
        
        </>


    );
}