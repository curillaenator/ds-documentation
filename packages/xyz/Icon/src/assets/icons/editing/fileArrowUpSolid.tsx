import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FileArrowUpSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.0241 7.71327L14.7805 2.46963C14.7729 2.46213 14.7648 2.45554 14.757 2.44839C14.7469 2.4391 14.7371 2.42949 14.7264 2.42075C14.7194 2.41498 14.7118 2.40994 14.7046 2.4044C14.6923 2.39502 14.6802 2.3855 14.6674 2.37685C14.6616 2.37295 14.6554 2.36971 14.6495 2.366C14.6347 2.35661 14.6198 2.34728 14.6042 2.3389C14.6 2.33666 14.5956 2.33492 14.5914 2.33276C14.5738 2.3237 14.5561 2.315 14.5377 2.30736C14.5349 2.30617 14.5318 2.30529 14.529 2.30415C14.5092 2.29623 14.4892 2.28882 14.4687 2.28259C14.4657 2.28167 14.4627 2.28112 14.4597 2.28025C14.4394 2.27435 14.4188 2.2689 14.3978 2.26469C14.3911 2.26336 14.3842 2.26277 14.3774 2.26163C14.36 2.2586 14.3427 2.25554 14.325 2.2538C14.3001 2.25127 14.2751 2.25 14.2501 2.25H5.24933C4.85165 2.25045 4.47038 2.40864 4.18917 2.68984C3.90796 2.97105 3.74978 3.35231 3.74933 3.75V20.25C3.74978 20.6477 3.90796 21.029 4.18917 21.3102C4.47038 21.5914 4.85165 21.7495 5.24933 21.75H18.7501C19.1478 21.7495 19.5291 21.5914 19.8103 21.3102C20.0915 21.029 20.2497 20.6477 20.2501 20.25V8.26451C20.2502 8.25961 20.2508 8.2549 20.2508 8.25C20.2509 8.14991 20.2309 8.05083 20.1919 7.95863C20.153 7.86643 20.0959 7.78299 20.0241 7.71327ZM15.1554 14.4053C15.0148 14.546 14.824 14.625 14.6251 14.625C14.4262 14.625 14.2354 14.546 14.0948 14.4053L12.7501 13.0606V17.25C12.7501 17.4489 12.6711 17.6397 12.5304 17.7803C12.3898 17.921 12.199 18 12.0001 18C11.8012 18 11.6104 17.921 11.4698 17.7803C11.3291 17.6397 11.2501 17.4489 11.2501 17.25V13.0606L9.9054 14.4053C9.76474 14.546 9.57397 14.625 9.37506 14.625C9.17615 14.625 8.98538 14.546 8.84473 14.4053C8.70408 14.2646 8.62507 14.0739 8.62507 13.875C8.62508 13.676 8.7041 13.4853 8.84476 13.3446L11.4698 10.7196C11.4722 10.7172 11.4749 10.7152 11.4774 10.7128C11.4926 10.698 11.5082 10.6836 11.5246 10.6701C11.5337 10.6626 11.5434 10.656 11.5528 10.649C11.563 10.6414 11.573 10.6335 11.5836 10.6264C11.5945 10.6191 11.6058 10.6127 11.617 10.6061C11.6268 10.6002 11.6364 10.5941 11.6465 10.5886C11.6578 10.5826 11.6694 10.5775 11.6809 10.5721C11.6916 10.567 11.7021 10.5617 11.7131 10.5571C11.7241 10.5525 11.7355 10.5488 11.7468 10.5448C11.7586 10.5406 11.7703 10.536 11.7824 10.5323C11.7936 10.529 11.805 10.5265 11.8163 10.5236C11.8287 10.5205 11.841 10.517 11.8536 10.5145C11.8666 10.5119 11.8798 10.5104 11.893 10.5085C11.904 10.5069 11.9149 10.5048 11.9261 10.5037C11.9507 10.5013 11.9754 10.5 12.0001 10.5C12.0248 10.5 12.0495 10.5013 12.0741 10.5037C12.0853 10.5048 12.0961 10.5069 12.1072 10.5085C12.1203 10.5104 12.1335 10.5119 12.1466 10.5145C12.1592 10.517 12.1715 10.5205 12.1838 10.5236C12.1952 10.5265 12.2066 10.529 12.2178 10.5324C12.2299 10.536 12.2416 10.5406 12.2534 10.5448C12.2647 10.5489 12.276 10.5525 12.2871 10.5571C12.298 10.5617 12.3086 10.567 12.3193 10.5721C12.3308 10.5775 12.3424 10.5826 12.3537 10.5887C12.3638 10.5941 12.3733 10.6002 12.3831 10.6061C12.3944 10.6127 12.4057 10.6191 12.4166 10.6264C12.4272 10.6335 12.4372 10.6414 12.4473 10.649C12.4567 10.656 12.4665 10.6626 12.4756 10.6701C12.4923 10.6838 12.5082 10.6985 12.5237 10.7135C12.5258 10.7157 12.5283 10.7175 12.5304 10.7196L15.1554 13.3446C15.2251 13.4143 15.2803 13.497 15.318 13.588C15.3557 13.679 15.3751 13.7765 15.3751 13.875C15.3751 13.9735 15.3557 14.071 15.318 14.162C15.2803 14.253 15.2251 14.3357 15.1554 14.4053ZM14.2501 8.25V4.06064L18.4394 8.25H14.2501Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FileArrowUpSolid);
export default ForwardRef;