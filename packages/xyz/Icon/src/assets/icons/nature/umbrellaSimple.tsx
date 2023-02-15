import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UmbrellaSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 18.75C16.5 19.3468 16.263 19.9191 15.841 20.341C15.419 20.763 14.8467 21 14.25 21C13.6533 21 13.081 20.763 12.659 20.341C12.2371 19.9191 12 19.3468 12 18.75V12.75M3.03134 12.75C2.92728 12.7498 2.82439 12.728 2.72919 12.686C2.63399 12.6439 2.54855 12.5826 2.47828 12.5059C2.408 12.4291 2.35442 12.3386 2.32092 12.2401C2.28743 12.1416 2.27474 12.0372 2.28367 11.9335C2.48853 9.49753 3.60092 7.22737 5.40047 5.57281C7.20001 3.91825 9.5554 3 12 3C14.4445 3 16.7999 3.91825 18.5995 5.57281C20.399 7.22737 21.5114 9.49753 21.7163 11.9335C21.7252 12.0372 21.7125 12.1416 21.679 12.2401C21.6455 12.3386 21.5919 12.4291 21.5217 12.5059C21.4514 12.5826 21.3659 12.6439 21.2707 12.686C21.1756 12.728 21.0727 12.7498 20.9686 12.75H3.03134Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UmbrellaSimple);
export default ForwardRef;
