import { FC } from 'react'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperNav from './SwiperNav'

const Slider: FC = () => {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={20}
			centeredSlides={true}
			loop={true}
			pagination={{
				clickable: true
			}}
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				390: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 40
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 20
				}
			}}
			navigation={true}
			autoplay={{ delay: 2000 }}
			modules={[Navigation, Autoplay]}
			className='mt-14'
		>
			<SwiperSlide>
				<div>
					<img
						className='block overflow-hidden rounded-xl object-cover w-full h-full'
						src='https://novalabtech.com/wp-content/uploads/2022/04/Fitness.jpeg'
						alt=''
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div>
					<img
						className='block overflow-hidden rounded-xl object-cover w-full h-full'
						src='https://novalabtech.com/wp-content/uploads/2022/04/Fitness.jpeg'
						alt=''
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div>
					<img
						className='block overflow-hidden rounded-xl object-cover w-full h-full'
						src='https://novalabtech.com/wp-content/uploads/2022/04/Fitness.jpeg'
						alt=''
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div>
					<img
						className='block overflow-hidden rounded-xl object-cover w-full h-full'
						src='https://novalabtech.com/wp-content/uploads/2022/04/Fitness.jpeg'
						alt=''
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div>
					<img
						className='block overflow-hidden rounded-xl object-cover w-full h-full'
						src='https://novalabtech.com/wp-content/uploads/2022/04/Fitness.jpeg'
						alt=''
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div>
					<img
						className='block overflow-hidden rounded-xl object-cover w-full h-full'
						src='https://novalabtech.com/wp-content/uploads/2022/04/Fitness.jpeg'
						alt=''
					/>
				</div>
			</SwiperSlide>

			<SwiperNav />
		</Swiper>
	)
}

export default Slider
