import React from "react";
import Header from "./header/Header";
import "../assets/css/Header.css";
import Sidebar from "./sidebar/Sidebar";
import DiagnosticList from "./profile/DiagnosticList"
import LabResults from "./profile/LabResults"
import Profile from "./profile/Profile"
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { LineGraph } from "./Graph/LineGraph";
import CardComponent from "./Cards/CardComponent";
import arrowUp from '../assets/images/ArrowUp.png';
import arrowDown from '../assets/images/ArrowDown.png';


const Dashboard = () => {
    return (

        <div className='p-3'>
            <Header />
            <Grid container spacing={4}>

                <Grid item xs={3}>
                    <Sidebar />
                </Grid>


                <Grid item xs={6}>
                    <div className="rounded-5 d-flex justify-content-around mt-5 p-2" style={{ backgroundColor: '#F4F0FE' }}>
                        <div style={{width:'450px'}}>
                            <div className="d-flex justify-content-between align-items-center p-3">
                                <p style={styles.heading}>Blood Pressure</p>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Last 6 months</InputLabel>
                                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" label="Age">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <LineGraph />
                        </div>

                        <div>
                            <div className="d-flex flex-column align-items-start mt-5 border-bottom" >
                                <div className="" style={{borderBottom: '1px solid #E0E0E0'}}>
                                <div className="d-flex">
                                    <div style={{ width: '15px', height: '15px', backgroundColor: 'rgb(255, 99, 132)', borderRadius: '50%' }}></div>
                                    <p style={styles.subHeading} className="ms-3">Systolic</p>
                                </div>
                                <p style={styles.count}>160</p>
                                <div className="d-flex ">
                                    <img height={5} width={10} src={arrowUp} className="mt-2" />
                                    <p style={styles.status} className="mx-3">Higher than Average</p>
                                </div>
                                </div>
                                <div className="d-flex pt-4">
                                    <div style={{ width: '15px', height: '15px', backgroundColor: 'rgb(53, 162, 235)', borderRadius: '50%' }}></div>
                                    <p style={styles.subHeading} className="ms-3">Diastolic</p>
                                </div>
                                <p style={styles.count}>78</p>
                                <div className="d-flex">
                                    <img height={5} width={10} src={arrowDown} className="mt-2" />
                                    <p style={styles.status} className="mx-3">Lower than Average</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CardComponent />
                    <DiagnosticList />
                </Grid>

                <Grid item xs={3}>
                    <Profile />
                    <LabResults />
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
const styles = {
    heading: {
        font: 'normal normal bold 18px/24px Manrope',
        letterSpacing: '0px',
        color: '#072635',
    },
    subHeading: {
        font: 'normal normal bold 14px/19px Manrope',
        letterSpacing: '0px',
        color: '#072635',
    },
    count: {
        font: 'normal normal bold 22px/30px Manrope',
        letterSpacing: '0px',
        color: '#072635',
    },
    status: {
        font: 'normal normal normal 14px/19px Manrope',
        letterSpacing: '0px',
        color: '#072635',
    }
}
