// useLayoutEffect alternative
'use client';

export default function Test() {
    return <>
    <div className="mt-32 h-[4000px]">
    <h1 className="text-[120px] text-white">This is some sample text</h1>
    <div className="relative">
        <div className="absolute h-96 w-96 right-[10px] bg-green-600">.</div>
    </div>
    </div>

    </>
}
