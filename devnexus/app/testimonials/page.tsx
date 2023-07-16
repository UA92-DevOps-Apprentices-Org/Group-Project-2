'use client';
export default function Testimonials() {
    return <>
    <div className="mt-32 px-96 w-full border-red-500 outline-4">
        <h1 style={{
                "textShadow": "0px 4px 15px 0px rgba(0, 0, 0, 0.80)",
                "fontFamily": "Roboto",
                "fontSize": "80px",
                "fontStyle": "normal",
                "fontWeight": "800",
                "lineHeight": "81.687%",
                "letterSpacing": "-1.44px",
                "background": "linear-gradient(0deg, #D5B0F5 0%, #FFF 100%)",
                "backgroundClip": "text",
                "WebkitBackgroundClip": "text",
                "WebkitTextFillColor": "transparent"
        }}>Testimonials</h1>
        <p style={{
                "color": "#FFF",
                "fontFamily": "Roboto",
                "fontSize": "36px",
                "fontStyle": "normal",
                "fontWeight": "800",
                "lineHeight": "104.688%",
                "letterSpacing": "-0.54px"
                }}>
            Find out from our previous customers why DevNexus may be right for you
        </p>
        <div style={{
                "borderRadius": "33px",
                "border": "2px solid #6C6C6C",
                "background": "linear-gradient(0deg, rgba(46, 44, 47, 0.69) 0%, rgba(46, 44, 47, 0.69) 100%), linear-gradient(180deg, rgba(171, 106, 172, 0.50) 0%, rgba(15, 14, 15, 0.50) 100%), url(<path-to-image>), lightgray 0% 0% / 100px 100px repeat",
                "boxShadow": "0px 4px 23px 0px rgba(255, 255, 255, 0.15)",
                "backdropFilter": "blur(11px)"
                }}>
            test

        </div>
        <div className="grid grid-cols-2">
                <div>
                    <h1>Ex 1</h1>
                    <p>asdfasdfasdfasdfaasdfa</p>
                </div>
                <div>
                    <h1>Ex 2</h1>
                    <p>asdfasdfasdfasdfasdfasdfasdfasdf</p>
                </div>
        </div>
    </div>
    </>
}