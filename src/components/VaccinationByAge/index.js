// Write your code here
// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'
const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div>
      <h1 className="heading-full-pie-chart">Vaccination by Age</h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            innerRadius={0}
            outerRadius={100}
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            horizontalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByAge
