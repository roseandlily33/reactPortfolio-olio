import { Link } from "react-router-dom";

const NotFound  = () => {
    return ( <div className="notFound">
        <h2>Sorry this page cannot be found</h2>
        <h3>Click here to go home: 
            <Link to='/'>Home</Link></h3>
    </div>  );
}
 
export default NotFound ;