import clsx from 'clsx'

export default function ProductCardLoading() {
	return (
		<div className="p-4">
			<div
				className={clsx([
					' animate-pulse group relative flex flex-col gap-y-12 p-8 shadow-cardItem rounded-md border transition-all duration-400 cursor-pointer '
				])}
			>
				<div className="relative aspect-[1/1] w-[99%] mx-auto animate-pulse bg-gray-200"></div>

				<h2 className="lineClamp h-[2rem] animate-pulse bg-gray-200" />
				<div className="flex flex-col gap-2">
					<span className="font-bold text-blue-500  text-[1.4rem] animate-pulse bg-gray-200">
						{/* {price?.toLocaleString()} đ */}
					</span>

					<span className="text-gray-400 line-through bg-gray-200 animate-pulse"></span>
				</div>
			</div>
		</div>
	)
}
