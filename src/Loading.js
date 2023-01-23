import React from 'react'
import { Watch } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex  justify-center items-center h-screen w-full">
      <Watch

        height="150"
        width="150"
        radius="48"
        color="#C30047"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />

    </div>
  );
}

export default Loading