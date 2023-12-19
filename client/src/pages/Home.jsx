import React from 'react';
import { useSelector } from 'react-redux';
// import './Profile.css'; 

const Home = () => {

    const auth = useSelector(state => state.isAuthenticated);

    // if (user) {
    //     return <Navigate to="/"/>;
    // }
    console.log(auth);

    return (
        <div className="whole">
            <div className="style-0">
                <div className="style-1">
                    <div className="style-2">
                        <h1 className="style-3">SBOM</h1>
                        <p className="style-4">This resource serves as the detailed foundation of SBOM. It defines SBOM concepts and related terms, offers an updated baseline of how software components are to be represented, and discusses the processes around SBOM creation.</p>

                        {(!auth) ? <div className="style-5 rounded-full">
                            <button style={{ color: '#fff' }} className="style-7 rounded-full">Sign in with Github</button>
                        </div> : <div><button style={{ color: '#fff' }} className="style-7 rounded-full">Repos</button></div>
                        }

                    </div>
                </div>
                <div>
                    <img src="https://media.tenor.com/NOYF3f82b_gAAAAM/programmer.gif" className='gif' alt="Programmer GIF - Programmer GIFs" loading="fast">
                    </img>
                </div>
            </div>
        </div>
    );
};

export default Home;
