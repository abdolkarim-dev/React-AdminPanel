import ComponentDiv from "@/components/common/componentDiv";
import UsersTableNew from "@/components/Table/UserTable";
import ComponentCard from "@/components/common/componentCard";

export default function UsersTable() {
  return (
    <div className="p-12">
      <ComponentCard title="Base Table">
        <ComponentDiv className="!p-0">
          <div className="bg-white">
            <UsersTableNew />
          </div>
        </ComponentDiv>
      </ComponentCard>
    </div>
  );
}
