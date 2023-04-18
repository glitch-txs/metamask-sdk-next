import { web3Store } from '@/store/web3Store'

//Check account and chain id and save them in the Zustand store:
export const checkUserState = async()=>{

  const provider = (()=> web3Store.getState().provider)()

  await provider.request({ method: 'eth_accounts' })
  .then(async (accounts: string[])=>{

    web3Store.setState({ address: accounts[0]})
    console.log('Metamask: user is connected as: ', accounts[0])
  
    //if there's an account then the user is connected to a specific chain
    await provider.request({ method: 'eth_chainId' }).then((chainId: any)=> {
      web3Store.setState({ chainId })
      console.log('Metamask: chain id - ', chainId)
    })
    
  }).catch((e: any)=> console.error(e))

}