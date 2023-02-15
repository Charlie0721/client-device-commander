export interface ICommanderDeviceCreate{

    nit: string
    business_name: string
    tradename: string
    city: string
    department: string
    phone_number: string
    address: string
    number_of_devices:number
    server_trackId: string
    lifetime?: string
    activation_date?: string
    end_date?: string

}

export interface ICommanderDeviceUpdate{

    nit?: string
    business_name?: string
    tradename?: string
    city?: string
    department?: string
    phone_number?: string
    address?: string
    number_of_devices?:number
    server_trackId?: string
    lifetime?: string
    activation_date?: string
    end_date?: string

}