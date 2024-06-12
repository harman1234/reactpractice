import React, {useContext, useEffect} from "react";
import { ThemeContext } from "../App";

export default function Header(){
    const {IsDark, setIsDark, Bgclass, setBgclass} = useContext(ThemeContext);

    useEffect(()=>{IsDark?setBgclass("bg-dark"):setBgclass('bg-light')
    }, [IsDark])


    const _classes = "container-fluid d-flex justify-content-between align-items-center p-3 "+Bgclass
    return<>
        <div className={_classes}>
            <h5 className="text-primary">THE TODOLIST</h5>
            <button id="mybtn"className="btn btn-sm btn-primary" onClick={()=>{setIsDark(!IsDark);}}>Light Mode</button>
        </div>
    </>
};