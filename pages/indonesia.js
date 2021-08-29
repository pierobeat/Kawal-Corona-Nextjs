import React, { Component } from "react"
import IndexPage from "../components/Dashboard/indexPage"
import fetch from "isomorphic-fetch"

const config =  require("../config.json")

class indonesia extends Component {
    static async getInitialProps(){
        const data = await fetch(`${config['kawal_corona'].base_url}/indonesia`)
        const items = await data.json()
        const province = await fetch(`${config['kawal_corona'].base_url}/indonesia/provinsi`)
        const itemProvince = await province.json()
        const stat = await fetch(`${config['global-api'].base_url}${config['global-api'].total_live}/indonesia`)
        const byDayIndo = await stat.json()
        return {
            items,
            byDayIndo,
            itemProvince
        }
    }
    render(){
        const {items, byDayIndo, itemProvince} = this.props
        return (
            <IndexPage isGlobal={false} data={items} statistik={byDayIndo} provinsi={itemProvince} />
        )
    }
} 

export default indonesia