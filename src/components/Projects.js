import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faLaptop } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div className="Projects">
      <h1 className="py-5">Projects</h1>
      <div className="container">
        <div className="col">
          <div className="row-md-3 row-sm-6">
            <div className="box">
              <div className="circle">
               
                <FontAwesomeIcon className="icon" icon={faLaptop} size="2x" />
              </div>
              <h3>CapStone</h3>
              <p>
                The project that solidified, what trusting the process can do.
              </p>
            </div>
          </div>
          {/* */}
          <div className="row-md-3 row-md-3">
            <div className="box">
              <div className="circle">
               
                <FontAwesomeIcon className="icon"  icon={faFileCode} size="2x" />
              </div>
              <h3>StackThone</h3>
              <p>
                The project that was used to show your individual ability in a
                short span of time.
              </p>
            </div>
          </div>
          {/* */}
          <div className="row-md-3 row-md-3">
            <div className="box">
              <div className="circle">
              
                <FontAwesomeIcon className="icon"  icon={faMedium} size="2x" />
              </div>
              <h3>Medium</h3>
              <p>
                An article that can help others to learn more about my
                experience during the bootCamp journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
