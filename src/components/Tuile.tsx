import * as React from "react";
import "./Tuile.css";

export enum Status {
    published = "publié",
    signed = "signé"
}

interface Props {
    title: string;
    subTitle?: string;
    image?: string;
    status: Status;
}

const StatusThumbnail: React.FC<{status: Status}> = ({status}) => {
    return <div style={{color: "#35b990", textTransform: "capitalize"}}>
        [{status}]
    </div>
}

export const TuileSeparator: React.FC = () => <hr style={{
    width: "100%", 
    backgroundColor: "#dddddd", 
    borderWidth: "0", 
    height: "1px",
    margin: "0"
}}/>

export const SmallTitle: React.FC<{title: string}> = ({title}) => <div style={{
    color: "#dddddd",
    fontSize: "0.7em"
}}>{title}</div>

export const Tuile: React.FC<Props> = ({ title, image, status, subTitle, children }) => {
    return <div className="tuile">
        {image && <img
            style={{ height: "150px" }}
            src={image}
        />}
        <div className="tuile_title tuile--content">{title}</div>
        { subTitle && <div className="tuile--content" style={{fontSize: "0.8em", color: "#333333", marginTop: "10px", marginBottom: "10px"}}>
            {subTitle}
        </div>}
        <div
         className="tuile--content" style={{marginTop: "10px", marginBottom: "10px"}}>
            <StatusThumbnail status={status} />
        </div>
        <div className="tuile_cross">✕</div>
        <TuileSeparator/>
        <div style={{
            overflowY: "auto", 
            flexGrow: 1
        }}>
            {children}
        </div>
    </div>
}