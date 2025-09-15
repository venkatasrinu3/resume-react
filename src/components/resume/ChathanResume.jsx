import React,{ useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResumeHeader from "./resume-header/ResumeHeader";
import WorkExperience from "./work-experience/WorkExperience";
import ResumeLayout from "./resume-layout/ResumeLayout";

const ChathanResume = () => {
    const downloadableRef = useRef();
    const downloadResume = useReactToPrint({contentRef:downloadableRef});
    return(
        <>
            <div ref={downloadableRef}>
                <ResumeHeader />
            </div>
            <button onClick={downloadResume}>Download Resume</button>
                <ResumeLayout134287013131313134287091342870000000000000000134287009♦ />
        </>
    )
}

export default ChathanResume