import { Handle, Position } from "@xyflow/react";

export type LabelDiscriptionNodeType = {
    data: { label: string, description: string }
}

export default function LabelDiscriptionNode({ data }: LabelDiscriptionNodeType) {
    return (
        <div className="p-3 border rounded shadow w-48 bg-white/10 backdrop-blur-md">
            <Handle type="target" position={Position.Top} />
            <h3 className="font-bold text-lg">{data.label}</h3>
            <p className="text-sm">{data.description}</p>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}
