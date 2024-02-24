'use client'
import React, { ReactNode } from 'react'
import Slider from 'react-slick'

interface CoreCarousel {
	children: ReactNode
}

const CoreCarousel: React.FC<CoreCarousel> = ({ children }) => {
	const settings: any = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 600,
		autoplaySpeed: 2000,
		// cssEase: 'linear',
		slidesToShow: 5,
		slidesToScroll: 2,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
					arrows: false
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false
				}
			}
		]
	}

	return <Slider {...settings}>{children}</Slider>
}

export default CoreCarousel
