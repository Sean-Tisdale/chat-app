import { InjectedConnector as MetaMask } from '@web3-react/injected-connector'
import { NetworkConnector as Network } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  1: 'https://mainnet.infura.io/v3/8e7f6e2e59a14fe4a87ddee48ed0f0e7',
  4: 'https://rinkeby.infura.io/v3/8e7f6e2e59a14fe4a87ddee48ed0f0e7',
}

export const injected = new MetaMask({
  supportedChainIds: [1, 4],
})

export const network = new Network({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
  defaultChainId: 1,
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  supportedChainIds: [1, 4],
})
