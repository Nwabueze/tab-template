import React from "react";
import { useParams } from "react-router-dom"

export default function ParamsDom() {

    
    const { id } = useParams();
    //console.log(id)
    //const id = props.id;
    return (
        <div>
            <h1>hello {id}</h1>
        </div>
    )
}