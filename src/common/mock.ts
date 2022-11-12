import { ITicket } from "../models/model"

export const tickets: ITicket[] =[
    {
        id: 1,
        from: "Москва",
        where: "Ростов-на-Дону",
        fromAir: "VKO",
        whereAir: "ROV",
        price: 4150,
        date: new Date(2022, 10, 19),
        time: "10:20-12:05",
        companyLogo: "../image/логоS7.svg",
        companyName: "S7 Airlanes",
        returned: false
    },
    {
        id: 2,
        from: "Москва",
        where: "Ростов-на-Дону",
        fromAir: "DOM",
        whereAir: "ROV",
        price: 4700,
        date: new Date(2022, 10, 19),
        time: "08:00-09:45",
        companyLogo: "../image/логоS7.svg",
        companyName: "S7 Airlanes",
        returned: false
    },
    {
        id: 3,
        from: "Москва",
        where: "Ростов-на-Дону",
        fromAir: "SVO",
        whereAir: "ROV",
        price: 3950,
        date: new Date(2022, 10, 19),
        time: "12:20-14:05",
        companyLogo: "../image/логоS7.svg",
        companyName: "S7 Airlanes",
        returned: true
    },
    {
        id: 4,
        from: "Ростов-на-Дону",
        where: "Москва",
        fromAir: "ROV",
        whereAir: "DOM",
        price: 4150,
        date: new Date(2022, 10, 26),
        time: "09:20-11:05",
        companyLogo: "../image/логоS7.svg",
        companyName: "S7 Airlanes",
        returned: false
    },
    {
        id: 5,
        from: "Ростов-на-Дону",
        where: "Москва",
        fromAir: "ROV",
        whereAir: "DOM",
        price: 4150,
        date: new Date(2022, 10, 26),
        time: "19:35-21:20",
        companyLogo: "../image/логоS7.svg",
        companyName: "S7 Airlanes",
        returned: false
    },
    {
        id: 6,
        from: "Ростов-на-Дону",
        where: "Москва",
        fromAir: "ROV",
        whereAir: "DOM",
        price: 4150,
        date: new Date(2022, 10, 26),
        time: "13:30-15:15",
        companyLogo: "../image/логоS7.svg",
        companyName: "S7 Airlanes",
        returned: false
    },
]