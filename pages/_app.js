import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../config/Store'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
	return (
		<>
		<Header />
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		<Footer />
		<ToastContainer />
		</>
	)
}

// initialize store and wrapper store
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)
