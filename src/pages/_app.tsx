import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
