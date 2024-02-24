'use client'

import { useState } from 'react'
import { FaCircleLeft, FaCircleRight } from 'react-icons/fa6'

interface Props {
	total: number
	onChange: ({ currentPage, pageSize }: { currentPage: number; pageSize: number }) => void
	pageSize: number
}

export default function CorePagination(props: Props) {
	const { onChange, pageSize, total } = props
	const [current, setCurrent] = useState(1)

	const totalPages = Math.ceil(total / pageSize)

	const handlePageChange = (pageNumber: number) => {
		setCurrent(pageNumber)
		onChange({ currentPage: pageNumber, pageSize })
	}

	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)
	const visiblePages = pageNumbers.slice(Math.max(0, current - 3), Math.min(totalPages, current + 2))
	return (
		<div className="flex items-center gap-2">
			{current > 1 && (
				<div
					className="p-6 rounded-md cursor-pointer hover:shadow-md bg-secondaryGradient"
					onClick={() => handlePageChange(current - 1)}
				>
					<FaCircleLeft className="text-white" />
				</div>
			)}
			{visiblePages.map(pageNumber => (
				<button
					key={pageNumber}
					onClick={() => handlePageChange(pageNumber)}
					className={`px-3 py-2 border ${
						pageNumber === current ? 'bg-secondaryGradient text-white rounded-md shadow-lg ' : ''
					}`}
				>
					{pageNumber}
				</button>
			))}
			{current < totalPages && (
				<div
					className="p-6 rounded-md cursor-pointer hover:shadow-md bg-secondaryGradient"
					onClick={() => handlePageChange(current + 1)}
				>
					<FaCircleRight className="text-white" />
				</div>
			)}
		</div>
	)
}
