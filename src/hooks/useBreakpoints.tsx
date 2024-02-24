'use client'
import { useMediaQuery } from 'react-responsive'

export default function useBreakpoints() {
	const mobile = useMediaQuery({
		query: '(max-width: 520px)'
	})
	const tablet = useMediaQuery({
		query: '(min-width: 768px)'
	})
	const desktop = useMediaQuery({
		query: '(min-width: 1200px)'
	})
	return { tablet, mobile, desktop }
}
