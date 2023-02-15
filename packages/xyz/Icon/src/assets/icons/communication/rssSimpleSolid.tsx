import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RssSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2496 18.7499C20.2496 18.9489 20.1706 19.1396 20.0299 19.2803C19.8893 19.4209 19.6985 19.4999 19.4996 19.4999C19.3007 19.4999 19.1099 19.4209 18.9693 19.2803C18.8286 19.1396 18.7496 18.9489 18.7496 18.7499C18.7496 11.306 12.6935 5.24994 5.2496 5.24994C5.05069 5.24994 4.85993 5.17092 4.71927 5.03027C4.57862 4.88962 4.4996 4.69885 4.4996 4.49994C4.4996 4.30103 4.57862 4.11026 4.71927 3.96961C4.85993 3.82896 5.05069 3.74994 5.2496 3.74994C13.5206 3.74994 20.2496 10.4789 20.2496 18.7499ZM5.2496 10.4999C5.05069 10.4999 4.85993 10.579 4.71927 10.7196C4.57862 10.8603 4.4996 11.051 4.4996 11.2499C4.4996 11.4489 4.57862 11.6396 4.71927 11.7803C4.85993 11.9209 5.05069 11.9999 5.2496 11.9999C7.0392 12.002 8.75491 12.7138 10.0203 13.9792C11.2858 15.2446 11.9976 16.9603 11.9996 18.7499C11.9996 18.9489 12.0786 19.1396 12.2193 19.2803C12.3599 19.4209 12.5507 19.4999 12.7496 19.4999C12.9485 19.4999 13.1393 19.4209 13.2799 19.2803C13.4206 19.1396 13.4996 18.9489 13.4996 18.7499C13.4971 16.5627 12.6271 14.4657 11.0805 12.919C9.53386 11.3724 7.43688 10.5024 5.2496 10.4999ZM5.2496 17.6249C5.0271 17.6249 4.80959 17.6909 4.62459 17.8145C4.43958 17.9382 4.29539 18.1139 4.21024 18.3194C4.12509 18.525 4.10281 18.7512 4.14622 18.9694C4.18963 19.1876 4.29677 19.3881 4.45411 19.5454C4.61144 19.7028 4.8119 19.8099 5.03013 19.8533C5.24836 19.8967 5.47456 19.8745 5.68012 19.7893C5.88569 19.7042 6.06139 19.56 6.18501 19.375C6.30862 19.19 6.3746 18.9724 6.3746 18.7499C6.37427 18.4517 6.25564 18.1657 6.04473 17.9548C5.83382 17.7439 5.54787 17.6253 5.2496 17.6249Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(RssSimpleSolid);
export default ForwardRef;