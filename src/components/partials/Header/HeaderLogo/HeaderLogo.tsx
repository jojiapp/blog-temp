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
  font-family: var(--font_family_logo);
  font-size: var(--font_size_logo);
  color: var(--point);
`

export default HeaderLogo
