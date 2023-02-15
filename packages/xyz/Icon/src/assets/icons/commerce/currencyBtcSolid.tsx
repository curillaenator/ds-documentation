import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyBtcSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.983 10.847C16.5534 10.2993 16.9542 9.59918 17.1377 8.83004C17.3211 8.0609 17.2796 7.25522 17.0179 6.50906C16.7562 5.76289 16.2854 5.10774 15.6617 4.6217C15.038 4.13566 14.2877 3.83925 13.5002 3.76781V2.25C13.5002 2.05109 13.4212 1.86032 13.2805 1.71967C13.1399 1.57902 12.9491 1.5 12.7502 1.5C12.5513 1.5 12.3605 1.57902 12.2199 1.71967C12.0792 1.86032 12.0002 2.05109 12.0002 2.25V3.74991L10.5002 3.74977V2.25C10.5002 2.05109 10.4212 1.86032 10.2805 1.71967C10.1399 1.57902 9.9491 1.5 9.75018 1.5C9.55127 1.5 9.36051 1.57902 9.21985 1.71967C9.0792 1.86032 9.00018 2.05109 9.00018 2.25V3.74968L7.49973 3.74954H5.99963C5.80072 3.74954 5.60996 3.82856 5.4693 3.96921C5.32865 4.10986 5.24963 4.30063 5.24963 4.49954C5.24963 4.69845 5.32865 4.88922 5.4693 5.02987C5.60996 5.17052 5.80072 5.24954 5.99963 5.24954H6.74963V17.9995H5.99963C5.80072 17.9995 5.60996 18.0786 5.4693 18.2192C5.32865 18.3599 5.24963 18.5506 5.24963 18.7495C5.24963 18.9485 5.32865 19.1392 5.4693 19.2799C5.60996 19.4205 5.80072 19.4995 5.99963 19.4995H7.49954L9.00018 19.4996V21C9.00018 21.1989 9.0792 21.3897 9.21985 21.5303C9.36051 21.671 9.55127 21.75 9.75018 21.75C9.9491 21.75 10.1399 21.671 10.2805 21.5303C10.4212 21.3897 10.5002 21.1989 10.5002 21V19.4997L12.0002 19.4999V21C12.0002 21.1989 12.0792 21.3897 12.2199 21.5303C12.3605 21.671 12.5513 21.75 12.7502 21.75C12.9491 21.75 13.1399 21.671 13.2805 21.5303C13.4212 21.3897 13.5002 21.1989 13.5002 21V19.5L14.2502 19.5C15.2903 19.5 16.2983 19.1397 17.1027 18.4804C17.9071 17.8211 18.4583 16.9035 18.6626 15.8836C18.8668 14.8637 18.7115 13.8046 18.2229 12.8864C17.7344 11.9682 16.9429 11.2475 15.983 10.847ZM15.7502 7.875C15.7494 8.57095 15.4726 9.23818 14.9805 9.73029C14.4884 10.2224 13.8211 10.4992 13.1252 10.5H8.24964V5.24963L9.74515 5.24973C9.74684 5.24977 9.74849 5.25 9.75018 5.25C9.75188 5.25 9.75353 5.24977 9.75522 5.24973L12.7496 5.24996L12.7502 5.25L12.7507 5.24995L13.1252 5.25C13.8211 5.25078 14.4884 5.52759 14.9805 6.01971C15.4726 6.51182 15.7494 7.17905 15.7502 7.875ZM14.2503 18L8.24964 17.9996V12H14.2502C15.0458 12 15.8089 12.316 16.3715 12.8786C16.9341 13.4412 17.2502 14.2043 17.2502 15C17.2502 15.7956 16.9342 16.5587 16.3716 17.1213C15.809 17.6839 15.0459 18 14.2503 18Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyBtcSolid);
export default ForwardRef;
