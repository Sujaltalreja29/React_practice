import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import  axios  from 'axios';
function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data); 
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className='text-center m-4 bg-gradient-to-tr  text-black
     p-4 text-3xl'>Github followers: {data.followers}
      <div className=' shadow-md shadow-slate-600 max-w-[300px] rounded-xl flex flex-col hover:scale-105 hover:brightness-50 transition-all duration-150'>
        <img src={data.avatar_url} alt="Git picture" className='rounded-lg' width={300} />
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await  axios.get('https://api.github.com/users/hiteshchoudhary')
  return response.data
}
