import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './allscenelist.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Allscenelist() {
    return (
        <div>
            <fetchAPI />
        </div>
    )
}

function fetchAPI() {
    const data = { A: "資料A", B: "資料B" };
    const formData = Object.keys(data).map(
        function (keyName) {
            return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
        }
    ).join('&');
    fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/HualienCounty?%24format=JSON", {
        method: "GET",
        body: formData,
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(e => {
            console.log(e)
        })
}

export default Allscenelist;