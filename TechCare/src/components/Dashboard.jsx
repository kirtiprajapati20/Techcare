import React from 'react'
import { LineGraph } from './LineGraph'
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import arrowUp from '../assets/ArrowUp.png'
import arrowDown from '../assets/ArrowDown.png'
import CardComponent from './CardComponent'

const Dashboard = () => {
    return (
        <>
            <Grid container xs={12} spacing={2}>
                <Grid xs={3}>d</Grid>
                <Grid xs={6}>
                    <div className='rounded-5 d-flex justify-content-around' style={{ backgroundColor: '#F4F0FE' }}>
                        <div>
                            <div className='d-flex justify-content-between p-3'>
                                <p style={styles.heading}>Blood Pressure</p>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Last 6 months</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <LineGraph />
                        </div>
                        <div>
                            <div className="d-flex flex-column align-items-start mt-5">

                                <div className="d-flex ">
                                    <div style={{ width: '15px', height: '15px', backgroundColor: 'rgb(255, 99, 132)', borderRadius: '50%' }}></div>
                                    <p style={styles.subHeading} className="ms-3">Systolic</p>

                                </div>
                                <p style={styles.count}>160</p>
                                <div className='d-flex '>
                                    <img height={5} width={10} src={arrowUp} className='mt-2 ' />
                                    <p style={styles.status} className='mx-3'>Higher than Average</p>
                                </div>

                                <div className="d-flex ">
                                    <div style={{ width: '15px', height: '15px', backgroundColor: 'rgb(53, 162, 235)', borderRadius: '50%' }}></div>
                                    <p style={styles.subHeading} className="ms-3">Diastolic</p>

                                </div>
                                <p style={styles.count}>78</p>
                                <div className='d-flex '>
                                    <img height={5} width={10} src={arrowDown} className='mt-2 ' />
                                    <p style={styles.status} className='mx-3'>Lower than Average</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CardComponent />
                </Grid>
                <Grid xs={3}>

                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard

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