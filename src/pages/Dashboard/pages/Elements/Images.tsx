 import ResponsiveImage from "@/components/ui/images/ResponsiveImage";
import TwoColumnImageGrid from "@/components/ui/images/TwoColumnImageGrid";
import ThreeColumnImageGrid from "@/components/ui/images/ThreeColumnImageGrid";
import ComponentCard from "@/components/common/ComponentCard";
 import ComponentDiv from "@/components/common/componentDiv";


export default function Images() {
  return (
    <ComponentDiv> 
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Responsive image">
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title="Image in 2 Grid">
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title="Image in 3 Grid">
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </ComponentDiv>
  );
}
