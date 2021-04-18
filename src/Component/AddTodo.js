import React from 'react'
import { useState } from 'react';


export default function AddTodo({addTodo}) {
   const[title,setTitle]=useState("");
   const[desc,setDesc]=useState("");
    const submit=(e)=>{
            e.preventDefault();
        if (!title||!desc) {
            alert("Please enter some details!");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }      
    }
   
   
   
    return (
        <div className="container my-3 ">
            <h3 className="text-info">Add a Todo</h3>
       
        <form onSubmit={submit}>
            <div className="form-group mb-3">
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange ={(e)=>setTitle(e.target.value)}className="form-control" id="title" aria-describedby="title" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="desc">Description </label>
                <input type="text" value={desc} onChange ={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>  
        </div>
    )
}
