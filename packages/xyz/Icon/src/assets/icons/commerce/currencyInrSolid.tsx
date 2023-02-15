import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyInrSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.4999 7.5C19.4999 7.69891 19.4209 7.88967 19.2803 8.03032C19.1396 8.17097 18.9488 8.24999 18.7499 8.25H15.736C15.7443 8.3741 15.7499 8.49886 15.7499 8.625C15.7482 10.1163 15.1551 11.5461 14.1005 12.6006C13.046 13.6551 11.6163 14.2483 10.1249 14.25H8.68984L15.5045 20.445C15.6517 20.5788 15.7397 20.7656 15.7491 20.9643C15.7586 21.163 15.6887 21.3574 15.5549 21.5045C15.4211 21.6517 15.2343 21.7397 15.0356 21.7492C14.8369 21.7587 14.6426 21.6888 14.4954 21.555L6.24539 14.055C6.13338 13.9532 6.05481 13.8198 6.02 13.6725C5.9852 13.5252 5.99579 13.3708 6.05038 13.2296C6.10496 13.0884 6.201 12.967 6.32586 12.8814C6.45072 12.7958 6.59855 12.75 6.74993 12.75H10.1249C11.2186 12.7488 12.2671 12.3138 13.0404 11.5405C13.8137 10.7671 14.2487 9.71864 14.2499 8.625C14.2499 8.49852 14.2433 8.3736 14.2321 8.25H6.74993C6.55102 8.25 6.36026 8.17098 6.2196 8.03033C6.07895 7.88968 5.99993 7.69891 5.99993 7.5C5.99993 7.30109 6.07895 7.11032 6.2196 6.96967C6.36026 6.82902 6.55102 6.75 6.74993 6.75H13.7973C13.4515 6.07331 12.9257 5.50518 12.2778 5.10818C11.6298 4.71119 10.8848 4.50073 10.1249 4.5H6.74993C6.55102 4.5 6.36026 4.42098 6.2196 4.28033C6.07895 4.13968 5.99993 3.94891 5.99993 3.75C5.99993 3.55109 6.07895 3.36032 6.2196 3.21967C6.36026 3.07902 6.55102 3 6.74993 3H18.7499C18.9488 3 19.1396 3.07902 19.2803 3.21967C19.4209 3.36032 19.4999 3.55109 19.4999 3.75C19.4999 3.94891 19.4209 4.13968 19.2803 4.28033C19.1396 4.42098 18.9488 4.5 18.7499 4.5H13.9439C14.6129 5.11909 15.122 5.89114 15.4274 6.75H18.7499C18.9488 6.75001 19.1396 6.82903 19.2803 6.96968C19.4209 7.11033 19.4999 7.30109 19.4999 7.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyInrSolid);
export default ForwardRef;
