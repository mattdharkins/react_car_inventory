import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CarForm } from '../../components';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'year',
    headerName: 'Year',
    width: 100,
    editable: true,
  },
  {
    field: 'model',
    headerName: 'Model',
    width: 250,
    editable: true,
  },
  {
    field: 'ext_color',
    headerName: 'Ext Color',
    width: 150,
    editable: true,
  },
  {
    field: 'int_color',
    headerName: 'Int Color',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    sortable: false,
    width: 120,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 250,
    editable: true,
  },
  {
    field: 'odometer',
    headerName: 'Odometer',
    width: 150,
    editable: true,
  },
  {
    field: 'vin',
    headerName: 'VIN',
    width: 250,
    editable: true,
  },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

interface gridData{
  data:{
    id?: string;
  }
}

export const DataTable = () => {
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () =>{
      setOpen(true);
    }

    let handleClose = () =>{
      setOpen(false);
    }

    let deleteData = async () => {
      for ( let id in gridData){
        await server_calls.delete(`${gridData[id]}`)}
      window.location.reload()
        
    }
    console.log(gridData)
    
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Ferraris In Inventory</h2>
        <DataGrid
          rows={carData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
          {...carData} 
        />
        <Button onClick={handleOpen}>Update Ferrari</Button>
        <Button variant="contained" color="primary" onClick={deleteData}>Delete Ferrari</Button>
        {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update A Ferrari</DialogTitle>
          <DialogContent>
            <DialogContentText>Ferrari id: {gridData[0]}</DialogContentText>
              <CarForm id={ `${gridData[0]}` }/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
      </div>
    );
  }