import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.244 1.329C6.003.157 8.312 1.23 8.654 3.205h3.43a2.865 2.865 0 012.864 2.864.781.781 0 01-1.563 0c0-.719-.582-1.302-1.302-1.302H8.698v13.021h3.385c.72 0 1.302-.583 1.302-1.302a.781.781 0 011.563 0 2.865 2.865 0 01-2.865 2.865H8.655c-.343 1.973-2.652 3.048-4.41 1.876l-2.084-1.39a2.864 2.864 0 01-1.276-2.383V5.101c0-.958.48-1.852 1.276-2.383l2.083-1.39zm11.454 12.307a.781.781 0 010-1.105l.75-.75h-5.406a.781.781 0 110-1.562h5.405l-.75-.75a.781.781 0 111.105-1.104L18.15 9.71a1.823 1.823 0 010 2.578l-1.347 1.347a.781.781 0 01-1.104 0z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
