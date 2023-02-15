import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendDownLeftSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 4.5C20.8011 4.50001 20.6104 4.57903 20.4697 4.71968C20.3291 4.86033 20.2501 5.05109 20.25 5.25C20.2476 7.43728 19.3776 9.53426 17.8309 11.0809C16.2843 12.6275 14.1873 13.4975 12 13.5H4.81071L8.03041 10.2804C8.17107 10.1397 8.2501 9.94892 8.2501 9.75C8.2501 9.55107 8.17107 9.3603 8.03041 9.21963C7.88975 9.07897 7.69897 8.99995 7.50005 8.99995C7.30112 8.99995 7.11034 9.07897 6.96968 9.21963L2.46968 13.7196C2.46439 13.7249 2.45991 13.7307 2.4548 13.7361C2.44306 13.7486 2.43125 13.761 2.42038 13.7742C2.41184 13.7846 2.40433 13.7955 2.39644 13.8062C2.38982 13.8152 2.38287 13.8239 2.37666 13.8331C2.36869 13.845 2.36176 13.8573 2.35455 13.8695C2.34933 13.8783 2.34375 13.8869 2.33887 13.8961C2.3324 13.9081 2.32686 13.9206 2.32109 13.933C2.31647 13.9428 2.31153 13.9525 2.30731 13.9626C2.30241 13.9745 2.2984 13.9866 2.29412 13.9987C2.29019 14.0098 2.28591 14.0207 2.28248 14.032C2.27881 14.0441 2.27611 14.0563 2.27307 14.0685C2.27021 14.0801 2.26696 14.0914 2.26462 14.1031C2.26181 14.1174 2.26007 14.1317 2.25808 14.146C2.2567 14.156 2.25478 14.1657 2.2538 14.1758C2.2489 14.2251 2.2489 14.2749 2.2538 14.3243C2.25478 14.3343 2.2567 14.344 2.25808 14.354C2.26007 14.3683 2.26181 14.3826 2.26462 14.3969C2.26696 14.4086 2.27021 14.4199 2.27307 14.4315C2.27611 14.4437 2.27881 14.4559 2.28248 14.468C2.28591 14.4793 2.29019 14.4902 2.29412 14.5013C2.29841 14.5134 2.30241 14.5255 2.30731 14.5374C2.31152 14.5475 2.31646 14.5572 2.32109 14.5671C2.32686 14.5794 2.3324 14.5919 2.33887 14.6039C2.34375 14.6131 2.34933 14.6217 2.35455 14.6305C2.36176 14.6427 2.3687 14.655 2.37666 14.6669C2.38287 14.6761 2.38982 14.6848 2.39644 14.6938C2.40433 14.7045 2.41184 14.7154 2.42038 14.7258C2.43125 14.739 2.44306 14.7514 2.4548 14.7639C2.45991 14.7693 2.46439 14.7751 2.46968 14.7804L6.96968 19.2804C7.03933 19.35 7.12201 19.4053 7.21301 19.443C7.30401 19.4807 7.40155 19.5001 7.50005 19.5001C7.59854 19.5001 7.69608 19.4807 7.78708 19.443C7.87808 19.4053 7.96076 19.35 8.03041 19.2804C8.10006 19.2107 8.15531 19.128 8.193 19.037C8.2307 18.946 8.2501 18.8485 8.2501 18.75C8.2501 18.6515 8.2307 18.554 8.193 18.463C8.15531 18.372 8.10006 18.2893 8.03041 18.2196L4.81071 15H12C14.585 14.9971 17.0633 13.9689 18.8911 12.1411C20.719 10.3132 21.7471 7.83496 21.75 5.25C21.75 5.05109 21.671 4.86033 21.5304 4.71968C21.3897 4.57903 21.199 4.50001 21 4.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BendDownLeftSolid);
export default ForwardRef;