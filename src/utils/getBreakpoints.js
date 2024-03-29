import { css } from 'styled-components'
import { theme } from '../theme/theme'

const { breakpoints } = theme

export default function getBreakpoints(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints)

  return breakpointsNames.map(breakpointName => css`
    @media screen and (min-width: ${ breakpoints[breakpointName] }px) {
      ${ cssByBreakpoints[breakpointName] }
    }
  `)
}
