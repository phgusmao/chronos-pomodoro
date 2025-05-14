import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { DefaultInput } from './components/DefaultInput'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles/global.css'
import './styles/theme.css'

export function App() {

  return (
    <>
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
              labelText='Task'
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
            <DefaultButton color='green' icon={<PlayCircleIcon/>}/>
            <DefaultButton color='red' icon={<StopCircleIcon/>}/>
          </div>
        </form>
      </Container>
    </>
  )
}