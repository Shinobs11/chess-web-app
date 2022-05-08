import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../ducks/store'
import { Provider } from 'react-redux'
import startWebSocket from '../websocket/startWebsocket'
import useCachedResources from '../hooks/useCachedResources'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const isReady = useCachedResources();
  
  if(isReady){
    return(
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
