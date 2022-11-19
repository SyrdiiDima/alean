import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import scss from '../pages/JobInfo.module.scss';
import { nanoid } from 'nanoid';

import { Home } from 'components/Map/Map';
export const JobInfo = () => {
  const location = useLocation();
  const currentJobs = location?.state?.job;
  const [pathBack] = useState(location.state?.from ?? '/');

  return (
    <>
      {currentJobs && (
        <div>
          <div className={scss.header}>
            <h1>Job Details</h1>
            <p>Save to my list</p> //save logo
            <p>Share</p> // share logo
          </div>
          <button>Apply now</button>
          <div>
            <h2>{currentJobs.title}</h2>
          </div>
          <div>
            <p>Posted 2 days ago</p>
            <p>Brutto, per year</p>
            <p>{currentJobs.salary}</p>
          </div>
          <div>
            <p>{currentJobs.description}</p>
            <h3>Responsopilities</h3>
            <p>{currentJobs.description}</p>
            <h3>Compensation & Benefits:</h3>
            <p>Our phisicians enjoy a wide range of benefits, including:</p>
            <ul>
              {currentJobs.benefits.map(benefit => (
                <li key={nanoid()}>
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>Attached images</h1>
            <p>PHOTO</p>
          </div>
          <Link to={pathBack}>
            <button>RETURN TO JOB BOARD</button>
          </Link>
          <div>
            <h1>Additional info</h1>
            <h3>Employment type</h3>
            <ul>
              {currentJobs.employment_type.map(type => (
                <li key={nanoid()}>
                  <button type="button">{type}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Benefits</h3>
            <ul>
              {currentJobs.benefits.map(benefit => (
                <li key={nanoid()}>
                  <button type="button">{benefit}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contacts</h2>
            <div className={scss.map}>
              <Home location={currentJobs.location} />
            </div>
            <p>{currentJobs.title}</p>
            <p>{currentJobs.address}</p>
            <p>{currentJobs.email}</p>
            <p>{currentJobs.phone}</p>
          </div>
        </div>
      )}
    </>
  );
};
