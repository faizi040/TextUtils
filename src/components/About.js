import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({    //A javascript Object
    //     color: 'black',
    //     backgroundColor: 'white',
    // });
    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    // const ToggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //         });
    //         setBtnText("Disable Dark Mode");
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // }



    return (
        <div className="container my-5 py-4 " style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}>   {/*passing thet javascript object to style */}
            <h1 className='mb-4'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}} aria-expanded="false" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}} aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}} aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
