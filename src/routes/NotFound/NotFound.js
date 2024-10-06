import { Link } from "react-router-dom";

const NotFound  = () => {
    const styles = {
        link: {
            textDecoration: 'none',
            color: '#98A4B3'
        }
    }
    return ( <div className="notFound">
        <h2>Sorry this page cannot be found</h2>
        <h3>Click here to go home:  
              <Link to='/' style={styles.link}> Home</Link></h3>
    </div>  );
}
 
export default NotFound ;