import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Crosschain from '../components/Crosschain'

const Home: NextPage = () => {
  return (
    <div className="mt-[108px] ml-[290px]">
      <Crosschain/>
    </div>
  )
}

export default Home
