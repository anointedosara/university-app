import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CountryDetails() {
    const params = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=${params.country}`)
          .then((data) => data.json())
          .then((data) => {
            setData(data);
          });
    }, [params])
  return (
    <div>
      <h1>{params.details}</h1>
      <h1>Here is a list of all Universities in {params.country}</h1>
      {data?.map((item, i) => <p key={i}><Link to={`/country/${params.country}/${item?.name}`}>{item?.name}</Link></p>)}
    </div>
  )
}

export default CountryDetails
