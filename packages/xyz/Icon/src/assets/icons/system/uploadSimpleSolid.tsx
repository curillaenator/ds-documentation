import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UploadSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.53214 8.21684C7.4625 8.14719 7.40726 8.06451 7.36957 7.97351C7.33189 7.88252 7.3125 7.78499 7.31251 7.6865C7.31252 7.58801 7.33192 7.49048 7.36962 7.3995C7.40732 7.30851 7.46258 7.22583 7.53223 7.1562L11.4697 3.21971C11.6104 3.07911 11.8011 3.00012 12 3.00012C12.1989 3.00012 12.3896 3.07911 12.5303 3.21971L16.4678 7.1562C16.5374 7.22584 16.5927 7.30851 16.6304 7.3995C16.6681 7.49049 16.6875 7.58801 16.6875 7.6865C16.6875 7.78499 16.6681 7.88251 16.6304 7.97351C16.5927 8.06451 16.5375 8.14719 16.4679 8.21684C16.3982 8.28648 16.3156 8.34174 16.2246 8.37943C16.1336 8.41713 16.0361 8.43654 15.9376 8.43655C15.8391 8.43656 15.7416 8.41716 15.6506 8.37948C15.5596 8.3418 15.4769 8.28656 15.4072 8.21693L12.75 5.56041V14.2501C12.75 14.449 12.671 14.6397 12.5303 14.7804C12.3897 14.921 12.1989 15.0001 12 15.0001C11.8011 15.0001 11.6103 14.921 11.4697 14.7804C11.329 14.6397 11.25 14.449 11.25 14.2501V5.56041L8.59277 8.21693C8.52313 8.28657 8.44045 8.34182 8.34945 8.3795C8.25846 8.41719 8.16093 8.43658 8.06244 8.43657C7.96394 8.43657 7.86642 8.41716 7.77543 8.37945C7.68444 8.34175 7.60177 8.28649 7.53214 8.21684ZM20.25 13.5001C20.0511 13.5001 19.8603 13.5791 19.7197 13.7197C19.579 13.8604 19.5 14.0512 19.5 14.2501V19.5001H4.5V14.2501C4.5 14.0512 4.42098 13.8604 4.28033 13.7197C4.13968 13.5791 3.94891 13.5001 3.75 13.5001C3.55109 13.5001 3.36032 13.5791 3.21967 13.7197C3.07902 13.8604 3 14.0512 3 14.2501V19.5001C3.00045 19.8977 3.15864 20.279 3.43984 20.5602C3.72105 20.8414 4.10231 20.9996 4.5 21.0001H19.5C19.8977 20.9996 20.279 20.8414 20.5602 20.5602C20.8414 20.279 20.9995 19.8977 21 19.5001V14.2501C21 14.0512 20.921 13.8604 20.7803 13.7197C20.6397 13.5791 20.4489 13.5001 20.25 13.5001Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UploadSimpleSolid);
export default ForwardRef;