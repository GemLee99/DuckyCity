'use client'
import Yup from '@/src/helper/Yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useLayoutContext } from '@/src/layout/AppLayout'
import useBreakpoints from '@/src/hooks/useBreakpoints'

interface FormProps {
	search: string
}

export const useSearchBox = () => {
	const { handleCloseMobileMenu } = useLayoutContext()
	const { tablet } = useBreakpoints()

	const searchParams = useSearchParams()
	const router = useRouter()
	const methodForm = useForm<FormProps>({
		defaultValues: {
			search: ''
		},
		mode: 'onTouched',
		resolver: yupResolver(
			Yup.object({
				search: Yup.string().required()
			})
		)
	})

	const onSubmit = methodForm.handleSubmit((data: FormProps) => {
		if (data.search.trim().length > 0) {
			if (!tablet) {
				handleCloseMobileMenu()
			}
			const current = new URLSearchParams(Array.from(searchParams.entries()))

			current.set('search', data.search)
			const search = current.toString()
			const query = search ? `?${search}` : ''
			router.push(`${'/san-pham'}${query}`)
		}
	})

	return {
		methodForm,
		onSubmit
	}
}
