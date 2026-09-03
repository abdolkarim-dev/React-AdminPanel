import ComponentDiv from "@/components/common/componentDiv"; 
import AreaChartOne from "@/components/Charts/AreaChart";
export default function AreaChart() {
  return (
    <ComponentDiv marginTop={false}>
      <div className="bg-white">
        <AreaChartOne />
      </div>
    </ComponentDiv>
  );
}
