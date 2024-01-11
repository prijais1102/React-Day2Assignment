import React from 'react'
import loginContext from './Context';
import { useContext } from 'react';

export default function Welcome1() {
    const username  = useContext(loginContext);
  return (
    <div>Welcome {username} !!</div>
  )
}