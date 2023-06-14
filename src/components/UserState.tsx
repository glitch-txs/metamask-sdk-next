import { checkUserState } from '@/metamask/checkUserState'
import { web3Store } from '@/store/web3Store'
import React from 'react'

const UserState = () => {
  const chainId = web3Store((s)=> s.chainId)
  const address = web3Store((s)=> s.address)
  return (
    <div>
      chain id: {chainId}
      <br/>
      address: {address}
      <br />
      <button 
      className='py-0.5 px-2 rounded-md hover:bg-gray-800 transition duration-75 border-2' 
      onClick={checkUserState} >
        Check Account
      </button>
    </div>
  )
}

export default UserState