import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const HeaderLogo = () => (
  <Link href={'/'}>
    <a>
      <LogoBox>JOJI</LogoBox>
    </a>
  </Link>
)

// === Styled === //

const LogoBox = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  color: var(--point);
`

export default HeaderLogo
