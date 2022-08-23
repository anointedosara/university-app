import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function UniversityDetails() {
    const params = useParams()
    const [data, setData] = useState([])
    const dataa = params.details

    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=${params.details}`)
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
          console.log(params)
    }, [])
  return (
    <div>
      <h1>{params.name}</h1>
      <h1 style={{textAlign: 'left'}}>Details:</h1>
      <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
       aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       {
        data.map((item, i) => <p key={i}>{item.dataa.domains[0]}</p>)
       }
    </div>
  )
}

export default UniversityDetails
