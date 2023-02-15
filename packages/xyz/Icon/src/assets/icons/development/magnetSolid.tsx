import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MagnetSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.4018 4.71065C18.6397 3.9325 17.7301 3.3141 16.7262 2.89161C15.7223 2.46913 14.6442 2.25103 13.555 2.25008C13.5444 2.24998 13.5341 2.24998 13.5235 2.24998C12.439 2.2471 11.3648 2.45949 10.363 2.87484C9.36116 3.29018 8.45175 3.90023 7.68744 4.66963L4.52815 7.86756L4.52806 7.86766L4.52792 7.86779L1.49035 10.9425C1.2127 11.2249 1.05764 11.6054 1.05884 12.0013C1.06004 12.3973 1.21741 12.7769 1.49676 13.0575L4.183 15.7438C4.32193 15.8835 4.4872 15.9943 4.66925 16.0697C4.85129 16.1451 5.04649 16.1837 5.24354 16.1831H5.25251C5.45105 16.1825 5.64747 16.1423 5.83023 16.0647C6.01298 15.9871 6.17839 15.8738 6.31672 15.7314L9.31863 12.6586L9.31881 12.6584L9.31909 12.6582L12.4665 9.43641C12.7454 9.16168 13.1202 9.00622 13.5117 9.00293C13.9031 8.99963 14.2805 9.14875 14.564 9.41875C14.7044 9.55513 14.8159 9.71831 14.892 9.89862C14.9681 10.0789 15.0073 10.2727 15.0071 10.4684C15.009 10.6765 14.9699 10.8829 14.8919 11.0758C14.814 11.2687 14.6988 11.4444 14.5529 11.5928L11.3553 14.6937L11.3547 14.6943L11.3543 14.6947L8.27457 17.6814C8.13176 17.8199 8.01792 17.9854 7.93968 18.1682C7.86144 18.3511 7.82035 18.5478 7.81882 18.7467C7.81728 18.9456 7.85533 19.1428 7.93074 19.3269C8.00616 19.511 8.11743 19.6782 8.25808 19.8189L10.9444 22.5052C11.2246 22.7835 11.6029 22.9406 11.9978 22.9425C12.3927 22.9445 12.7725 22.7911 13.0553 22.5155L16.145 19.4856L16.1455 19.4852L16.1458 19.4848L19.2913 16.4002C22.5208 13.1706 22.5705 7.92671 19.4018 4.71065ZM5.24372 14.683L2.5574 11.9968L5.06163 9.46194L7.73386 12.1342L5.24372 14.683ZM12.0051 21.4445L9.31881 18.7582L11.877 16.2773L14.5492 18.9496L12.0051 21.4445Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MagnetSolid);
export default ForwardRef;