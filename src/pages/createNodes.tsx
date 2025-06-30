import RootLayout from '@/app/layout';
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
];

export default function CreateNodes() {


    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState<any[]>([]);
    const [colorMode, setColorMode] = useState<'light' | 'dark' | 'system' | undefined>('system');
    const [newNodeName, setNewNodeName] = useState<string>('');

    const onNodesChange = useCallback(
        (changes:any) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes:any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );
    const onConnect = useCallback(
        (params:any) => setEdges((eds) => addEdge(params, eds)),
        [],
    )

    return (
        <RootLayout>
            <div className='w-full h-[90dvh]'>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>Create Nodes</h1>
                    <input
                        type="text"
                        placeholder="Enter node label"
                        onChange={(e) => {setNewNodeName(e.target.value)}}
                        value={newNodeName}
                        className='border px-2 py-1 mb-4'
                    />
                    <button
                        onClick={() => {
                            const newNode = {
                                id: `${nodes.length + 1}`,
                                data: { label: newNodeName ? newNodeName : `Node ${nodes.length + 1}` },
                                position: { x: Math.random() * 300, y: Math.random() * 300 },
                            };
                            setNodes((prev) => prev.concat(newNode));
                            setNewNodeName(''); 
                        }}
                        className='border px-2 py-1 mb-4 cursor-pointer'
                    >
                        Add Node
                    </button>
                </div>
                
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
            </div>
        </RootLayout>
    )
}
