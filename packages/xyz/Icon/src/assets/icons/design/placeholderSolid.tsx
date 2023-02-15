import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PlaceholderSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 3H4.5C4.10231 3.00045 3.72105 3.15864 3.43984 3.43984C3.15864 3.72105 3.00045 4.10231 3 4.5V19.5C3.00045 19.8977 3.15864 20.279 3.43984 20.5602C3.72105 20.8414 4.10231 20.9995 4.5 21H19.5C19.8977 20.9995 20.279 20.8414 20.5602 20.5602C20.8414 20.279 20.9995 19.8977 21 19.5V4.5C20.9995 4.10231 20.8414 3.72105 20.5602 3.43984C20.279 3.15864 19.8977 3.00045 19.5 3ZM17.5606 17.5607C17.42 17.7014 17.2292 17.7804 17.0303 17.7804C16.8314 17.7804 16.6407 17.7014 16.5 17.5607L6.43936 7.5C6.36971 7.43036 6.31446 7.34768 6.27677 7.25668C6.23907 7.16569 6.21967 7.06816 6.21966 6.96967C6.21966 6.77075 6.29867 6.57998 6.43932 6.43932C6.50896 6.36967 6.59164 6.31442 6.68263 6.27672C6.77363 6.23903 6.87116 6.21962 6.96965 6.21962C7.16857 6.21961 7.35934 6.29862 7.5 6.43927L17.5606 16.5C17.6303 16.5696 17.6855 16.6523 17.7232 16.7433C17.7609 16.8343 17.7803 16.9319 17.7803 17.0304C17.7803 17.1289 17.7609 17.2264 17.7232 17.3174C17.6855 17.4084 17.6303 17.4911 17.5606 17.5607Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PlaceholderSolid);
export default ForwardRef;