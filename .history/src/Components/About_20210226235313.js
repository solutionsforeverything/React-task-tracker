import {Link} from 'react-router-dom';
const About = () => {
    return (
        <div>
          <h4>Version 1.0.0</h4>
          <article style={{color}}>
              Gopi.A
              2018506033
              Department of Information Technology
              Madras Institute of Technology
              Chennai-600 044.
          </article> 
          <Link to="/">Go Back</Link> 
        </div>
    )
}

export default About
