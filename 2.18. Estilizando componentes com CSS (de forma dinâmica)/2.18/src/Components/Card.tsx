import { PropsWithChildren, ReactNode } from "react";
import { title } from 'process';
import React from "react";
import './Card.css';

type CardProps = PropsWithChildren <{
  title: string,
  align?: 'center' | 'left' | 'right',
  //children: ReactNode
}>

function Card ( props: CardProps ) {
  return <div className={`Card ${props.align || 'center'}`}>
  <div>{props.title}</div>
    { props.children }
  </div>
}


export default Card