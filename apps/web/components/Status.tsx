"use client"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faLaptopCode,
    faRunning,
    faRocket,
} from "@fortawesome/free-solid-svg-icons";

const iconMapping: any = {
    "fa-bed": faBed,
    "fa-laptop-code": faLaptopCode,
    "fa-person-running": faRunning,
    "fa-ghost": faRocket,
};

const StatusBar: React.FC = () => {
    return (
        <div className="flex flex-row justify-center border-solid border-4 border-gray-300 rounded-lg p-2 fixed bg-slate-300 right-10 top-10">
            <div>
                <Timer /> &nbsp;
            </div>
            <div>
                <FontAwesomeIcon icon={iconMapping[Status().color]} /> &nbsp;
                {Status().title}
            </div>
        </div>
    );
};

function Timer(): string {
    const [time, setTime] = useState("");
    useEffect(() => {
        setInterval(() => {
            const dateObject = new Date();
            const hour = dateObject.getHours();
            const minute = String(dateObject.getMinutes()).length === 1 ? "0" + dateObject.getMinutes() : dateObject.getMinutes();
            const second = String(dateObject.getSeconds()).length === 1 ? "0" + dateObject.getSeconds() : dateObject.getSeconds();
            const currentTime = hour + ":" + minute + ":" + second;
            setTime(currentTime);
        }, 1000);
    }, []);
    return time;
}

interface Status {
    title: string,
    color: string
}

export function Status(): Status {
    const currDate = new Date();
    if (currDate.getHours() >= 7 && currDate.getHours() < 9) return { title: "Warming Up", color: "fa-person-running" };
    else if (currDate.getHours() >= 9 && currDate.getHours() < 18) return { title: "Being Busy", color: "fa-laptop-code" };
    else if (currDate.getHours() >= 18 && currDate.getHours() < 22) return { title: "Chilling", color: "fa-ghost" };
    else return { title: "Dozing", color: "fa-bed" };
}

export default StatusBar;