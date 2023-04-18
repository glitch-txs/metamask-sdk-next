import EventsMetaMask from '@/metamask/eventListeners'
import MetaMaskSDK from '@metamask/sdk'
import { useEffect, useState } from 'react'

export default function Home() {

  const [provider, setProvider] = useState<any>()
  const {chainId, address} = EventsMetaMask(provider)

  useEffect(()=>{
    const MMSDK = new MetaMaskSDK()

    const provider = MMSDK.getProvider() // You can also access via window.ethereum
    setProvider(provider)
  },[])

  async function openModal (){
    await provider.request({method: 'eth_requestAccounts'})
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 text-center p-24">
      <button 
      className='py-0.5 px-2 rounded-md hover:bg-gray-800 transition duration-75 border-2' 
      onClick={openModal} >
        Open MetaMask Modal
        </button>
        chain id: {chainId}
        <br/>
        address: {address}
    </main>
  )
}
