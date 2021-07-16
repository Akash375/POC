import React, { useState } from 'react';
import Pics from '../pics/Pic-1.jpg';

const Preview = (props) =>{
    const [index, setIndex] = useState(0);

    const Update = (type)=>{
        if(type===1){
            setIndex((index+1)%10);
        }
        else{
            if(index===0)
                setIndex(9);
            else
                setIndex(index-1);
        }
    }

    return(
        <div className="container">
            <i className="fa fa-arrow-left" onClick={()=>props.back()} style={{cursor:"pointer"}}> Back</i>
            <div className="row mt-3 justify-content-center">
                <img src={props.images[index]} style={{width:"700px", height:"500px"}}/>
            </div>
            <div className="row mt-2 justify-content-center">
                <div className="col-6" onClick={()=>Update(0)}>
                    <i className="fa fa-lg fa-arrow-left" style={{cursor:"pointer"}}></i>
                </div>
                <div className="col-6" onClick={()=>Update(1)}>
                    <i className="fa fa-lg fa-arrow-right" style={{cursor:"pointer"}}></i>
                </div>
            </div>
        </div>
    );
}

export default Preview;