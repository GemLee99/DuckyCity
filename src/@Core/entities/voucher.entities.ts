export interface VoucherDto {
	id: number
	description: string
	activeAt: Date
	dueAt: Date
	code: string
	usageCount: number
	priceMin: number
	discount: number
}
