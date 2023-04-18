import { web3Store } from '@/store/web3Store'
import React from 'react'

const SwitchProvider = () => {
    const initMMSDK = web3Store((s)=>s.initMMSDK)
  return (
    <button
    className='py-0.5 px-2 rounded-md hover:bg-gray-800 transition duration-75 border-2' 
    onClick={()=> initMMSDK(true)} >
        Enable QR Modal
    </button>
  )
}

export default SwitchProvider