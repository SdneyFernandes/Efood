import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.Rosa};
  color: ${cores.RosaClaro};
  font-size: ${(props) => (props.size === 'big' ? '12px' : '10px')};
  padding: ${(props) => (props.size === 'small' ? '8px 16px' : '4px 6px')};
`
