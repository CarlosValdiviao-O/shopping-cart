import React, { useState, useEffect } from "react";

const MoveBar = (props) => {
    const { index, limit, moveIndex } = props;
    let left = false;
    if (index === 0) left = true;
    let right = false;
    if (index === limit * 12) right = true;
    let pages = [];
    let count = index / 12 - 2;
    for (let i = 0; i < 5; i++) {
        if (count > -1 && count < limit + 1)
        pages[i] = count + 1;
        else 
        pages[i] = '';
        count ++;
    }
    let keyAux = 0;
    return (
        <div className="move-bar">
            <button onClick={() => {moveIndex(0)}} disabled={left}>1</button>
            <button onClick={() => {
                (index - 120 > -1) ? moveIndex(index - 120) : moveIndex(0)}} disabled={left}>-10</button>
            <button onClick={() => {
                (index - 600 > -1) ? moveIndex(index - 600) : moveIndex(0)}} disabled={left}>-50</button>    
            <button onClick={() => {moveIndex(index - 12)}} className="left" disabled={left}>Left</button>
            {pages.map((link) => {
                keyAux++;
                return (
                    <button key={keyAux} onClick={() => {moveIndex((link - 1) * 12)}} disabled={(link === '' || link === index / 12 + 1) ? true : false}>{link}</button>
                )
            })}
            <button onClick={() => {moveIndex(index + 12)}} className="right" disabled={right}>Right</button>
            <button onClick={() => {
                (index + 120 < limit * 12) ? moveIndex(index + 120) : moveIndex(limit * 12)}} disabled={right}>+10</button>
            <button onClick={() => {
                (index + 600 < limit * 12) ? moveIndex(index + 600) : moveIndex(limit * 12)}} disabled={right}>+50</button>                
            <button onClick={() => {moveIndex(limit * 12)}} disabled={right}>{limit + 1}</button>
        </div>
    );
};

export default MoveBar;