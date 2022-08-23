import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Countries() {
    const [data, setData] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`https://restcountries.com/v3/all`)
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
          console.log(params)
    }, [])
  return (
    <div className='countries'>
      {
        data.map((item, i) => <p key={i}><Link to={`/country/${item.name.common}`}>{item.name.common}</Link></p>)
      }
    </div>
  )
}

export default Countries
