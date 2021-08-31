import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLogout,AiTwotoneHome} from 'react-icons/ai'
export default function Header() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5 rounded" style={{backgroundColor:"#224957"}}>
<Link to="/basvuru-list" className="btn mx-2" style={{color:"white", backgroundColor:'#20DF7F'}}>
<AiTwotoneHome size={30} style={ {color:'white'}}/>
</Link>
<Link to="/basvuru-sorgula" className="btn mx-2" style={{color:"white",backgroundColor:'#20DF7F'}}>
Çözülenler</Link>
<Link to="/logout" className="btn d-flex justify-content-end" style={{color:"white"}}>
<AiOutlineLogout size={40}/>
</Link>

            </nav>
            
        </div>
    )
}
