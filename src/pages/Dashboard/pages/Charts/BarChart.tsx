import ComponentDiv from "@/components/common/componentDiv"; 
import BarChartOne from "@/components/Charts/BarChart";
export default function BarChart() {
  return (
    <ComponentDiv marginTop={false}>
      <div className="bg-white">
        <BarChartOne />
      </div>
    </ComponentDiv>
  );
}
