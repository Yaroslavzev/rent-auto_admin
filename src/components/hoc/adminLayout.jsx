import React from "react";
import "./adminLayout.css"; 
import Navigation from '../admin/navigation/navigation';

const AdminLayout = props => {
  return (
    <div className="admin_container">
      <div className="admin_left_pannel" >
      <Navigation />
      </div>
      <div className="admin_right_pannel">{props.children}</div>
    </div>
  );
};

export default AdminLayout;
