import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HeartbeatSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 3.00001C15.6269 2.99851 14.7655 3.20077 13.9843 3.59072C13.203 3.98066 12.5236 4.54752 12 5.24621C11.2908 4.30266 10.3029 3.606 9.17603 3.25482C8.04915 2.90365 6.84036 2.91573 5.72072 3.28936C4.60107 3.663 3.62728 4.37926 2.93712 5.3368C2.24697 6.29434 1.8754 7.44467 1.875 8.62501C1.88097 9.51971 2.0372 10.4071 2.33716 11.25H6.34863L7.62598 9.33399C7.69446 9.23126 7.78725 9.14702 7.89611 9.08875C8.00497 9.03049 8.12653 9.00001 8.25 9.00001C8.37347 9.00001 8.49503 9.03049 8.60389 9.08875C8.71275 9.14702 8.80554 9.23126 8.87402 9.33399L11.25 12.8979L12.126 11.584C12.1945 11.4813 12.2873 11.397 12.3961 11.3388C12.505 11.2805 12.6265 11.25 12.75 11.25H15C15.1989 11.25 15.3897 11.329 15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303C15.3897 12.671 15.1989 12.75 15 12.75H13.1514L11.874 14.666C11.8055 14.7688 11.7127 14.853 11.6039 14.9113C11.495 14.9695 11.3735 15 11.25 15C11.1265 15 11.005 14.9695 10.8961 14.9113C10.7873 14.853 10.6945 14.7688 10.626 14.666L8.25 11.1021L7.37402 12.416C7.30554 12.5188 7.21275 12.603 7.10389 12.6613C6.99503 12.7195 6.87347 12.75 6.75 12.75H2.99849C5.49701 17.4197 11.321 20.7294 11.6335 20.9044C11.7455 20.9671 11.8717 21 12 21C12.1283 21 12.2545 20.9671 12.3665 20.9044C14.088 19.8961 15.7037 18.7173 17.1892 17.3856C20.4643 14.438 22.125 11.4905 22.125 8.62501C22.1233 7.13368 21.5301 5.70392 20.4756 4.6494C19.4211 3.59487 17.9913 3.0017 16.5 3.00001Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HeartbeatSolid);
export default ForwardRef;