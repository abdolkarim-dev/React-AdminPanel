import ComponentDiv from "@/components/common/componentDiv";
import UsersTableNew from "@/components/Table/UserTable";
import ComponentCard from "@/components/common/componentCard";

export default function UsersTable() {
  return (
     
      <ComponentCard title="Base Table">
        <ComponentDiv marginTop={false} >
          <div className="bg-white">
            <UsersTableNew />
          </div>
        </ComponentDiv>
      </ComponentCard>
    
  );
}
