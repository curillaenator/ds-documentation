import { useState, useEffect } from "react";

type UseImageLoaderProps = (src: string) => {
  dataImg: string;
  error: boolean;
};

/**
 * Хук обеспечивающий загрузку изображения, через new Image();
 *
 * @param src - путь до изображения
 */
export const useImageLoader: UseImageLoaderProps = (src) => {
  const [dataUrl, setDataUrl] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!src) {
      setError(false);
      setDataUrl("");
      return;
    }

    const image = new Image();

    image.src = src;

    image.onload = (): void => {
      setError(false);
      setDataUrl(src);
    };

    image.onerror = (): void => {
      setError(true);
    };
  }, [src]);

  return {
    dataImg: dataUrl,
    error,
  };
};
