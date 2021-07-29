import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import TetuLogo from '../../assets/tetu.png'
import WbtcLogo from '../../assets/wbtc.png'
import DinoLogo from '../../assets/dino.jpg'
import miFARMLogo from '../../assets/ifarm.png'
import iceLogo from '../../assets/ice.png'
import klimaLogo from '../../assets/klima.jpg'
import untLogo from '../../assets/unt.png'
import umaLogo from '../../assets/uma.png'
import clamLogo from '../../assets/clam.png'
import tetuQiLogo from '../../assets/tetuQi.svg'
import dystopialogo from '../../assets/dystopialogo.png'
import DEFAULT_TOKEN_LIST from '../../constants/token_list.json'

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <span {...rest} alt={''} style={{ fontSize: size }} role="img" aria-label="face">
          🤔
        </span>
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues
  if (address?.toLowerCase() === '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb') {
    address = '0x42456d7084eacf4083f1140d3229471bba2949a8'
  }

  if (address?.toLowerCase() === '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f') {
    address = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'
  }

  let path
  if (address?.toLowerCase() === '0x255707B70BF90aa112006E1b07B9AeA6De021424'.toLowerCase()) {
    path = TetuLogo
  } else if (address?.toLowerCase() === '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6'.toLowerCase()) {
    path = WbtcLogo
  } else if (address?.toLowerCase() === '0xAa9654BECca45B5BDFA5ac646c939C62b527D394'.toLowerCase()) {
    path = DinoLogo
  } else if (address?.toLowerCase() === '0xab0b2ddB9C7e440fAc8E140A89c0dbCBf2d7Bbff'.toLowerCase()) {
    path = miFARMLogo
  } else if (address?.toLowerCase() === '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef'.toLowerCase()) {
    path = iceLogo
  } else if (address?.toLowerCase() === '0x4e78011ce80ee02d2c3e649fb657e45898257815'.toLowerCase()) {
    path = klimaLogo
  } else if (address?.toLowerCase() === '0xc46DB78Be28B5F2461097ed9e3Fcc92E9FF8676d'.toLowerCase()) {
    path = untLogo
  } else if (address?.toLowerCase() === '0x3066818837c5e6eD6601bd5a91B0762877A6B731'.toLowerCase()) {
    path = umaLogo
  } else if (address?.toLowerCase() === '0xc250e9987a032acac293d838726c511e6e1c029d'.toLowerCase()) {
    path = clamLogo
  } else if (address?.toLowerCase() === '0x4cd44ced63d9a6fef595f6ad3f7ced13fceac768'.toLowerCase()) {
    path = tetuQiLogo
  } else if (address?.toLowerCase() === '0x39ab6574c289c3ae4d88500eec792ab5b947a5eb'.toLowerCase()) {
    path = dystopialogo
  } else if (address?.toLowerCase() === '0x72bba3aa59a1ccb1591d7cddb714d8e4d5597e96'.toLowerCase()) {
    path = 'https://assets.coingecko.com/coins/images/15006/small/complifi.PNG?1619413977'
  } else if (address?.toLowerCase() === '0x13748d548d95d78a3c83fe3f32604b4796cffa23'.toLowerCase()) {
    path = 'https://assets.coingecko.com/coins/images/17546/small/koge.PNG?1628204432'
  } else if (address?.toLowerCase() === '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4'.toLowerCase()) {
    path = 'https://assets.coingecko.com/coins/images/24185/small/stMATIC.png'
  } else if (address?.toLowerCase() === '0xf8f9efc0db77d8881500bb06ff5d6abc3070e695'.toLowerCase()) {
    path = 'https://assets.coingecko.com/coins/images/18024/small/syn.png'
  } else if (address?.toLowerCase() === '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89'.toLowerCase()) {
    path =
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89/logo.png'
  } else if (address?.toLowerCase() === '0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f'.toLowerCase()) {
    path =
      'https://2173993027-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9HhCCgYexXiRot0OWAJY%2Fuploads%2FQ41zhb0z0oV5WI1zpKEg%2FUSD%2B%20logo.png?alt=media&token=533d9ed9-6904-4f45-82a3-2c9e1060a3b5'
  } else if (address?.toLowerCase() === '0x17e9c5b37283ac5fbe527011cec257b832f03eb3'.toLowerCase()) {
    path = 'https://app.sphere.finance/static/media/sphere_logo_icon.2cbc48ec.svg'
  } else if (address?.toLowerCase() === '0x2e1ad108ff1d8c782fcbbb89aad783ac49586756'.toLowerCase()) {
    path = 'https://assets.coingecko.com/coins/images/3449/small/tusd.png'
  } else {
    const list = DEFAULT_TOKEN_LIST.tokens.filter((x) => (address && x.address.toLowerCase() === address?.toLowerCase()))
    path =
      list.length > 0
        ? list[0].logoURI
        : `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/${isAddress(
            address
          )}/logo.png`
  }

  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
