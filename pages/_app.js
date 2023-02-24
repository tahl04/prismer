
import MyContext from './src/MyContext'

export default function App({ Component, pageProps }) {
  return (
    <MyContext>
      <Component {...pageProps} />
    </MyContext>
  )
}
