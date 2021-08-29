import React from "react"
import {Line, Pie} from "react-chartjs-2"
import NumberFormat from "react-number-format"

const {sum, getAllMonth} = require("../../util/library.js")

const Grafik = (props) => {
    let dataCovid = null
    let data = null

    if(!props.isGlobal) {
        dataCovid = getAllMonth(props)
        data = {
            labels: dataCovid.label,
            datasets: [
                {
                    label: "Jumlah Positif",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(229,56,50,0.4)",
                    borderColor: "rgba(229, 56, 56, 1)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(229,56, 56, 1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "rgba(229,56, 56, 1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid.positif
                },
                {
                    label: "Jumlah sembuh",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "blue",
                    borderColor: "blue",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "blue",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "blue",
                    pointHoverBorderColor: "blue",
                    pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid.sembuh
                },
                {
                    label: "Jumlah meninggal",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "grey",
                    borderColor: "grey",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "grey",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "grey",
                    pointHoverBorderColor: "grey",
                    pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid.meninggal
                }
            ]
        }

    }

    const dataCovidPie = {
        labels: [
            "positif",
            "Sembuh",
            "meninggal",
        ],
        datasets: [
            {
                data:[sum("Confirmed", props), sum("Recovered", props), sum("Deaths", props)],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                HoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    }

    return(
        <div className="row mb-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                <div className="card overflow-hidden bg-white">
                    <div className="card-header">
                        <h3 className="card-titel">
                            {props.isGlobal ? "Statistik Virus Corona di Dunia" : "Statistik Virus Corona di Indonesia"}
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="chart-wrapper">
                            {props.isGlobal ? 
                            <Pie data={dataCovidPie} width={600} height={600}
                            options={{maintainAspectRatio: false}} /> :
                            <Line data={data} width={100} height={40} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grafik