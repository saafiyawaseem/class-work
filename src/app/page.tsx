

import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1><b>Welcome to My website !</b></h1>
     <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">  About </Link></li>
      <li><Link href="/contact"> Contact </Link></li>
      <li><Link href="/service">  Service </Link></li>
      </ul> 
    </div>
  )
}

export default HomePage

