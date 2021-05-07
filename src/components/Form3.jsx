import React from 'react';
import Rocket from '../assets/rocket.png';
import SignUp from './SignUp';

const Form3 = () => {
  return (
    <div className="container mb-3" style={{ flexBasis: '100%' }}>
      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <div className="col-md-7 my-auto">
          <img
            src={Rocket}
            className="w-100 img-fluid"
            alt="Rocket Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Form3;
