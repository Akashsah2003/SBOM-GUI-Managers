import axios from 'axios'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Repos = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            await fetch("http://localhost:5000/auth/login/success", {
              method: "GET",
              credentials: "include",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
              },
            })
              .then((response) => {
                if (response.status === 200) return response.json();
                throw new Error("authentication has been failed!");
              })
              .then((resObject) => {
                setUser(resObject.user);
              })
              .catch((err) => {
                console.log(err);
              });
          };
          getUser();
    })
      if (!user){
        <Navigate to="/" />
      }
    // const options = {
    //     method: 'GET',
    //     url: 'https://api.github.com/user/repos',
    //     headers: {
    //       'Authorization': `Bearer ${user.accessToken}`,
    //       'User-Agent': 'SBOM-UI'
    //     },
    //   };
      
    //   axios(options)
    //     .then(response => {
    //       const repos = response.data.map(repo => ({ name: repo.name, private: repo.private, url: repo.html_url }));
    //       console.log(repos);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching repositories:', error.response ? error.response.data : error.message);
    //     });
    console.log(user);
    return(
        <>
        Repos
        </>
    )
}

export default Repos;