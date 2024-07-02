import React from 'react'
import { DataGrid } from "@mui/x-data-grid"
import { AlarmSharp, Delete, PartyModeSharp } from "@mui/icons-material"
import {
  productsRows
} from "../../data/dummyData"
import "./productsList.css"

const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 100,
  },
  {
    field: "name",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className='productListUser'>
          <img className='productListUserImg' src={params.row.img} alt="" />
          <span>{params.row.name}</span>
        </div>
      )
    }
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
  },
  {
    field: 'action',
    headerName: "Action",
    width: 200,
    renderCell: (product) => {
      return (
        <div className='productListAction'>
          <button className='productListEditButton'>Edit</button>
          <Delete className='productListDeleteButton' />
        </div>
      )
    }
  }
]

export default function productsList() {
  return (
    <div className='productList'>
      <DataGrid rows={productsRows} columns={columns} checkboxSelection disableRowSelectionOnClick />
    </div>
  )
}
