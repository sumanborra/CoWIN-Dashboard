// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {lastWeek} = props
  console.log(lastWeek)
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return `${number.toString()}k`
  }
  return (
    <div>
      <h1 className="heading-bar-chart">Vaccination Coverage</h1>
      <ResponsiveContainer width={1000} height={300}>
        <BarChart
          data={lastWeek}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: '#cbd5e1',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: '#cbd5e1',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 50,
            }}
          />
          <Bar dataKey="dose_1" name="dose1" fill="#5a8dee" barSize="6%" />
          <Bar dataKey="dose_2" name="dose2" fill="#f54394" barSize="6%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationCoverage
