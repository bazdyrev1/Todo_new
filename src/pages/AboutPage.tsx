import React from 'react'
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
    return (
        <>
            <h1>Information pages</h1>
            <p>Some text about this web application</p>
            <Link to='/'>
                <button className='btn'> Return</button>
            </Link>
        </>
    )
}
export default AboutPage;