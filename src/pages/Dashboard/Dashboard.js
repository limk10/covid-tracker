import React, { useEffect, useState } from 'react'

import axios from '../../services/api'

const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    populate()
  }, [])
  
  const populate = async () => {
    try {
      const { data: collection } = await axios.get('free-api?global=stats')
      setData(collection.results)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <h1>Dashboard</h1>
      <span>{JSON.stringify(data)}</span>
    </>
  )
}

export default Dashboard
