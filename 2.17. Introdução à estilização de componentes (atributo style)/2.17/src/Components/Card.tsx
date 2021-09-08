import { PropsWithChildren, ReactNode } from "react"
import { title } from 'process';
import React from "react";

type CardProps = PropsWithChildren <{
  title: string,
  //children: ReactNode
}>

function Card ( props: CardProps ) {
  return <div 
  style={{
    background: 'rgba(0,0,0,.25)',
    borderRadius: 8,
    padding: '16%',
    backgroundColor: 'orange'
}}
>
  <div>{props.title}</div>
    { props.children }
  </div>
}


export default Card