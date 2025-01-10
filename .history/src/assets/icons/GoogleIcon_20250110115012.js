import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function GoogleIcon(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_4034_10479)">
        <Path
          d="M8.861.79a11.865 11.865 0 00.812 22.668c1.987.513 4.07.536 6.067.066A10.712 10.712 0 0020.597 21a10.77 10.77 0 003-4.924c.58-2.048.683-4.202.301-6.296h-11.16v4.63h6.464a5.573 5.573 0 01-2.374 3.66 6.786 6.786 0 01-2.612 1.03 7.743 7.743 0 01-2.831 0 6.975 6.975 0 01-2.635-1.149 7.369 7.369 0 01-2.718-3.64 7.181 7.181 0 010-4.62 7.36 7.36 0 011.72-2.795 6.97 6.97 0 017.023-1.833 6.43 6.43 0 012.557 1.5c.729-.725 1.456-1.452 2.183-2.181.375-.392.784-.765 1.153-1.166A11.475 11.475 0 0016.85.86 12 12 0 008.861.789z"
          fill="#fff"
        />
        <Path
          d="M8.86.79a12 12 0 017.99.069 11.475 11.475 0 013.816 2.366c-.375.401-.77.776-1.153 1.166-.728.726-1.455 1.45-2.181 2.171a6.432 6.432 0 00-2.558-1.5A6.97 6.97 0 007.752 6.89a7.36 7.36 0 00-1.722 2.795L2.143 6.675A11.912 11.912 0 018.86.789z"
          fill="#E33629"
        />
        <Path
          d="M1.111 9.656a11.813 11.813 0 011.032-2.981L6.03 9.692a7.181 7.181 0 000 4.618c-1.295 1-2.591 2.005-3.887 3.015A11.874 11.874 0 011.11 9.656z"
          fill="#F8BD00"
        />
        <Path
          d="M12.738 9.778h11.16a13.931 13.931 0 01-.302 6.297 10.77 10.77 0 01-3 4.923c-1.254-.978-2.514-1.95-3.768-2.928a5.573 5.573 0 002.373-3.664h-6.463c-.002-1.541 0-3.085 0-4.628z"
          fill="#587DBD"
        />
        <Path
          d="M2.14 17.325c1.297-1 2.592-2.005 3.887-3.015a7.369 7.369 0 002.723 3.641c.791.56 1.69.948 2.64 1.14a7.744 7.744 0 002.831 0 6.788 6.788 0 002.612-1.03c1.255.978 2.515 1.95 3.769 2.928a10.712 10.712 0 01-4.856 2.525c-1.998.47-4.08.448-6.068-.065a11.813 11.813 0 01-4.312-2.173 11.944 11.944 0 01-3.225-3.95z"
          fill="#319F43"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4034_10479">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
