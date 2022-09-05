import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store/reducers/repoReducer"

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
  
}

export default MyApp
