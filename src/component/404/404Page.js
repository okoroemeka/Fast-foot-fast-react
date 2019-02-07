import React, { Fragment } from 'react';
import './404Page.css'
const nopageFound = () => {
  return ( 
    <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12" id="no-page-found">
              <h1 id='no-page-num'>404</h1>
              <h4 id='no-page-text'>No page found</h4>
            </div>
          </div>
        </div>
      </Fragment>
   );
}
 
export default nopageFound;