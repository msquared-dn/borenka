import { useState } from "react";

export const useProgressiveImage = (src: any) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  const img = new Image();
  img.src = src;
  setSourceLoaded(src);
  return sourceLoaded;
};
