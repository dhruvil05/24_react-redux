import * as stylex from '@stylexjs/stylex'

const atr = stylex.create({
    base: {
        width: '20px',
    }
});

const AutoResponseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...stylex.props(atr.base)} viewBox="0 0 24 24" fill="currentColor"><path d="M21 10.063V4C21 3.44772 20.5523 3 20 3H19C17.0214 4.97864 13.3027 6.08728 11 6.61281V17.3872C13.3027 17.9127 17.0214 19.0214 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12 22.5 11.0681 21.8626 10.285 21 10.063ZM5 7C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V7H5Z"></path></svg>
  )
}

export default AutoResponseIcon