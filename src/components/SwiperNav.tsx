import { FC } from 'react'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { useSwiper } from 'swiper/react'

const SwiperNav: FC = () => {
	const swiper = useSwiper()

	return (
		<div className='flex items-center justify-between'>
			<button
				className='absolute top-[50%] z-50 translate-y-swiperNav'
				onClick={() => swiper.slidePrev()}
			>
				<AiFillLeftCircle fontSize={40} />
			</button>
			<button
				className='absolute top-[50%] z-50 right-0 translate-y-swiperNav'
				onClick={() => swiper.slideNext()}
			>
				<AiFillRightCircle fontSize={40} />
			</button>
		</div>
	)
}

export default SwiperNav
