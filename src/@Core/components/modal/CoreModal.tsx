'use client'

import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
export interface CoreModalProps {
	title?: ReactNode
	children: ReactNode
	action?: ReactNode
	className?: string
	rgbBorder?: Boolean
	open: Boolean
	handleClose: () => void
	actionAfterClose?: (a?: any) => void
}
const CoreModal: React.FC<CoreModalProps> = ({
	title,
	children,
	action,
	open,
	className,
	handleClose,
	rgbBorder = false,
	actionAfterClose
}) => {
	const onClose = () => {
		if (actionAfterClose) {
			actionAfterClose()
		}
		handleClose()
	}
	return (
		open && (
			<div className="fixed top-0 left-0 right-0  z-[999] w-screen h-screen">
				<div className="relative flex items-center justify-center w-full h-full">
					<div className="absolute z-[1] w-full h-full bg-gray-500 opacity-20 " onClick={onClose} />
					<div className="absolute flex  z-[2] items-center justify-center ">
						<div
							className={clsx(
								'relative overflow-hidden flex flex-col gap-12  shadow-2xl min-h-[300px] p-8 animate-modal bg-white rounded-lg min-w-[300px] md:min-w-[400px]',
								className,
								{
									border: !rgbBorder
								}
							)}
						>
							<span onClick={onClose} className="absolute right-4 top-4">
								<AiFillCloseSquare
									className="text-blue-500 cursor-pointer hover:text-blue-300"
									size={30}
								/>
							</span>
							{title && <h3 className="text-center">{title}</h3>}
							<div className="max-h-[80vh] overflow-y-scroll">{children}</div>
						</div>
					</div>
				</div>
			</div>
		)
	)
}

export default React.memo(CoreModal)
