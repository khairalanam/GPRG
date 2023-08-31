import React from "react";
import { FormData } from "@/types/NormalTypes"; // Import the correct types
import { RoleState } from "@/types/ReducerTypes";

const RolesInputMarkdown: React.FC<{ roles: RoleState[] }> = ({ roles }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {roles.map((role) => (
        <span
          key={role.id}
          className="inline-block bg-indigo-600 text-white rounded-md px-2 py-1"
        >
          {role.value}
        </span>
      ))}
    </div>
  );
};

export default RolesInputMarkdown;
