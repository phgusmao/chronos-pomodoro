import React from 'react'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Logo } from '../../components/Logo'
import { Menu } from '../../components/Menu'

type MainTemplateProps = {
  children: React.ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {

  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu></Menu>
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  )
}