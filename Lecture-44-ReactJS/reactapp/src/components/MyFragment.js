import React from "react";

const MyFragment = (props) => {

    let children = props.children

  return (
    children.map(c => c)
  );
};

export default MyFragment;
