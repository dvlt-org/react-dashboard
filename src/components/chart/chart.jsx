import React, { useState } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis } from "recharts"
import "./chart.css"

export default function chart({ title, data, dataKey, grid }) {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width={"100%"} aspect={4 / 1}>
        <LineChart data={data}>
          <Line type="monotone" dataKey={dataKey} stroke='#8884d8' />
          <XAxis dataKey="name" />
          <Tooltip />
          <YAxis />
          {grid && <CartesianGrid strokeDasharray="3 3" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
