import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FileTextSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.0241 7.71327L14.7804 2.46963C14.7729 2.46213 14.7648 2.45554 14.757 2.44839C14.7469 2.4391 14.737 2.42949 14.7264 2.42075C14.7194 2.41498 14.7118 2.40994 14.7046 2.4044C14.6923 2.39502 14.6802 2.3855 14.6674 2.37685C14.6615 2.37295 14.6554 2.36971 14.6495 2.366C14.6346 2.35661 14.6197 2.34728 14.6042 2.3389C14.6 2.33666 14.5956 2.33492 14.5914 2.33276C14.5738 2.3237 14.556 2.315 14.5377 2.30736C14.5348 2.30617 14.5318 2.30529 14.5289 2.30415C14.5092 2.29623 14.4892 2.28882 14.4687 2.28259C14.4657 2.28167 14.4626 2.28112 14.4597 2.28025C14.4393 2.27435 14.4188 2.2689 14.3977 2.26469C14.391 2.26336 14.3841 2.26277 14.3774 2.26163C14.36 2.2586 14.3427 2.25554 14.325 2.2538C14.3001 2.25127 14.2751 2.25 14.2501 2.25H5.24933C4.85164 2.25045 4.47038 2.40864 4.18917 2.68984C3.90796 2.97105 3.74978 3.35231 3.74933 3.75V20.25C3.74978 20.6477 3.90796 21.029 4.18917 21.3102C4.47038 21.5914 4.85164 21.7495 5.24933 21.75H18.7501C19.1477 21.7495 19.529 21.5914 19.8102 21.3102C20.0914 21.029 20.2496 20.6477 20.2501 20.25V8.26451C20.2502 8.25961 20.2508 8.2549 20.2508 8.25C20.2509 8.14991 20.2308 8.05083 20.1919 7.95863C20.1529 7.86643 20.0959 7.78299 20.0241 7.71327ZM15.0001 16.5H9.00006C8.80115 16.5 8.61038 16.421 8.46973 16.2803C8.32908 16.1397 8.25006 15.9489 8.25006 15.75C8.25006 15.5511 8.32908 15.3603 8.46973 15.2197C8.61038 15.079 8.80115 15 9.00006 15H15.0001C15.199 15 15.3897 15.079 15.5304 15.2197C15.671 15.3603 15.7501 15.5511 15.7501 15.75C15.7501 15.9489 15.671 16.1397 15.5304 16.2803C15.3897 16.421 15.199 16.5 15.0001 16.5ZM15.0001 13.5H9.00006C8.80115 13.5 8.61038 13.421 8.46973 13.2803C8.32908 13.1397 8.25006 12.9489 8.25006 12.75C8.25006 12.5511 8.32908 12.3603 8.46973 12.2197C8.61038 12.079 8.80115 12 9.00006 12H15.0001C15.199 12 15.3897 12.079 15.5304 12.2197C15.671 12.3603 15.7501 12.5511 15.7501 12.75C15.7501 12.9489 15.671 13.1397 15.5304 13.2803C15.3897 13.421 15.199 13.5 15.0001 13.5ZM14.2501 8.25V4.06064L18.4393 8.25H14.2501Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FileTextSolid);
export default ForwardRef;
