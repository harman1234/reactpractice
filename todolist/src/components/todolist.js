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
                        <tr>
                            <td>1</td>
                            <td>learn React</td>
                            <td>
                                <button className="btn btn-sm btn-primary px-3 mx-1">Done</button>
                                <button className="btn btn-sm btn-outline-danger px-3 mx-1">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
};