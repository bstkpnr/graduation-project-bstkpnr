import React from 'react'
import {Link} from 'react-router-dom';
import {AiTwotoneHome} from 'react-icons/ai'

export default function NotFoundPage() {
    return (
        <div>
           <h3 className="text-center">404 NOT FOUND</h3>
           <div>
           <Link to="/create-incident"  ><AiTwotoneHome size={'50'} style={ {color:'#20DF7F'}}/> </Link>

           </div>
            
        </div>
    )
}
