import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const mobile = breakpoints.smallerOrEqual('sm').value
const tablet = breakpoints.between('sm', 'md').value
const desktop = breakpoints.greaterOrEqual('md').value
export const screenSize = {mobile, tablet, desktop}