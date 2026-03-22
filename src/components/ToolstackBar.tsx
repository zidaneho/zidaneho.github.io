import React from "react";
import StackIcon from "tech-stack-icons";

export interface ToolstackBarProps {
  tools: string[];
}
const ToolstackBar: React.FC<ToolstackBarProps> = ({ tools }) => {
  return (
    <div className="flex flex-row flex-wrap gap-3 mt-4 mb-2">
      {tools.map((tool) => (
        <StackIcon className="w-12" name={tool} variant="dark"/>
      ))}
    </div>
  );
};

export default ToolstackBar;
