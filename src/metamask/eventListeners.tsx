import { useEffect, useState } from "react";

type Info = {
    chainId: number | string
    address: string
}

export default function EventsMetaMask(provider: any){

    const [info, setInfo] = useState<Info>({chainId:'', address:''})

    useEffect(()=>{
        if(!provider) return
        //Init Metamask API event listeners
        const handleAccount = (accounts: string[]) => {
            setInfo(p => ({...p, address: accounts[0]}))
        }
        
        const handleChain = (chainId: string) => {
            setInfo(p => ({...p, chainId}))
        }
        const eventListeners = (provider: any)=>{
            provider.on("accountsChanged", handleAccount);
            provider.on("chainChanged", handleChain);
        }

        const removeEventsMetamask = (provider: any)=>{
            provider.removeListener("accountsChanged", handleAccount);
            provider.removeListener("chainChanged", handleChain);
        }
        removeEventsMetamask(provider)
        eventListeners(provider)

        return ()=> removeEventsMetamask(provider)
    },[provider])

    return info
}