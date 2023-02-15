import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FileSearchSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.0241 7.71327L14.7804 2.46963C14.7729 2.46213 14.7648 2.45554 14.757 2.44839C14.7469 2.4391 14.737 2.42949 14.7264 2.42075C14.7194 2.41498 14.7118 2.40994 14.7046 2.4044C14.6923 2.39502 14.6802 2.3855 14.6674 2.37685C14.6615 2.37295 14.6554 2.36971 14.6495 2.366C14.6346 2.35661 14.6197 2.34728 14.6042 2.3389C14.6 2.33666 14.5956 2.33492 14.5914 2.33276C14.5738 2.3237 14.556 2.315 14.5377 2.30736C14.5348 2.30617 14.5318 2.30529 14.5289 2.30415C14.5092 2.29623 14.4892 2.28882 14.4687 2.28259C14.4657 2.28167 14.4626 2.28112 14.4597 2.28025C14.4393 2.27435 14.4188 2.2689 14.3977 2.26469C14.391 2.26336 14.3841 2.26277 14.3774 2.26163C14.36 2.2586 14.3427 2.25554 14.325 2.2538C14.3001 2.25127 14.2751 2.25 14.2501 2.25H5.24933C4.85164 2.25045 4.47038 2.40864 4.18917 2.68984C3.90796 2.97105 3.74978 3.35231 3.74933 3.75V20.25C3.74978 20.6477 3.90796 21.029 4.18917 21.3102C4.47038 21.5914 4.85164 21.7495 5.24933 21.75H18.7501C19.1477 21.7495 19.529 21.5914 19.8102 21.3102C20.0914 21.029 20.2496 20.6477 20.2501 20.25V8.26451C20.2502 8.25961 20.2508 8.2549 20.2508 8.25C20.2509 8.14991 20.2308 8.05083 20.1919 7.95863C20.1529 7.86643 20.0959 7.78299 20.0241 7.71327ZM15.511 17.7615C15.3703 17.9021 15.1796 17.9811 14.9807 17.9811C14.7817 17.9811 14.591 17.9021 14.4503 17.7615L13.4205 16.7317C12.7187 17.172 11.8792 17.3385 11.0624 17.1992C10.2457 17.0599 9.50885 16.6246 8.99266 15.9765C8.47647 15.3284 8.21709 14.5129 8.26406 13.6856C8.31103 12.8584 8.66105 12.0775 9.24729 11.492C9.83352 10.9065 10.6149 10.5574 11.4422 10.5115C12.2694 10.4655 13.0847 10.7259 13.7321 11.2429C14.3796 11.7599 14.8139 12.4972 14.9522 13.3142C15.0905 14.1311 14.9231 14.9703 14.4818 15.6716L15.511 16.7008C15.5806 16.7704 15.6359 16.8531 15.6736 16.9441C15.7113 17.0351 15.7307 17.1326 15.7307 17.2311C15.7307 17.3296 15.7113 17.4272 15.6736 17.5182C15.6359 17.6092 15.5806 17.6919 15.511 17.7615ZM14.2501 8.25V4.06064L18.4393 8.25H14.2501Z'
      fill='currentColor'
    />
    <path
      d='M11.6244 12.001C11.191 12.0013 10.7711 12.1519 10.4362 12.4271C10.1014 12.7023 9.87235 13.0851 9.78808 13.5102C9.70381 13.9354 9.76954 14.3766 9.97409 14.7587C10.1786 15.1408 10.5093 15.4402 10.9098 15.6058C11.3104 15.7715 11.7559 15.7931 12.1706 15.6671C12.5853 15.5411 12.9435 15.2752 13.1841 14.9147C13.4247 14.5542 13.5329 14.1215 13.4903 13.6902C13.4476 13.2588 13.2568 12.8557 12.9502 12.5493C12.7762 12.3751 12.5695 12.2369 12.342 12.1428C12.1145 12.0488 11.8706 12.0005 11.6244 12.001Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FileSearchSolid);
export default ForwardRef;
