import { web3Store } from '@/store/web3Store'
import React from 'react'

const ConnectButton = () => {

  const openModal = web3Store((s)=> s.connectMM)

  return (
    <button
    className='py-0.5 px-2 rounded-md hover:bg-gray-800 transition duration-75 border-2' 
    onClick={openModal} >
      Open MetaMask Modal
    </button>
  )
}

export default ConnectButton