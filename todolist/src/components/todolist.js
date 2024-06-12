import React,{useState, useEffect} from "react";

const [AddNew , setAddNew] = useState(false);
    const [Snotrack, setSnotrack] = useState(0);
export default function MyList(){

    
    
    useEffect(()=>{
        console.log("g");
    },[AddNew]);
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
    const Table = document.getElementById("mytable").getElementsByTagName('tbody')[0];
    const newrow = Table.insertRow();
    const row1 = newrow.insertCell().innerHTML = 3;
    const row2 = newrow.insertCell();
    const row3 = newrow.insertCell().innerHTML = 3;
    addInput(row2);
    

    
};

function addInput(parent){
    const input = document.createElement('input');
    input.type = 'text';
    parent.appendChild(input);
    input.focus();
    input.onblur = function(){_onblur(parent, this)};    
};

function _onblur(parent, myself){
    var j = myself.value;
    parent.removeChild(myself);
    parent.innerHTML = j; 
};

