import { PropsWithChildren, ReactNode } from "react";
import { title } from 'process';
import React from "react";
import * as C from './Card.styles';

type CardProps = PropsWithChildren <{
  title: string,
  align?: 'center' | 'left' | 'right',
  //children: ReactNode
}>

function Card ( props: CardProps ) {
  return <C.Wrapper align={props.align || 'left'}>
  <C.Title>{props.title}</C.Title>
    { props.children }
  </C.Wrapper>
}


export default Card