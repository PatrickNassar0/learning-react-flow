import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useState } from 'react';
import LabelDiscriptionNode from './nodes/labelDiscriptionNode';



const initialNodes = [
  {
    id: '1',
    type: 'default', 
    position: { x: 100, y: 100 },
    data: {
      label: 'default Node',
    },
  },
  {
    id: '2',
    type: 'labelAndDiscription', 
    position: { x: 100, y: 100 },
    data: {
      label: 'Custom Node 1',
      description: 'This is a styled custom node 1',
    },
  },
  {
    id: '3',
    type: 'labelAndDiscription', 
    position: { x: 200, y: 200 },
    data: {
      label: 'Custom Node 2',
      description: 'This is a styled custom node 2',
    },
  },
];

const initialEdges = [
  { id: '2-3', source: '2', target: '3', label: 'to the', type: 'step', animated: true },
];

const nodeTypes = {
  labelAndDiscription: LabelDiscriptionNode,
};

export default function CustomeFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [colorMode, setColorMode] = useState<'light' | 'dark' | 'system' | undefined>('system');

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  )

  return (
    <>
      <div className='space-x-2'>
        <span>Theam:</span>
        <button onClick={() => setColorMode('dark')} className={`cursor-pointer ${colorMode === 'dark' ? 'underline' : ''}`}>
          Dark
        </button>

        <button onClick={() => setColorMode('light')} className={`cursor-pointer ${colorMode === 'light' ? 'underline' : ''}`}>
          Light
        </button>

        <button onClick={() => setColorMode('system')} className={`cursor-pointer ${colorMode === 'system' ? 'underline' : ''}`}>
          System
        </button>
      </div>
      <ReactFlow
        colorMode={colorMode}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </>
  )
}
