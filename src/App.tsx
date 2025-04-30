import { TimerIcon } from 'lucide-react'
import { Heading } from './components/Heading'

import './styles/global.css'
import './styles/theme.css'

export function App() {

  return (
    <>
      <Heading>
        Olá mundo1
        <button>
          <TimerIcon/>
        </button>
      </Heading> 
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at blanditiis aspernatur modi rem voluptas vero beatae nobis perferendis, eius sit fuga illum commodi iure magni cupiditate excepturi deleniti reiciendis.</p>
    </>
  )
}