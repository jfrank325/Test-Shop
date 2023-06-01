import Product from '~/types/product'
import Categories from '~/types/categories'

export const fetchProducts = async (category: string): Promise<Product[]> => {
    const uri = `https://fakestoreapi.com/products/category/${category}`
    const { data: products }: any = await useFetch(uri)
    return products
}

export const fetchProduct = async (id: number): Promise<Product> => {
    const uri = `https://fakestoreapi.com/products/${id}`;
    const { data: product }: any = await useFetch(uri)
    return product
}

export const fetchCategories = async (): Promise<Categories[]> => {
    const uri = "https://fakestoreapi.com/products/categories"
    const { data: categoryData }: any = await useFetch(uri)
    return categoryData
}