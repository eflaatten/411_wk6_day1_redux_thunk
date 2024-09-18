import React, { useState } from 'react'
import { Button, Table, TableBody, TableCell, TableRow, Container, Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    // fill out this component
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleMenuOpen = (event, index) => {
        setAnchorEl(event.currentTarget);
        setSelectedIndex(index);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedIndex(null);
    };

    const handleDelete = () => {
        props.deleteMake(selectedIndex);
        handleMenuClose();
    };

    return (
        <Container>
            <h1>Import Cars</h1>
            <h2>COUNT: {props.makes.length}</h2>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
            <Table>
                <TableRow>
                    <TableCell>Make ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Vehicle Type</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                <TableBody>
                    {props.makes.map((make, index) => (
                        <TableRow key={index}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>{make.VehicleTypeName}</TableCell>
                            <TableCell>
                                <MoreVert style={{ cursor: 'pointer' }} onClick={(event) => handleMenuOpen(event, index)}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {props.makes.length > 0 && (
                <Menu 
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
            )}
        </Container>
    )
}

export default Import