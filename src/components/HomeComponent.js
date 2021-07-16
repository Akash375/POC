import React, { useEffect, useState } from 'react';
import Preview from './PreviewComponent';
import axios from 'axios';

const Home = () =>{
    const [preview, setPreview] = useState(false);
    const baseLoc = 'C:/Users/AK40079799/Desktop/POC/poc/public';
    const list=['/Pic-1.jpg','/Pic-2.jpg','/Pic-3.jpg','/Pic-4.jfif','/Pic-5.jfif',
                '/Pic-6.jfif','/Pic-7.jpg','/Pic-8.jfif','/Pic-9.jfif','/Pic-10.jpg'];

    const updatePreview = () =>{
        setPreview(!preview);
    }

    const sendMail = async () =>{
        const newList = await list.map(val => baseLoc+val);
        let attachments = [];
        for(let i=0;i<newList.length;i++){
            attachments.push({
                filename: list[i].slice(1),
                path: newList[i]
            });
        }
        axios.post('http://localhost:3001/mail',{ emailId: 'abcd@test.com', attachments: attachments })
        .then((res)=>{
            alert("Success: " + res.status);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        preview?
            <Preview images={list} back={updatePreview} />
        :
        <div>
            <div className="col-12 mt-5">
                <button type="button" className="btn btn-primary" onClick={()=>updatePreview()}>
                Images <span className="badge bg-light" style={{color:"#000000"}}>10</span>
                </button>
            </div>
            <div className="col-12 mt-5">
                <button type="button" className="btn btn-outline-dark" onClick={()=>sendMail()} >
                Mail Images
                </button>
            </div>
        </div>
    );
}

export default Home;