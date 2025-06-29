import RootLayout from '@/app/layout';
import { useState } from 'react';

export default function index() {
    const [answer, setAnswer] = useState('');

    return (
        <RootLayout>
            <div className="w-full h-screen p-6">
                <h1 className="text-2xl font-bold mb-4">I am learning React Flow</h1>

                <form>
                    <label>What are you doing here?</label>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="border px-2 py-1 mx-5"
                    />
                </form>

                <p className="mt-4 text-lg">
                    <span className="text-[30rem] font-extrabold text-red-700 break-words">{answer}</span>
                </p>
            </div>
        </RootLayout>
    );
}
