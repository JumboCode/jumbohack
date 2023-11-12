"use client";

import typeStyles from './typing.module.css';
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';

export default function Typing() {
    return (
        <div className={typeStyles.heading}>
            <h1>Jumbo<span id='typed'>{type()}</span></h1>
        </div>
    )
}


function type(){
    useEffect(() =>{
        var app = document.getElementById('typed');

        var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
        });

        typewriter
        .pauseFor(250)
        .typeString('<span style ="color: #C6302C;">Hack</span>')
        .pauseFor(800)
        .deleteChars(10)
        .typeString('<span style ="color: #C6302C;">Code</span>')
        .pauseFor(800)
        .deleteChars(10)
        .typeString('<span style ="color: #C6302C;">Love</span>')
        .pauseFor(300)
        .start();
    });
    
}


