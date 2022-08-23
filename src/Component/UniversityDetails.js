import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function UniversityDetails() {
    const params = useParams()
    const [data, setData] = useState([])


    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?name=${params.name}&country=${params.country}`)
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
        data.map((item, i) => <p key={i} style={{textAlign: 'left'}}><a href={`${item?.web_pages[0]}`}>Here</a> is a link to the school's website.</p>)
       }
    </div>
  )
}

export default UniversityDetails
