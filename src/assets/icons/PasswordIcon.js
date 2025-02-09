import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PasswordIcon(props) {
  return (
    <Svg
      width={16}
      height={21}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 16a2 2 0 100-4 2 2 0 000 4zm6-9a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V9a2 2 0 012-2h1V5a5 5 0 1110 0v2h1zM8 2a3 3 0 00-3 3v2h6V5a3 3 0 00-3-3z"
        fill="#000"
      />
    </Svg>
  )
}

export default PasswordIcon
