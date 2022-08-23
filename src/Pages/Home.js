import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Select a prefered Country <Link to='/country'>Here</Link></h1>
    </div>
  )
}

export default Home
