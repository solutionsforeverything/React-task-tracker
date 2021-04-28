import {Link} from 'react-router-dom';
const About = () => {
    return (
        <div className="about">
          <h4>Version 1.0.0</h4><br><br></br></br>
          <p>Gopi.A</p>
          <p>2018506033</p>
          <p>Department of Information Technology</p>
          <p>Madras Institute of Technology</p>
           <p>Chennai-600 044.</p>
          <Link to="/">Go Back</Link> 
        </div>
    )
}

export default About
