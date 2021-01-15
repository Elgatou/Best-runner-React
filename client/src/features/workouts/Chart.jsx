import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useSelector } from 'react-redux';
import { selectChartData } from './selectors';

export function Chart(props) {
  const chartData = useSelector(selectChartData);

  return (
    <LineChart width={1000} height={300} data={chartData} margin={{ top: 5, right: 110, bottom: 5, left: 0 }}>
      <Line type='monotone' dataKey='km' stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' />
      <XAxis dataKey='name' />
      <YAxis />
    </LineChart>
  );
}
