import React,{useState} from "react";
const Crud=()=>{
    const list=[
        {
            id:1,
            name:"lenovo",
            prize:58000
        }
        ,{
            id:2,
            name:"hp",
            prize:56000
        }
    ]
    const [lists,setlists]=useState(list);
 return(
    <>
    <table>
        {
            list.map((current)=>(
                <tr>
                    <td>{current.name}</td>
                    <td>{current.prize}</td>
                </tr>
            ))
        }
    </table>
    </>
 )
    }
    export default Crud;