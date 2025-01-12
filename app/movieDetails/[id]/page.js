import { use } from "react"
import React from 'react'


const Page = ({params}) => {    
  const param = use(params);

  return (
    <div>
      <h1>hello {param.id}</h1>
    </div>
  )
}

export default Page
