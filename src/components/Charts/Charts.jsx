import SimpleBarChart from "../SimpleBarChart/SimpleBarChart";
import SimpleLineChart from "../SimpleLineChart/SimpleLineChart";
import SimplePiechart from "../SimplePieChart/SimplePiechart";

const Charts = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl text-purple-600 text-center p-4">
        Simple Line Chart
      </h2>
      <SimpleLineChart></SimpleLineChart>
      <h2 className="text-4xl text-purple-600 text-center p-4">
        Simple Bar Chart
      </h2>
      <SimpleBarChart></SimpleBarChart>
      <h2 className="text-4xl text-purple-600 text-center p-4">
        Simple Pie Chart
      </h2>
      <SimplePiechart></SimplePiechart>
    </div>
  );
};

export default Charts;
