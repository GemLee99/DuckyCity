import clsx from 'clsx'
import Image from 'next/image'
import { memo } from 'react'
import Link from 'next/link'
import { IoFlash } from 'react-icons/io5'
import { FaStar } from 'react-icons/fa'
import { ProductDto } from '../../entities/product.entities'

interface Props {
	product: ProductDto
	className?: string
	id: string
}

const ProductCard: React.FC<Props> = ({ product, id, className }) => {
	const { price, salePrice, view } = product
	const images = JSON.parse(product?.images ?? '[]') as string[]
	return (
		<div className="p-4">
			<Link href={`/san-pham/${product?.alias}`}>
				<div
					className={clsx([
						className,
						' w-full group relative flex flex-col gap-y-12 p-8 shadow-md rounded-md border transition-all duration-400 cursor-pointer hover:-translate-y-[4px] hover:shadow-lg'
					])}
					id={id}
				>
					<div className="relative aspect-[1/1] w-[99%] mx-auto overflow-hidden">
						<Image
							quality={100}
							sizes="w"
							alt={product?.name ?? ''}
							fill
							className="rounded-md duration-300 transition-all group-hover:scale-[1.04]"
							src={images[0]}
						/>
					</div>

					<h2 className="lineClamp h-[2rem] hover:text-blue-500  font-[500] hover:font-[600]">
						{product?.name}
					</h2>

					<div className="flex flex-col gap-2">
						<span className="font-bold text-blue-500 text-[1rem]  md:text-[1.4rem]">
							{price?.toLocaleString()} đ
						</span>

						<span className="text-gray-400 line-through">{salePrice?.toLocaleString()} đ</span>
					</div>

					<div className="absolute right-0 flex flex-col gap-2 p-4 bg-white drop-shadow-xl top-2 opacity-95 rounded-l-md">
						{view > 50 && <IoFlash className="text-red-500 text-[22px] animate-lightning" />}
						{salePrice < 1000000 && <FaStar className="text-yellow-500 text-[22px] animate-pulse" />}
					</div>
				</div>
			</Link>
		</div>
	)
}

export default memo(ProductCard)
