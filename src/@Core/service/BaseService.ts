import queryString from 'query-string'

export interface searchProps {
	params?: any
	header?: any
}
export interface ResponseProps<T> {
	data: T
	message: string
	success: boolean
}

export interface PagingDataProps<T> {
	dataTable: T[]
	paging: {
		page: number
		pageSize: number
	}
	totalCount: number
}

export class BaseService<DefaultDataDto> {
	BASE_URL = process.env.NEXT_PUBLIC_BE_URL
	BASE_ENDPOINT: string | undefined = ''

	checkEndpointHaveBaseUrl = (str: string) => {
		if (str.startsWith('http')) {
			return str
		} else {
			return this.BASE_URL + str
		}
	}
	constructor(endpoint?: string) {
		this.BASE_ENDPOINT = endpoint
	}

	getToken = () => {
		if (typeof window !== 'undefined') {
			const token = sessionStorage.getItem('beep')
			return token ?? ''
		}
		return ''
	}

	responseInterceptor = <DataType>(result: any, status: number) => {
		if (status === 403 || status === 401) {
			//user not auth
			// window.location.assign('/404')
		}

		if (!result.success) {
			throw { message: result?.message ?? 'API error', data: result }
		}
		return result as ResponseProps<DataType>
	}

	request = {
		get: async <DataDto>(endpoint: string, headers?: any, config?: any) => {
			try {
				const response = await fetch(this.checkEndpointHaveBaseUrl(endpoint), {
					method: 'GET',
					headers: {
						'x-access-token': this.getToken(),
						...headers
					},
					...config
				})
				const result = await response.json()
				return this.responseInterceptor<DataDto>(result, response?.status)
			} catch (error: any) {
				throw { message: error?.msg ?? error?.message, status: error?.status }
			}
		},

		post: async <BodyDto, DataDto>(
			endpoint: string,
			data: BodyDto,
			headers?: any,
			config?: any,
			dataType = 'obj'
		) => {
			const defaultHeaderType = dataType === 'obj' ? { 'Content-type': 'application/json' } : {}
			try {
				const response = await fetch(this.checkEndpointHaveBaseUrl(endpoint), {
					method: 'POST',
					headers: {
						'x-access-token': this.getToken(),
						...headers,
						...defaultHeaderType
					},
					body: dataType === 'obj' ? JSON.stringify(data) : data,
					...config
				})
				const result = await response.json()
				return this.responseInterceptor<DataDto>(result, response?.status)
			} catch (error: any) {
				throw { message: error?.msg ?? error?.message, status: error?.status }
			}
		},

		put: async <BodyDto>(endpoint: string, data: BodyDto, headers?: any, config?: any) => {
			try {
				const response = await fetch(this.checkEndpointHaveBaseUrl(endpoint), {
					method: 'PUT',
					headers: {
						'x-access-token': this.getToken(),
						'Content-type': 'application/json',
						...headers
					},
					body: JSON.stringify(data),
					...config
				})
				const result = await response.json()
				return this.responseInterceptor(result, response?.status)
			} catch (error: any) {
				console.log('🚀 ~ BaseService<DefaultDataDto> ~ error:', error)
				throw { message: error?.msg ?? error?.message, status: error?.status }
			}
		},

		patch: async <BodyDto>(endpoint: string, data: BodyDto, headers: any, config?: any) => {
			try {
				const response = await fetch(this.checkEndpointHaveBaseUrl(endpoint), {
					method: 'PATCH',
					headers: {
						'x-access-token': this.getToken(),
						...headers
					},
					body: JSON.stringify(data),
					...config
				})
				const result = await response.json()
				return this.responseInterceptor(result, response?.status)
			} catch (error: any) {
				throw { message: error?.msg ?? error?.message, status: error?.status }
			}
		},

		delete: async (endpoint: string, config?: any) => {
			try {
				const response = await fetch(this.checkEndpointHaveBaseUrl(endpoint), {
					method: 'DELETE',
					headers: {
						'x-access-token': this.getToken()
					},
					...config
				})
				const result = await response.json()
				return this.responseInterceptor(result, response?.status)
			} catch (error: any) {
				throw { message: error?.msg ?? error?.message, status: error?.status }
			}
		}
	}

	search = async ({ params, header }: searchProps): Promise<ResponseProps<PagingDataProps<DefaultDataDto>>> => {
		const convertParams = queryString.stringify(params ?? { page: 1, pageSize: 10 })
		const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}?${convertParams}`
		return this.request.get<PagingDataProps<DefaultDataDto>>(endpoint, header)
	}

	find = async (id: string, config?: any): Promise<ResponseProps<DefaultDataDto>> => {
		const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}/${id}`

		return this.request.get<DefaultDataDto>(endpoint, {}, config)
	}

	remove = async (id: string, config?: any) => {
		const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}/${id}`
		return this.request.delete(endpoint, config)
	}

	save = async (data: any, config?: any) => {
		const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}`
		if (data?.id) {
			return this.request.put(endpoint, data, config)
		}
		return this.request.post<Partial<DefaultDataDto>, any>(endpoint, data, config)
	}

	update = async (data: any, config?: any) => {
		const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}`
		return this.request.patch<any>(endpoint, data, config)
	}
}
