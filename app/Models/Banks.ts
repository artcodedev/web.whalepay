export interface BanksResponseData {
    title: string
    uid: string
    img: string
}

export interface BanksResponse {
    status: number
    data: BanksResponseData[]
}