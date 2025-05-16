import { PlayCircleIcon } from 'lucide-react'
import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { DefaultInput } from './components/DefaultInput'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading'
import { useState } from 'react'

export function App() {

  //const [numero, setNumero] = useState(() => {
  //  return 0;
  //});

  const [numero, setNumero] = useState(0)

  function handleClick() {
    //setNumero((prevState) => prevState + 1)
    setNumero(1);
  }

  return (
    <>
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu></Menu>
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action="">
          <div className="formRow">
            <DefaultInput
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              placeholder='Digite aqui...'
            />
          </div>

          <div className="formRow">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
        </form>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </>
  )
}