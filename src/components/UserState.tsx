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
    </div>
  )
}

export default UserState