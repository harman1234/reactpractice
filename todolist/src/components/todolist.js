import React,{useState, useEffect} from "react";

export default function MyList(){
    const [NameArray, setNameArray] = useState(["react","learnReact","expertise in it"]);
    const [TableRows, setTableRows] = useState(null);
    const [Count,setCount] = useState(0);

    useEffect(()=>{
       const k = NameArray.map((_name,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
                <td onDoubleClick={(event)=>{onDBC(event)}}>{_name}</td>
                <td><button className="btn btn-sm btn-primary">Done</button></td>
            </tr>
        
        ));

        setTableRows(k);
    },[Count]);

    return<>
        <div className="container">
            <div className="container-fluid p-3 d-flex justify-content-between align-items-center">
                <h5 className="text-secondary">Your list</h5>
                <button className="btn btn-outline-primary">+</button>
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
                        {TableRows}
                    </tbody>
                </table>
            </div>
        </div>
    </>
};

function onDBC(event){
    var Target = event.target;
    var data = Target.innerHTML;
    Target.innerHTML = ''
    var mi = createInput(data);   
    Target.appendChild(mi);
    mi.focus();

};

function createInput(_value){
    var _input = document.createElement('input');
    _input.value = _value;
    _input.type = 'text';
    _input.classList.add('form-control','input-sm');
    _input.onblur = function(){removeInput(_input, this)};
    return(_input);
    _input.addEventListener("keydown", function(event){alert(event.key)});
};

function removeInput(_input ,_this){
    var pt = _this.parentNode;
        var vl = _input.value;
        pt.removeChild(_this);
        pt.innerHTML = vl;
}