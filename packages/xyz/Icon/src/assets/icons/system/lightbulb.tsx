import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Lightbulb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.25024 21.7501H15.7503M12.7614 5.32328C13.6788 5.47921 14.5251 5.91612 15.1835 6.57368C15.8419 7.23124 16.2798 8.077 16.4369 8.99415M7.37872 15.6574C6.48691 14.9608 5.7646 14.0712 5.26606 13.0554C4.76752 12.0396 4.50573 10.9239 4.50036 9.79237C4.47789 5.72715 7.75524 2.34783 11.8194 2.25217C13.3943 2.21425 14.9411 2.67317 16.2405 3.56384C17.5399 4.45451 18.5258 5.73169 19.0585 7.21424C19.5911 8.69678 19.6435 10.3094 19.2081 11.8234C18.7726 13.3373 17.8716 14.6758 16.6327 15.6488C16.3598 15.8602 16.1386 16.1309 15.9857 16.4404C15.8328 16.7499 15.7523 17.0901 15.7503 17.4353L15.7503 18.0001C15.7502 18.199 15.6712 18.3897 15.5306 18.5304C15.3899 18.671 15.1992 18.75 15.0003 18.75H9.00023C8.80132 18.75 8.61055 18.671 8.4699 18.5304C8.32925 18.3897 8.25023 18.199 8.25023 18.0001L8.25022 17.4346C8.24937 17.0917 8.17045 16.7534 8.01946 16.4455C7.86846 16.1376 7.64934 15.868 7.37872 15.6574Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Lightbulb);
export default ForwardRef;
