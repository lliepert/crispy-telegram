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
  const [resizing, setResizing] = useState(false)

  const onMouseDown = () => {
    setResizing(true)
  }

  const onMouseUp = () => {
    setResizing(false)
  }

  const onMouseMove = (e) => {
    if (resizing) {
      const x = e.clientX
      setWidth(x - 2)
    }
  }

  return (
    <div className="App">
      <Container onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
          <ColA width={width} />
          <Divider onMouseDown={onMouseDown} />
          <ColB />
      </Container>
    </div>
  );
}

export default App;
