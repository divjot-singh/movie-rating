import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import AuthProvider from '../state-management/userContext'
import Header from '../components/Header'
import useCommonComponents, { CommonComponentsContextReturnValue, CommonComponentsProvider, } from '../state-management/commonComponentsContext'
import { Provider } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import RouteChangeWrapper from '../components/RouteChangeWrapper'

function MyApp({ Component, pageProps }: AppProps) {

	
	return (<Provider session={pageProps.session}>
				<AuthProvider>
					<CommonComponentsProvider>
						<>
							<RouteChangeWrapper/>
							<Header/>
							<Component {...pageProps} />
						</>
					</CommonComponentsProvider>
				</AuthProvider>
			</Provider>);
}
export default MyApp
