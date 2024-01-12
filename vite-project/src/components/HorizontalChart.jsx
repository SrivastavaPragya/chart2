import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const HorizontalChart = ({ data }) => {
  return (
    <BarChart width={400} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" type="category" />
      <YAxis type="number" />
      <Tooltip />
      <Legend />
      <Bar dataKey="sessionTamper" stackId="a" fill="#82ca9d" />
      <Bar dataKey="forcefulBrowsing" stackId="a" fill="#8884d8" />
      <Bar dataKey="injectionAttacks" stackId="a" fill="#ffc658" />
      <Bar dataKey="protocolViolations" stackId="a" fill="#ff8042" />
      <Bar dataKey="jsonViolations" stackId="a" fill="#a05d56" />
      <Bar dataKey="sqlViolations" stackId="a" fill="#d0743c" />
      <Bar dataKey="botAttacks" stackId="a" fill="#7b6888" />
      <Bar dataKey="botMitigation" stackId="a" fill="#6b486b" />
      <Bar dataKey="authAttacks" stackId="a" fill="#ff0000" />
      <Bar dataKey="clientViolations" stackId="a" fill="#00ff00" />
      <Bar dataKey="fileAttacks" stackId="a" fill="#0000ff" />
      <Bar dataKey="limitViolations" stackId="a" fill="#ff00ff" />
      <Bar dataKey="jsonViolations" stackId="a" fill="#ffff00" />
      <Bar dataKey="graphqlViolations" stackId="a" fill="#00ffff" />
      {/* Add more bars for additional categories */}
    </BarChart>
  );
}

export default HorizontalChart;






