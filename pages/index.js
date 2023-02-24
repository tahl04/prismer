import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  // const [data, setData] = useState([]);

  // async function dataFun() {
  //   const res = await axios.get('/api')
  //   setData(res.data)
  // }
  // useEffect(() => { dataFun() }, []);

  if (!data) return (<></>)
  return (
    <>
      {
        data.map((res) => {
          return <p key={res.id}> {res.name} </p>
        })
      }
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get(`http://localhost:3000/api`)
  const data = res.data

  return { props: { data } }
}
