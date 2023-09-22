import {Section} from "../App";
import React from "react";

export const ProjectSection = (props: any) => {
    return (
        <div id={Section.PROJECT} className="projectSectionContainer">
            <div style={{height: '20rem', border: '1px solid green'}}>
                Project One

            </div>
            <div style={{height: '20rem', border: '1px solid green'}}>
                Project Two

            </div>
            <div style={{height: '20rem', border: '1px solid green'}}>
                Project Three

            </div>
        </div>
    )
}