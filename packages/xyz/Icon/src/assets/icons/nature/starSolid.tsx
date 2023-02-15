import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const StarSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.4217 9.13208C22.3281 8.8381 22.148 8.57916 21.905 8.38906C21.662 8.19896 21.3673 8.08652 21.0594 8.06641L15.4916 7.67676L13.4262 2.47583C13.3144 2.1883 13.1184 1.94124 12.8638 1.76702C12.6092 1.59281 12.3079 1.49956 11.9994 1.49951H11.9979C11.6899 1.50006 11.3892 1.59354 11.1352 1.76773C10.8812 1.94192 10.6856 2.18871 10.5741 2.47583L8.47794 7.70678L2.94085 8.06641C2.63297 8.08652 2.3383 8.19896 2.09528 8.38906C1.85227 8.57916 1.67219 8.8381 1.57855 9.13208C1.47977 9.43024 1.47305 9.75123 1.55927 10.0533C1.64549 10.3553 1.82065 10.6244 2.06195 10.8254L6.3217 14.426L5.05461 19.4102C4.96728 19.7459 4.98334 20.1002 5.10069 20.4266C5.21804 20.7531 5.43122 21.0365 5.71232 21.2397C5.98372 21.4372 6.30826 21.5484 6.64372 21.5588C6.97918 21.5693 7.31002 21.4785 7.59317 21.2983L11.9877 18.5144C11.9935 18.51 11.9994 18.5071 12.0126 18.5144L16.7411 21.51C16.9978 21.674 17.298 21.7567 17.6025 21.7473C17.907 21.7379 18.2015 21.6368 18.4476 21.4573C18.7023 21.2732 18.8955 21.0164 19.0019 20.7207C19.1083 20.425 19.1229 20.104 19.0438 19.7998L17.6976 14.355L21.9383 10.8254C22.1796 10.6244 22.3548 10.3553 22.441 10.0533C22.5272 9.75123 22.5205 9.43024 22.4217 9.13208Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(StarSolid);
export default ForwardRef;
