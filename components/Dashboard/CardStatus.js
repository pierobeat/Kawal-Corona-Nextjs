import NumberFormat from "react-number-format"

const {sum} = require("../../util/library.js")

const CardStatus = (props) => {
    return(
        <div className="row mt-3 ms-5 me-5 mb-2">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-danger img-card box-primary-shadow border" style={{width: "16.5rem"}}>
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0"> TOTAL POSITIF</p>
                                <h2 className="mb-0 number-font">
                                    <NumberFormat value={sum("Confirmed", props)} displayType={"text"} thousandSeparator={","} decimalScale={"."} defaultValue={0} />
                                </h2>
                                <p className="text-white mb-0">Orang</p>
                            </div>
                            <div className="ms-auto">
                                <img src="images/positif.png" width="70" height="70" alt="positif" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-success img-card box-primary-shadow border" style={{width: "16.5rem"}}>
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0"> TOTAL SEMBUH</p>
                                <h2 className="mb-0 number-font">
                                    <NumberFormat value={sum("Recovered", props)} displayType={"text"} thousandSeparator={","} decimalScale={"."} defaultValue={0} />
                                </h2>
                                <p className="text-white mb-0">Orang</p>
                            </div>
                            <div className="ms-auto">
                                <img src="images/sembuh.png" width="70" height="70" alt="positif" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-secondary img-card box-primary-shadow border" style={{width: "16.5rem"}}>
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0"> TOTAL MENINGGAL</p>
                                <h2 className="mb-0 number-font">
                                    <NumberFormat value={sum("Deaths", props)} displayType={"text"} thousandSeparator={","} decimalScale={"."} defaultValue={0} />
                                </h2>
                                <p className="text-white mb-0">Orang</p>
                            </div>
                            <div className="ms-auto">
                                <img src="images/meninggal.png" width="70" height="70" alt="positif" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card bg-info img-card box-primary-shadow border" style={{width: "16.5rem"}}>
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="text-white mb-0"> TOTAL AKTIF</p>
                                <h2 className="mb-0 number-font">
                                    <NumberFormat value={sum("Active", props)} displayType={"text"} thousandSeparator={","} decimalScale={"."} defaultValue={0} />
                                </h2>
                                <p className="text-white mb-0">Orang</p>
                            </div>
                            <div className="ms-auto">
                                <img src="images/active1.png" width="70" height="70" alt="positif" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardStatus