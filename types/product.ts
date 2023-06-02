export default interface Product {
    id: number,
    title:string,
    price?: number,
    category: string,
    description?: string,
    image?: string,
    rating: object,
    quantity?: number
}

export interface Rating {
    rate: number,
    count: number
}