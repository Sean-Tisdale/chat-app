import { ContractAddresses } from './index'
import { NETWORK_TYPES } from './networks'

// TODO: remove any, fix network types
const addresses: { [network in NETWORK_TYPES]: ContractAddresses } = {
  [NETWORK_TYPES.RINKEBY]: {
    Caddress: '0xCdB43D135Cc97669e1D909d55783E3Be50E11104',
  },
} as any

export default addresses
