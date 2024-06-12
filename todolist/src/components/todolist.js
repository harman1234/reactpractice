import React,{useState, useEffect} from "react";

export default function MyList(){

    const [Activity , setActivity] = useState([]);
    const [Snotrack, setSnotrack] = useState(0);
    
    useEffect(()=>{

    },[Snotrack]);
    return<>
        <div className="container">
            <div className="container-fluid p-3 d-flex justify-content-between align-items-center">
                <h5 className="text-secondary">Your list</h5>
                <button className="btn btn-outline-primary" onClick={()=>{addRow();}}>+</button>
            </div>
            <div className="container">
                <table id="mytable" className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th style={{width:"33.33%"}}>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </>
};

function addRow(){
    const Table = document.getElementById().getElementsByTagName('tbody')[0];
    
};