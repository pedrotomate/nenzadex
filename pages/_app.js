// pages/_app.js
import '../css/theme.css';
import '../js/main.js'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}