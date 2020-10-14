import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
`

const Divider = styled.div`
  cursor: col-resize;
  width: 5px;
  background-color: grey;
  :hover: {
    background-color: black;
  }
`

const Column = styled.div`
  flex: ${props => props.width ? "none": "1"};
  border-radius: 3px;
  height: 100%;
  width: ${props => props.width ? `${props.width - 20}px` : "none"};
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 5px 10px;
`

const ColA = props => {
  return (
    <Column {...props}>hi. this is the first column. add all my stuff here.</Column>
  )
}

const ColB = props => {
  return (
    <Column {...props}>hi. this is the second column. add all my stuff here.</Column>
  )
}

const App = () => {
  const initialWidth = 100;
  const [width, setWidth] = useState(initialWidth)
  const [resizing, setResizing] = useState(null)  // note: stores the initial clientX for code simplicity

  const dividerOnMouseDown = e => {
    console.log("mouse down", e.clientX)
    setResizing(e.clientX)
  }

  const dividerOnMouseUp = () => {
    console.log("mouse up")
    setResizing(null)
  }

  const dividerOnMouseMove = (e) => {
    if (resizing !== null) {
      const x = e.clientX
      console.log(e)
      // console.log(e.clientX, e.pageX, e.screenX)
      console.log("x", x, "difference", x - resizing)
      setWidth(x - 3)
      // setWidth(width => {const a = width + (x - resizing); console.log("setting", a); return a})
    }
  }

  return (
    <div className="App">
      <Container onMouseUp={dividerOnMouseUp} onMouseMove={dividerOnMouseMove}>
          <ColA width={width} />
          <Divider onMouseDown={dividerOnMouseDown} />
          <ColB />
      </Container>
    </div>
  );
}

export default App;
