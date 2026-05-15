
import profilePic from './assets/profile1.jpeg';
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Reagan Fwamba</h2>
            <p className="card-description">I build secure and scalable applications! When I'm not coding, my interests are in the financial markets.</p>
        </div>
    );
}

export default Card