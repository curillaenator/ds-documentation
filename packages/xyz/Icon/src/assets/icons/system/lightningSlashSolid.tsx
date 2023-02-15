import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LightningSlashSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.05471 3.24529C4.98848 3.17233 4.90852 3.11314 4.81941 3.07109C4.73029 3.02905 4.63376 3.00498 4.53534 3.00025C4.43692 2.99553 4.33853 3.01025 4.2458 3.04357C4.15306 3.07689 4.06781 3.12815 3.99489 3.19444C3.92198 3.26072 3.86285 3.34072 3.82087 3.42987C3.77889 3.51902 3.75489 3.61556 3.75024 3.71399C3.74559 3.81242 3.76038 3.91079 3.79377 4.0035C3.82715 4.09621 3.87848 4.18143 3.94482 4.25429L7.62363 8.30099L3.95146 12.2355C3.86734 12.3256 3.80674 12.4351 3.77502 12.5543C3.74331 12.6734 3.74146 12.7986 3.76963 12.9186C3.79781 13.0386 3.85514 13.1499 3.93656 13.2425C4.01798 13.3351 4.12097 13.4062 4.23641 13.4495L9.63925 15.4755L8.26431 22.3501C8.2323 22.5102 8.25335 22.6763 8.32427 22.8232C8.39519 22.9702 8.51211 23.09 8.6573 23.1645C8.80248 23.239 8.96801 23.2642 9.12876 23.2361C9.28952 23.208 9.43673 23.1283 9.54806 23.009L15.3466 16.7963L18.9448 20.7543C19.011 20.8273 19.091 20.8864 19.1801 20.9285C19.2692 20.9705 19.3657 20.9946 19.4642 20.9993C19.5626 21.0041 19.661 20.9893 19.7537 20.956C19.8464 20.9227 19.9317 20.8714 20.0046 20.8051C20.0775 20.7389 20.1366 20.6589 20.1786 20.5697C20.2206 20.4806 20.2446 20.384 20.2493 20.2856C20.2539 20.1872 20.2391 20.0888 20.2057 19.9961C20.1723 19.9034 20.121 19.8182 20.0547 19.7453L5.05471 3.24529Z'
      fill='currentColor'
    />
    <path
      d='M16.8529 13.9928C16.9226 14.0695 17.0075 14.1309 17.1022 14.1732C17.1969 14.2155 17.2993 14.2376 17.403 14.2383H17.4079C17.5107 14.2383 17.6125 14.2171 17.7068 14.1762C17.8011 14.1352 17.886 14.0752 17.9562 14L20.0482 11.7586C20.1323 11.6684 20.1929 11.5589 20.2247 11.4398C20.2564 11.3206 20.2582 11.1955 20.2301 11.0754C20.2019 10.9554 20.1445 10.8441 20.0631 10.7515C19.9817 10.6589 19.8787 10.5879 19.7632 10.5446L14.3604 8.5185L15.7353 1.6439C15.7673 1.48388 15.7463 1.3178 15.6753 1.17085C15.6044 1.02389 15.4875 0.904071 15.3423 0.829567C15.1971 0.755063 15.0316 0.729938 14.8709 0.758003C14.7101 0.786068 14.5629 0.865792 14.4516 0.985082L10.149 5.59499C10.0206 5.73263 9.94857 5.91355 9.94734 6.10181C9.94611 6.29008 10.0157 6.47192 10.1424 6.61123L16.8529 13.9928Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LightningSlashSolid);
export default ForwardRef;