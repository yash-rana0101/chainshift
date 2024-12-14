// import React from "react";

import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-16 flex-grow justify-center items-center mt-80  text-center">
      <h1 className="text-xl md:text-3xl">PAGE NOT FOUND !!</h1>

      <Button>GO BACK</Button>
    </div>
  );
}
