import React from 'react'
import { LineGraph } from './LineGraph'
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import arrowUp from '../assets/ArrowUp.png'
import arrowDown from '../assets/ArrowDown.png'
import CardComponent from './CardComponent'
import LabResults from './LabResults'
const Dashboard = () => {
    return (
        <>
            <Grid container xs={12} spacing={2}>
                <Grid xs={3}>d</Grid>
                <Grid xs={6}>
                    <div className='rounded-5 d-flex justify-content-around' style={{ backgroundColor: '#F4F0FE' }}>
                        <div>
                            <div className='d-flex justify-content-between p-3'>
                                <h3>Blood Pressure</h3>
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
                                    <h6 className="ms-3">Systolic</h6>

                                </div>
                                <h3>160</h3>
                                <div className='d-flex '>
                                    <img height={8} width={12} src={arrowUp} className='mt-2 ' />
                                    <p className='mx-3'>Higher than Average</p>
                                </div>

                                <div className="d-flex ">
                                    <div style={{ width: '15px', height: '15px', backgroundColor: 'rgb(53, 162, 235)', borderRadius: '50%' }}></div>
                                    <h6 className="ms-3">Diastolic</h6>

                                </div>
                                <h3>78</h3>
                                <div className='d-flex '>
                                    <img height={8} width={12} src={arrowDown} className='mt-2 ' />
                                    <p className='mx-3'>Lower than Average</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CardComponent/>
                </Grid>
                <Grid xs={3}>
                    <LabResults/>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard