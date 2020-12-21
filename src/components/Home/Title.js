import React from 'react'
import styled from 'styled-components'

export default function Title({titleStart, titleEnd}) {
  return (
    <StyledTitle>
      <h4>
        <span className='start'>{titleStart}</span>
        <span className='end'>{titleEnd}</span>
      </h4>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
text-transform: uppercase;
text-align: center;
font-size: 2rem;
.start {
  color: var(--mainBlack);
}
.end {
  color: var(--primaryColor)
}
@media (max-width: 768px) {
  .start,
  .end {
    display: block;
  }
}
`