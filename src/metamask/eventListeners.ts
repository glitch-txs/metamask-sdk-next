import { web3Store } from "@/store/web3Store"
import { checkUserState } from "./checkUserState"

type ConnectInfo = {
    chainId: string
}

const handleAccount = (accounts: string[]) => {
    web3Store.setState({ address: accounts[0]})
    console.log('Metamask: user changed address to: ', accounts[0])
}

const handleChain = (chainId: string) => {
    web3Store.setState({ chainId: Number(chainId) })
    console.log('Metamask: chain id - ', chainId)
}

const handleConnect = (connectInfo: ConnectInfo)=>{
    checkUserState()
    web3Store.setState({ isProvider: true })
    console.log('Metamask: provider is connected in:', connectInfo.chainId)
}

const handleDisconnect = (err: any)=>{
    web3Store.setState({ isProvider: false })
    console.log('Metamask: the provider is disconnected from blockchain, refresh the dapp and check your internet connection')
    console.error(err)
}

//Init Metamask API event listeners
export const eventListeners = (provider: any)=>{
    provider.on("accountsChanged", handleAccount);
    provider.on("chainChanged", handleChain);
    provider.on('connect', handleConnect);
    provider.on('disconnect', handleDisconnect);
}

export const removeEventsMetamask = (provider: any)=>{
    provider.removeListener("accountsChanged", handleAccount);
    provider.removeListener("chainChanged", handleChain);
    provider.removeListener('connect', handleConnect);
    provider.removeListener('disconnect', handleDisconnect);
}