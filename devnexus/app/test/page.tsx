'use client'
type Props = {

}

export default function test({}: Props) {

    return <>
    <style jsx>{`
        .mask {
            position: fixed;
            inset: 50px;
            background: red;
            overflow: hidden;
            mask-image: linear-gradient(transparent,rgba(0,0,0,1))
        }

        .nomask {
            position: fixed;
            inset: 50px;
            overflow: hidden;
        }

        .content {
            position: absolute;
            inset: 0;
            overflow-y: scroll;

        }
    
    
    `}</style>
    <div className="overflow-auto relative">
        <div className="mask">
            <div className="content">
                <h1 className="">Test</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1 className="h-[1000px]">aaaa</h1>

            </div>
        </div>
        <div className="nomask">
            <div className="content">
                <h1 className="">Test</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1><h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1 className="h-[1000px]">aaaa</h1>
            </div>
        </div>
    </div>
    
    <div className="h-[1000px]"></div>
    </>
}