import { Inter } from '@next/font/google'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

const Index = () => {
  return (
    <>
      <Button variant='contained'>Hello world</Button>
    </>
  )
}

export default Index
