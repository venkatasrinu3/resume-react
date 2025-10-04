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
                <ResumeLayout />
            </div>
            <button onClick={downloadResume}>Download Resume</button>
        </>
    )
}

export default ChathanResume