import React from 'react';
import SectionPage from './SectionPage';
export default function Navbar() {

    return (
        <div className="navbar">
            <button className="mythology" onClick={()=> <SectionPage section={"mythology"} arr={[]} />}>Mythology</button>
            <button className="mystery"  onClick={()=> <SectionPage section={"mystery"} />}>Mystery</button>
            <button className="history"  onClick={()=> <SectionPage section={"history"} />}>History</button>
            <button className="technology"  onClick={()=> <SectionPage  section={"technology"} />}>Technology</button>
        </div>
    )
}
