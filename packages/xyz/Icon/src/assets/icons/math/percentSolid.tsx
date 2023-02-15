import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PercentSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.2802 5.7803L5.78018 19.2803C5.63951 19.4208 5.44879 19.4997 5.24996 19.4996C5.05114 19.4996 4.86047 19.4206 4.71988 19.28C4.57929 19.1394 4.50028 18.9487 4.50021 18.7499C4.50015 18.5511 4.57904 18.3603 4.71955 18.2197L18.2195 4.71966C18.3602 4.57916 18.5509 4.50027 18.7498 4.50033C18.9486 4.50039 19.1393 4.5794 19.2799 4.71999C19.4204 4.86059 19.4995 5.05125 19.4995 5.25008C19.4996 5.44891 19.4207 5.63962 19.2802 5.7803ZM4.73841 9.51146C4.18493 8.95923 3.8401 8.23213 3.7627 7.45411C3.6853 6.67609 3.88011 5.8953 4.31395 5.24484C4.74778 4.59438 5.39377 4.11451 6.1418 3.88702C6.88984 3.65954 7.69362 3.69852 8.41613 3.99732C9.13864 4.29612 9.73517 4.83624 10.104 5.52563C10.4729 6.21502 10.5912 7.01099 10.4389 7.77787C10.2866 8.54475 9.87303 9.23507 9.26871 9.73116C8.66439 10.2273 7.90673 10.4984 7.12487 10.4984C6.68159 10.4998 6.24243 10.4133 5.8328 10.2439C5.42317 10.0745 5.0512 9.82556 4.73841 9.51146ZM5.24987 7.12498C5.24986 7.43333 5.32591 7.73692 5.47126 8.00885C5.61661 8.28079 5.82679 8.51268 6.08317 8.68399C6.33955 8.8553 6.63422 8.96074 6.94108 8.99096C7.24794 9.02119 7.55752 8.97526 7.8424 8.85726C8.12727 8.73927 8.37865 8.55283 8.57426 8.31448C8.76987 8.07612 8.90368 7.7932 8.96384 7.49078C9.02399 7.18836 9.00864 6.87577 8.91913 6.5807C8.82962 6.28563 8.66872 6.01719 8.45069 5.79916V5.79914C8.18846 5.53692 7.85437 5.35834 7.49065 5.28599C7.12694 5.21365 6.74994 5.25078 6.40732 5.3927C6.06471 5.53461 5.77188 5.77494 5.56585 6.08328C5.35983 6.39163 5.24986 6.75414 5.24987 7.12498ZM20.2499 16.875C20.2499 17.6558 19.9791 18.4125 19.4838 19.0161C18.9884 19.6197 18.2991 20.0328 17.5333 20.1852C16.7675 20.3375 15.9725 20.2196 15.2839 19.8515C14.5953 19.4835 14.0556 18.888 13.7568 18.1666C13.4579 17.4452 13.4185 16.6425 13.6452 15.8953C13.8718 15.1481 14.3505 14.5026 14.9998 14.0688C15.649 13.635 16.4286 13.4397 17.2056 13.5163C17.9827 13.5928 18.7092 13.9364 19.2613 14.4885C19.5757 14.8012 19.825 15.1731 19.9947 15.5827C20.1643 15.9924 20.2511 16.4316 20.2499 16.875ZM18.7499 16.875C18.7499 16.4412 18.5995 16.0208 18.3243 15.6855C18.0491 15.3502 17.6661 15.1206 17.2407 15.036C16.8152 14.9514 16.3736 15.0169 15.991 15.2213C15.6084 15.4258 15.3086 15.7567 15.1426 16.1574C14.9766 16.5582 14.9546 17.0041 15.0806 17.4193C15.2065 17.8344 15.4725 18.193 15.8331 18.434C16.1938 18.675 16.6269 18.7835 17.0586 18.741C17.4903 18.6984 17.8939 18.5075 18.2007 18.2008C18.3753 18.0271 18.5138 17.8205 18.6081 17.5929C18.7024 17.3653 18.7505 17.1213 18.7499 16.875Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PercentSolid);
export default ForwardRef;
