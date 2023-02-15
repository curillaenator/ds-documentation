import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BusSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.8125 3H6.1875C5.39213 3.00091 4.6296 3.31727 4.06718 3.87968C3.50477 4.4421 3.18841 5.20463 3.1875 6V20.25C3.18795 20.6477 3.34614 21.029 3.62734 21.3102C3.90855 21.5914 4.28981 21.7495 4.6875 21.75H6.9375C7.33519 21.7495 7.71645 21.5914 7.99766 21.3102C8.27886 21.029 8.43705 20.6477 8.4375 20.25V18.75H15.5625V20.25C15.563 20.6477 15.7211 21.029 16.0023 21.3102C16.2835 21.5914 16.6648 21.7495 17.0625 21.75H19.3125C19.7102 21.7495 20.0915 21.5914 20.3727 21.3102C20.6539 21.029 20.812 20.6477 20.8125 20.25V6C20.8116 5.20463 20.4952 4.4421 19.9328 3.87968C19.3704 3.31727 18.6079 3.00091 17.8125 3ZM7.6875 15.75C7.465 15.75 7.24749 15.684 7.06248 15.5604C6.87748 15.4368 6.73328 15.2611 6.64814 15.0555C6.56299 14.85 6.54071 14.6238 6.58412 14.4055C6.62752 14.1873 6.73467 13.9868 6.892 13.8295C7.04934 13.6722 7.24979 13.565 7.46802 13.5216C7.68625 13.4782 7.91245 13.5005 8.11802 13.5856C8.32359 13.6708 8.49929 13.815 8.6229 14C8.74652 14.185 8.8125 14.4025 8.8125 14.625C8.8125 14.9234 8.69397 15.2095 8.483 15.4205C8.27202 15.6315 7.98587 15.75 7.6875 15.75ZM16.3125 15.75C16.09 15.75 15.8725 15.684 15.6875 15.5604C15.5025 15.4368 15.3583 15.2611 15.2731 15.0555C15.188 14.85 15.1657 14.6238 15.2091 14.4055C15.2525 14.1873 15.3597 13.9868 15.517 13.8295C15.6743 13.6722 15.8748 13.565 16.093 13.5216C16.3113 13.4782 16.5375 13.5005 16.743 13.5856C16.9486 13.6708 17.1243 13.815 17.2479 14C17.3715 14.185 17.4375 14.4025 17.4375 14.625C17.4375 14.9234 17.319 15.2095 17.108 15.4205C16.897 15.6315 16.6109 15.75 16.3125 15.75ZM19.3125 11.25H4.6875V6.75H19.3125V11.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BusSolid);
export default ForwardRef;
