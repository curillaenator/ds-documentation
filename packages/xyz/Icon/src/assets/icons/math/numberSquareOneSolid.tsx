import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareOneSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 3H4.5C4.10233 3.00052 3.7211 3.15872 3.43991 3.43991C3.15872 3.7211 3.00052 4.10233 3 4.5V19.5C3.00052 19.8977 3.15872 20.2789 3.43991 20.5601C3.7211 20.8413 4.10233 20.9995 4.5 21H19.5C19.8977 20.9995 20.2789 20.8413 20.5601 20.5601C20.8413 20.2789 20.9995 19.8977 21 19.5V4.5C20.9995 4.10233 20.8413 3.7211 20.5601 3.43991C20.2789 3.15872 19.8977 3.00052 19.5 3ZM13.1243 16.4993C13.1243 16.6982 13.0453 16.8889 12.9046 17.0296C12.7639 17.1703 12.5732 17.2493 12.3743 17.2493C12.1754 17.2493 11.9846 17.1703 11.8439 17.0296C11.7033 16.8889 11.6243 16.6982 11.6243 16.4993V9.27686L10.5417 9.99829C10.4598 10.053 10.3679 10.0911 10.2712 10.1103C10.1746 10.1295 10.0751 10.1294 9.97842 10.1101C9.88178 10.0908 9.78989 10.0527 9.708 9.99788C9.62611 9.94306 9.55582 9.87264 9.50116 9.79065C9.4465 9.70866 9.40853 9.61669 9.38943 9.52002C9.37032 9.42334 9.37046 9.32385 9.38983 9.22723C9.4092 9.1306 9.44742 9.03875 9.50231 8.9569C9.55719 8.87506 9.62767 8.80483 9.70972 8.75024L11.9583 7.25098C12.0712 7.17566 12.2025 7.13241 12.3381 7.12585C12.4737 7.11929 12.6085 7.14965 12.7282 7.21371C12.8479 7.27776 12.9479 7.37311 13.0177 7.48957C13.0874 7.60603 13.1243 7.73925 13.1243 7.875V16.4993Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareOneSolid);
export default ForwardRef;