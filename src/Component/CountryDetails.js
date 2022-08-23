import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CountryDetails() {
    const params = useParams()
    const [data, setData] = useState([])

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
      <h1>{params.details}</h1>
      <h1>Here is a list of all Universities in {params.details}</h1>
      {data?.map((item, i) => <p key={i}><Link to={`/country/${params.details}/${item?.name}`}>{item?.name}</Link></p>)}
    </div>
  )
}

export default CountryDetails