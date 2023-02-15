
import axios from "./axios"
import {ICommanderDeviceCreate,ICommanderDeviceUpdate} from '../interface/commander.interface'

export class CommanderDevice{

    static sendData=async (data:ICommanderDeviceCreate)=>await axios.post('/commander', data)
    static getData= async ()=>await axios.get('/commander')
    static getUniqueDataByNit= async(nit: string)=>await axios.get(`/commander/${nit}`) 
    static updateData= async(nit: string, data:ICommanderDeviceUpdate)=> await axios.patch(`/commander/${nit}`, data)
}