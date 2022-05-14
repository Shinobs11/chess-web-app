import '../styles/globals.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import { store } from '../ducks/store'
import { Provider } from 'react-redux'


import useCachedResources from '../hooks/useCachedResources'
import { useEffect, useState, createContext } from 'react'

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
