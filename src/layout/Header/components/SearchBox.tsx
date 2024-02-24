'use client'
import { CoreButton, CoreInput } from '@/src/@Core/components'
import { FormProvider } from 'react-hook-form'
import { useSearchBox } from './hooks/useSearchBox'

const SearchBox: React.FC = () => {
	const { methodForm, onSubmit } = useSearchBox()
	const { control } = methodForm
	return (
		<div className="w-full">
			<FormProvider {...methodForm}>
				<form onSubmit={onSubmit} className="flex items-start justify-between w-full space-x-6">
					<CoreInput
						showErrorMsg={false}
						control={control}
						className="w-full"
						name="search"
						placeholder="Nhập từ khoá để tìm kiếm"
						type="text"
					/>
					<CoreButton type="submit" variant="default">
						Tìm
					</CoreButton>
				</form>
			</FormProvider>
		</div>
	)
}

export default SearchBox
