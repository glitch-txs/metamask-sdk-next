import { checkUserState } from '@/metamask/checkUserState'
import { eventListeners, removeEventsMetamask } from '@/metamask/eventListeners'
import MetaMaskSDK from '@metamask/sdk'
import { create } from 'zustand'

interface IWeb3Store {
    isLoading: boolean
    isProvider: boolean
    provider: any
    address: string
    chainId: number | string
    initMMSDK: (force?: boolean)=> void
    connectMM: ()=> void
}

export const web3Store = create<IWeb3Store>()((set, get) => ({
    isLoading: false,
    isProvider: false,
    provider: {},
    address: '',
    chainId: '',
    // initMMSDK is the callback Fn for useEffect
    initMMSDK: (force = false)=>{
        const MMSDK = new MetaMaskSDK({
            dappMetadata:{
                name: 'My Dapp',
                url: 'urldapp.com'
            },
            forceInjectProvider: force,
            shouldShimWeb3: false,
        })
        const provider = MMSDK.getProvider()
        set((state)=>({ provider }))
        checkUserState()
        eventListeners(provider)

        //remove events when component unmounts
        return ()=>removeEventsMetamask(provider)
    },
    connectMM: async()=>{
        await get().provider.request({method: 'eth_requestAccounts'})
    }
}))