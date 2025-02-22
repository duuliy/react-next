import React from "react";
import {Image} from "antd";
import logo2 from "@/assets/logo2.png";


interface HeaderProps {
    title?:string,
    onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title = 'duuliy1'}) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h1>{title}</h1>

            <Image
                style={{
                    margin: 10,
                    width: 200,
                    height: 200
                }}
                src={logo2}
            />
        </div>
    )
}

export default Header;
