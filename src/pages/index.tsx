import Link from 'next/link'
import Button from '@/components/Button'

const Index = () => {
  return (
    <>
      <Button variant='contained'>Hello world</Button>
      <Link href='/test'>Go to Test Page</Link>
    </>
  )
}

export default Index
