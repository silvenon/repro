import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { css } from 'styled-components'

export default function App() {
  return (
    <h1
      css={css`
        background: green;
      `}
    >
      Hello world!
    </h1>
  )
}
