import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidenav = props => {
  return (
    <sidebar>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-header">
          <h3>Plant Things</h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <NavLink to={'/plants'}>
              Current Plant List
            </NavLink>
          </li>
          <li className="active">
            <NavLink to={'/plants/addForm'}>
              Add Plant
            </NavLink>
          </li>
          <li className="active">
            <NavLink to={'/plants/updatePlant'}>
              Update Plant
            </NavLink>
          </li>
          <li>
            <NavLink to={'/plants/removePlant'}>
              Remove Plant
            </NavLink>
          </li>
        </ul>
      </div>
    </sidebar>
  )
}

export default Sidenav;


