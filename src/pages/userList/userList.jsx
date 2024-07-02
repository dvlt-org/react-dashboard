import { useState } from 'react';
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { Delete } from "@mui/icons-material"
import { rows } from "../../data/dummyData"


export default function userList() {
    const [data, setData] = useState(rows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'col1', headerName: "Id", width: 100 },
        { field: 'col2', headerName: "User", width: 200 },
        { field: 'col3', headerName: "Email", width: 200 },
        { field: 'col4', headerName: "Status", width: 200 },
        { field: 'col5', headerName: "Transaction", width: 200 },
        {
            field: 'col6', headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <div className='userListAction'>
                        <button className='userListEditButton'>
                            Edit
                        </button>
                        <Delete className='userListDeleteButton' onClick={() => handleDelete(params.id)} />
                    </div>
                )
            }
        },
    ];
    return (
        <div className='userList'>
            <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick checkboxSelection />
        </div>
    );
}
