import { ContractAddresses } from './index'
import { NETWORK_TYPES } from './networks'

// TODO: remove any, fix network types
const addresses: { [network in NETWORK_TYPES]: ContractAddresses } = {
  [NETWORK_TYPES.ROPSTEN]: {
    Caddress: '0x9E6379ac167Bd7AA8015F5511870028FD806fA8b',
  },
} as any

export default addresses
