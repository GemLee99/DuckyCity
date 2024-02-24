'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

interface CoreImageCarouselProps {
	images: string[]
}

const CoreImageCarousel: React.FC<CoreImageCarouselProps> = props => {
	const [backgroundPosition, setBackgroundPosition] = useState<string>('0% 0%')
	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
		const x = ((e.pageX - left) / width) * 100
		const y = ((e.pageY - top) / height) * 100
		setBackgroundPosition(`${x}% ${y}%`)
	}

	const [nav1, setNav1] = useState<Slider | undefined>(undefined)
	const [nav2, setNav2] = useState<Slider | undefined>(undefined)
	const slider1 = useRef<Slider | null>(null)
	const slider2 = useRef<Slider | null>(null)

	useEffect(() => {
		setNav1(slider1.current ?? undefined)
		setNav2(slider2.current ?? undefined)
	}, [])

	return (
		<div className="roundedBox">
			<Slider asNavFor={nav2} ref={slider1} arrows={false}>
				{props.images.map((item, i) => (
					<div key={`to ${i}`}>
						<figure
							className="w-full bg-no-repeat cursor-pointer group"
							onMouseMove={handleMouseMove}
							style={{ backgroundImage: `url(${item})`, backgroundPosition }}
						>
							<div className="relative aspect-square group-hover:opacity-0">
								<Image quality={100} fill src={item} alt={item} priority />
							</div>
						</figure>
					</div>
				))}
			</Slider>
			<div className="px-32">
				<Slider
					asNavFor={nav1}
					ref={slider2}
					slidesToShow={5}
					responsive={[
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 4
							}
						},
						{
							breakpoint: 420,
							settings: {
								slidesToShow: 4,
								arrows: false
							}
						}
					]}
					swipeToSlide={true}
					focusOnSelect={true}
					infinite={false}
					arrows={true}
				>
					{props.images.map((item, i) => (
						<div
							className="p-6 cursor-pointer transition-all duration-200 hover:scale-[1.04]"
							id={`navSlide ${i}`}
							style={{ padding: 8 }}
							key={`nho ${i}`}
						>
							<div className="relative aspect-square ">
								<Image fill quality={70} className="rounded-md" src={item} alt={item} />
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default CoreImageCarousel
