import React from "react";
import { Pressable } from "react-native";

import { Path, Svg } from "react-native-svg";

const AddFavourite = ({onClick,color}) => {
  return (
   // <React.Fragment>
      <Pressable  onPress={onClick}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill={color}
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <Path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
        />
      </Svg>
      </Pressable>
  //  </React.Fragment>
  );
};

export default AddFavourite;