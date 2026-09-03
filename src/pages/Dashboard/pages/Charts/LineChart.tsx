import ComponentDiv from "@/components/common/componentDiv"; 
import LineChartOne from "@/components/Charts/LineChart";
export default function LineChart() {
  return (
    <ComponentDiv marginTop={false}>
      <div className="bg-white">
        <LineChartOne />
      </div>
    </ComponentDiv>
  );
}
