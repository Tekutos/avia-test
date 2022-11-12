export interface ITicket{
    id: number
    from: string
    where: string
    fromAir: string
    whereAir: string
    price: number
    date: Date
    time: string
    companyLogo: string
    companyName: string
    returned: boolean
}
