import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatDots = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 12H12.0012M7.2 12H7.2012M16.8 12H16.8012M7.25165 18.9259L4.23261 21.4638C4.12328 21.5557 3.98999 21.6145 3.8484 21.6332C3.70681 21.652 3.56281 21.6299 3.43334 21.5696C3.30387 21.5093 3.19431 21.4133 3.11755 21.2928C3.04078 21.1724 3 21.0325 3 20.8897V6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H20.25C20.4489 5.25 20.6397 5.32902 20.7803 5.46967C20.921 5.61032 21 5.80109 21 6V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H7.73426C7.5577 18.75 7.3868 18.8123 7.25165 18.9259Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatDots);
export default ForwardRef;
