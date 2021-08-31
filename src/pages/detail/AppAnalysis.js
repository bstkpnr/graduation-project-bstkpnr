import React from 'react'
import {Link} from 'react-router-dom'
import { AiTwotoneHome } from 'react-icons/ai'

export default function AppAnalysis() {
    return (
        <div>
            <h2>Başvuru Çözümleme</h2>
            <Link to="/basvuru-list"  ><AiTwotoneHome size={'50'} style={ {color:'#20DF7F'}}/> </Link>
 
        </div>
    )
}
