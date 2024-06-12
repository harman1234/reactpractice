import React from "react";

export default function MyList(){

    const m_array = ['learn react', 'practice react', 'get advance in react']
    

    return<>
        <div className="container">
            <div className="container-fluid p-3 d-flex justify-content-between align-items-center">
                <h5 className="text-secondary">Your list</h5>
                <button className="btn btn-outline-primary">+</button>
            </div>
            <div className="container">
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th style={{width:"33.33%"}}>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {m_array.map((row,index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td className="rowvalue" onDoubleClick={AddTable}>{row}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary px-3 mx-1">Done</button>
                                    <button className="btn btn-sm btn-outline-danger px-3 mx-1">Delete</button>
                                </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </>
};



function AddTable(event){
    var j = event.target.innerHTML
    const Target = event.target
    const Myinput = document.createElement('input');
    Myinput.type = 'text'
    Myinput.value = j;
    Target.innerHTML = '';
    Target.appendChild(Myinput);
    Myinput.focus();
    Myinput.onblur = function (){
        j = this.value;
        Target.removeChild(Myinput);
        Target.innerHTML=j;
    }
    
    
};