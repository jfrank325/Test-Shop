type category = string

export interface MainCategory {
    name: String,
    uri?: string
}

export default interface Categories {
    data: category[]
}