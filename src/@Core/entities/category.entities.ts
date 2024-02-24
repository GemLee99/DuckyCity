export interface CategoryFiltersDto {
	filters: {
		label: string
		options: { label: string; value: string | number }[]
		valueType: 'SELECT' | 'TEXT' | 'NUMBER'
	}[]
}
export interface CategoryDto {
	id: number
	description: string
	alias: string
	label: string
	active: boolean
	icon: string
	parentId: number
	childrenIds: number[]
	categoryFiltersId: number | null
	children: CategoryDto[]
	CategoryFilters?: CategoryFiltersDto
}
