// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 1. 💯 Create a custom component
// 2. 💯 accept a size prop to encapsulate styling

function Box(props) {
  const {style, size, ...otherProps} = props
  const className = size ? `box box--${size}` : 'box'
  return (
    <div
      className={className}
      style={{textTransform: 'uppercase', ...style}} //avoid overwriting by merging the rest of the styles
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box
    size="small"
    style={{
      backgroundColor: 'lightblue',
    }}
  >
    small lightblue box
  </Box>
)

const mediumBox = (
  <Box
    size="medium"
    style={{
      backgroundColor: 'pink',
    }}
  >
    medium pink box
  </Box>
)
const largeBox = (
  <Box
    size="large"
    style={{
      backgroundColor: 'orange',
    }}
  >
    large orange box
  </Box>
)

function App() {
  return (
    <>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>classless</Box>
    </>
  )
}

export default App
