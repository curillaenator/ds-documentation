import { useState, useEffect } from 'react';

type UseImageLoaderProps = (src: string) => {
  dataImg: string;
  error: boolean;
};

export const useImageLoader: UseImageLoaderProps = (src) => {
  const [dataUrl, setDataUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(true);

  useEffect(() => {
    if (!src) {
      setError(true);
      setDataUrl('');
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
