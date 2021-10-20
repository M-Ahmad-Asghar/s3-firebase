import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../config/store'
import Header from '../components/header/Header'

function MyApp({ Component, pageProps }) {
	return (
		<>
		<Header />
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

// initialize store and wrapper store
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)
