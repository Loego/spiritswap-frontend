export const BUNDLE_ID = '1'
export const FEE = 0.00025

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// hide from overview list
export const TOKEN_BLACKLIST = ['0x17e9c5b37283ac5fbe527011cec257b832f03eb3']

// pair blacklist
export const PAIR_BLACKLIST = [
  '0xafe0f3193506e0d9bcdd9bcffc50aef86441d393',
  '0x2604d2335670bf8f28a254162fecd91dccd702c8',
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [
  '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'.toLowerCase(), // WETH
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'.toLowerCase(), // USDC
  '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'.toLowerCase(), // WMATIC
  '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'.toLowerCase(), // WBTC
  '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'.toLowerCase(), // DAI
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'.toLowerCase(), // USDT
  '0x255707b70bf90aa112006e1b07b9aea6de021424'.toLowerCase(), // TETU
  '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'.toLowerCase(), // MAI
  '0x580A84C73811E1839F75d86d75d88cCa0c241fF4'.toLowerCase(), // QI
  '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89'.toLowerCase(), // FRAX
  '0x236eeC6359fb44CCe8f97E99387aa7F8cd5cdE1f'.toLowerCase(), // USD+
]
