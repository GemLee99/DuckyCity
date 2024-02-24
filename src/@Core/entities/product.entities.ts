export interface ProductDto {
	category: { id: number }
	id: number
	name: string
	status: 'STOCKING' | 'OUTOFSTOCK' | 'INCOMMING' | 'STOP_BUSSINESS'
	images: string
	price: number
	salePrice: number
	view: number
	description: string
	overView: string
	properties: {
		[key: string]: string | number | boolean
	}
	rootCategoryId: number
	alias: string
	WareHouse?: {
		quantity: number
	}
	seo: string
}

export interface SEOProduct {
	name: string
	alias: string
	images: string
	seo: string
	keywords: string
}
