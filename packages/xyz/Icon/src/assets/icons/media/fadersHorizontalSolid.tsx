import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FadersHorizontalSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.7499 15.3739H3.74988C3.55097 15.3739 3.3602 15.4529 3.21955 15.5936C3.0789 15.7343 2.99988 15.925 2.99988 16.1239C2.99988 16.3228 3.0789 16.5136 3.21955 16.6543C3.3602 16.7949 3.55097 16.8739 3.74988 16.8739H12.7499C12.9488 16.8739 13.1396 16.7949 13.2802 16.6543C13.4209 16.5136 13.4999 16.3228 13.4999 16.1239C13.4999 15.925 13.4209 15.7343 13.2802 15.5936C13.1396 15.4529 12.9488 15.3739 12.7499 15.3739Z'
      fill='currentColor'
    />
    <path
      d='M20.2497 15.374H16.4997V13.874C16.4997 13.6751 16.4206 13.4843 16.28 13.3437C16.1393 13.203 15.9486 13.124 15.7497 13.124C15.5508 13.124 15.36 13.203 15.2193 13.3437C15.0787 13.4843 14.9997 13.6751 14.9997 13.874V18.3741C14.9997 18.573 15.0787 18.7638 15.2193 18.9044C15.36 19.0451 15.5508 19.1241 15.7497 19.1241C15.9486 19.1241 16.1393 19.0451 16.28 18.9044C16.4206 18.7638 16.4997 18.573 16.4997 18.3741V16.874H20.2497C20.4486 16.874 20.6393 16.795 20.78 16.6544C20.9206 16.5137 20.9997 16.323 20.9997 16.124C20.9997 15.9251 20.9206 15.7344 20.78 15.5937C20.6393 15.453 20.4486 15.374 20.2497 15.374Z'
      fill='currentColor'
    />
    <path
      d='M3.74988 8.62393L6.74988 8.62403C6.94879 8.62403 7.13956 8.54501 7.28021 8.40436C7.42086 8.2637 7.49988 8.07294 7.49988 7.87403C7.49988 7.67511 7.42086 7.48435 7.28021 7.34369C7.13956 7.20304 6.94879 7.12403 6.74988 7.12403L3.74988 7.12393C3.55097 7.12393 3.3602 7.20295 3.21955 7.3436C3.0789 7.48425 2.99988 7.67502 2.99988 7.87393C2.99988 8.07284 3.0789 8.26361 3.21955 8.40426C3.3602 8.54491 3.55097 8.62393 3.74988 8.62393Z'
      fill='currentColor'
    />
    <path
      d='M9.74985 10.8741C9.94876 10.8741 10.1395 10.795 10.2802 10.6544C10.4208 10.5137 10.4998 10.323 10.4998 10.1241V8.62405L20.2498 8.62396C20.4488 8.62396 20.6395 8.54494 20.7802 8.40429C20.9208 8.26363 20.9998 8.07287 20.9998 7.87395C20.9998 7.67504 20.9208 7.48427 20.7802 7.34362C20.6395 7.20297 20.4488 7.12395 20.2498 7.12395L10.4998 7.12404V5.62403C10.4998 5.42512 10.4208 5.23435 10.2802 5.0937C10.1395 4.95304 9.94876 4.87402 9.74985 4.87402C9.55094 4.87402 9.36017 4.95304 9.21952 5.0937C9.07887 5.23435 8.99985 5.42512 8.99985 5.62403V10.1241C8.99986 10.323 9.07888 10.5137 9.21953 10.6544C9.36018 10.795 9.55094 10.8741 9.74985 10.8741Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FadersHorizontalSolid);
export default ForwardRef;