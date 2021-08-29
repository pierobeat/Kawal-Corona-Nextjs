export const sum = function (key, props){
    if(props.isGlobal == false){
        switch(key){
            case 'Confirmed':
                return props.data[0].positif
            case 'Recovered':
                return props.data[0].sembuh
            case 'Deaths':
                return props.data[0].meninggal
            case 'Active':
                return props.data[0].dirawat
            default:
                return 0
        }
    } else {
        switch(key){
            case 'Confirmed':
                return props.data.reduce((sum,a) =>{
                    return sum + a.attributes.Confirmed
                } ,0)
            case 'Recovered':
                return props.data.reduce((sum,a) =>{
                    return sum + a.attributes.Recovered
                } ,0)
            case 'Deaths':
                return props.data.reduce((sum,a) =>{
                    return sum + a.attributes.Deaths
                } ,0)
            case 'Active':
                return props.data.reduce((sum,a) =>{
                    return sum + a.attributes.Active
                } ,0)
            default:
                return 0
        }
    }
}

export const getAllMonth = (props) => {
    const MonthName = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "des"]
    let DateNow = new Date()
    let Day = null
    let Month = null
    let Year = null
    let Label = []
    let Positif = []
    let Sembuh = []
    let Meninggal = []
    let Aktif = []
    let Data = []

    for(let value of props.statistik) {
        DateNow = new Date(value.Date)
        Day = DateNow.getDate()
        Month = DateNow.getMonth()
        Year = DateNow.getFullYear()
        Label.push(Day + " " + MonthName[Math.abs(Month)])
        Aktif.push(value.Active)
        Positif.push(value.Confirmed)
        Sembuh.push(value.Recovered)
        Meninggal.push(value.Deaths)

    }

    Data = {
        label: Label,
        aktif: Aktif,
        sembuh: Sembuh,
        meninggal: Meninggal,
        positif: Positif
    }
    return Data
}