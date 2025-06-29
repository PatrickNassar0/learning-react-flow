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

const initialNodes = [
    {
        id: '1',
        position: { x: 50, y: 50 },
        data: { label: 'Node 1' },
      },
      {
        id: '2',
        position: { x: 200, y: 50 },
        data: { label: 'Node 2' },
      },
      {
        id: '3',
        position: { x: 350, y: 50 },
        data: { label: 'Node 3' },
      },
      {
        id: '4',
        position: { x: 500, y: 50 },
        data: { label: 'Node 4' },
      },
      {
        id: '5',
        position: { x: 650, y: 50 },
        data: { label: 'Node 5' },
      },
      {
        id: '6',
        position: { x: 50, y: 200 },
        data: { label: 'Node 6' },
      },
      {
        id: '7',
        position: { x: 200, y: 200 },
        data: { label: 'Node 7' },
      },
      {
        id: '8',
        position: { x: 350, y: 200 },
        data: { label: 'Node 8' },
      },
      {
        id: '9',
        position: { x: 500, y: 200 },
        data: { label: 'Node 9' },
      },
      {
        id: '10',
        position: { x: 650, y: 200 },
        data: { label: 'Node 10' },
      },
];

const initialEdges = [
    { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
];

export default function Flow() {
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
                fitView
            >
                <Background />
                <Controls />
            </ReactFlow>
        </>
    )
}
