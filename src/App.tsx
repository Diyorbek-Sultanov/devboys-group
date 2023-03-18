import { FC } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Industrie from './components/Industrie'
import Main from './components/Main'
import Services from './components/Services'

const App: FC = () => {
	return (
		<div className='dark'>
			<div className='container mx-auto px-5'>
				<div className='flex flex-col min-h-screen'>
					<Header />
					<main className='flex-grow text-white'>
						<Main />
						<Services />
						<Industrie />
						<About />
						<Contact />
					</main>
					<footer className='mt-auto'></footer>
				</div>
			</div>
		</div>
	)
}

export default App
