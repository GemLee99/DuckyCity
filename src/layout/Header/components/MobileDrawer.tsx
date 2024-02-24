'use client'

import CoreDrawer from '@/src/@Core/components/drawer/CoreDrawer'
import useBreakpoints from '@/src/hooks/useBreakpoints'
import { FaSearch } from 'react-icons/fa'
import { FaList } from 'react-icons/fa6'
import SearchBox from './SearchBox'
import { useLayoutContext } from '../../AppLayout'
import Link from 'next/link'
import { CoreButton } from '@/src/@Core/components'
import { useRouter } from 'next/navigation'
// import CategoriesMenu from '@/src/@Shop/components/nav/CategoriesMenu'

export default function MobileDrawer() {
	const { tablet } = useBreakpoints()
	const { openMobileMenu, handleOpenMobileMenu, handleCloseMobileMenu } = useLayoutContext()
	const router = useRouter()
	return !tablet ? (
		<>
			<div
				onClick={handleOpenMobileMenu}
				className="flex items-center gap-4 p-8 bg-gray-100 rounded-md shadow-sank "
			>
				<div className="p-4 text-white rounded-md bg-secondaryGradient">
					<FaSearch />
				</div>
				<div className="p-4 text-white rounded-md bg-mainGradient">
					<FaList />
				</div>
			</div>
			<CoreDrawer className="!w-[90vw]" title={null} open={openMobileMenu} handleClose={handleCloseMobileMenu}>
				<div className="flex">
					<img src="/images/favicon.svg" width={120}></img>
				</div>
				<SearchBox />
				<p className="text-center text-[0.8rem]">Hoặc</p>
				<div
					onClick={() => {
						handleCloseMobileMenu()
						router.push('/san-pham?page=1&pageSize=10')
					}}
					className="flex justify-center w-full"
				>
					<CoreButton variant="default">Tới trang Danh sách sản phẩm</CoreButton>
				</div>
				{/* <CategoriesMenu /> */}
			</CoreDrawer>
		</>
	) : null
}
