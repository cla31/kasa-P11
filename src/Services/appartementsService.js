import { getDatasLogements } from './Service.js'
import AppartementDatas from '../Utils/AppartementDatas.jsx'

export default async function appartInfo() {
    let datas = {}

    datas = await getDatasLogements()
        // console.log(datas)

    const appartementDatas = datas.map((info) => new AppartementDatas(info))
        // console.log("***Appart datas", appartementDatas)

    return appartementDatas
}