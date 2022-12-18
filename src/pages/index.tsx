import Link from 'next/link'
import Button from '@/components/Button'

const Index = () => {
  return (
    <>
      <Button variant='contained'>Hello world</Button>
      <Link href='/demo'>Go to Demo Page</Link>
    </>
  )
}

export default Index
