import { ChildProcess } from 'child_process';
import React, { Children, Component } from 'react';

export default function Header(props:any) {
    return (
      <>
        <section className="header">
            <h1 className='heading'>{props.children}</h1>
            <img src={require("../pictures/icon.png")} className="icon"/>
        </section>
      </>
    )
}
