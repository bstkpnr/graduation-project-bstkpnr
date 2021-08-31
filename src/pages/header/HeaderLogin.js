import React from "react";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
export default function Header() {
  return (
    <div className="container-fluid">
                  <nav className="navbar navbar-expand-lg shadow p-3 mb-5 rounded" style={{backgroundColor:"#224957"}}>

      <Link to="/admin" className="btn" style={{ color: "white" }}>
        <div className="card">
          <RiAdminFill size={40} color="#224957" />
        </div>
      </Link>
      <Link to="/basvuru-sorgula" className="btn mx-2" style={{color:"white",backgroundColor:'#20DF7F'}}>
Başvuru Sorgula
</Link>
</nav>
    </div>
    
  );
}
