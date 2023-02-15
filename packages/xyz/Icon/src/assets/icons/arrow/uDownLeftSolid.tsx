import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UDownLeftSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 4.5H7.50004C7.30113 4.5 7.11036 4.57902 6.96971 4.71967C6.82906 4.86032 6.75004 5.05109 6.75004 5.25C6.75004 5.44891 6.82906 5.63968 6.96971 5.78033C7.11036 5.92098 7.30113 6 7.50004 6H15.75C16.9435 6 18.0881 6.47411 18.932 7.31802C19.7759 8.16193 20.25 9.30653 20.25 10.5C20.25 11.6935 19.7759 12.8381 18.932 13.682C18.0881 14.5259 16.9435 15 15.75 15H4.81068L8.03041 11.7803C8.17106 11.6397 8.25007 11.4489 8.25006 11.25C8.25005 11.0511 8.17102 10.8603 8.03036 10.7196C7.8897 10.579 7.69893 10.5 7.50001 10.5C7.30109 10.5 7.11033 10.579 6.96968 10.7197L2.46968 15.2197C2.46743 15.2219 2.46556 15.2244 2.46334 15.2267C2.44837 15.2421 2.43381 15.2578 2.42019 15.2744C2.4123 15.284 2.40541 15.2942 2.39806 15.304C2.39083 15.3138 2.3833 15.3232 2.37655 15.3333C2.36886 15.3448 2.36217 15.3567 2.35519 15.3685C2.3497 15.3777 2.34391 15.3867 2.33883 15.3961C2.33244 15.408 2.32704 15.4203 2.32134 15.4324C2.31662 15.4425 2.31157 15.4524 2.30729 15.4627C2.30241 15.4745 2.29847 15.4865 2.29422 15.4984C2.29023 15.5096 2.28593 15.5206 2.28248 15.532C2.27884 15.544 2.27613 15.5563 2.27311 15.5684C2.27023 15.58 2.26696 15.5914 2.26462 15.6032C2.26181 15.6173 2.26007 15.6317 2.2581 15.646C2.2567 15.6559 2.25478 15.6657 2.2538 15.6757C2.2489 15.7251 2.2489 15.7749 2.2538 15.8242C2.25478 15.8343 2.2567 15.8441 2.2581 15.854C2.26007 15.8683 2.26181 15.8827 2.26462 15.8968C2.26696 15.9086 2.27023 15.92 2.27311 15.9315C2.27613 15.9437 2.27883 15.956 2.28248 15.968C2.28593 15.9794 2.29023 15.9904 2.29422 16.0016C2.29847 16.0135 2.30241 16.0255 2.30729 16.0373C2.31157 16.0476 2.31662 16.0575 2.32134 16.0676C2.32704 16.0797 2.33244 16.0919 2.33883 16.1039C2.34391 16.1133 2.3497 16.1223 2.35519 16.1315C2.36217 16.1433 2.36885 16.1552 2.37655 16.1667C2.3833 16.1768 2.39083 16.1862 2.39806 16.196C2.40541 16.2058 2.4123 16.216 2.42019 16.2256C2.43356 16.2419 2.44787 16.2573 2.46254 16.2724C2.46503 16.275 2.46714 16.2778 2.46968 16.2803L6.96968 20.7803C7.03932 20.85 7.122 20.9052 7.21299 20.9429C7.30399 20.9806 7.40152 21 7.50001 21C7.5985 21 7.69603 20.9806 7.78703 20.9429C7.87803 20.9052 7.96071 20.85 8.03036 20.7804C8.10001 20.7107 8.15526 20.628 8.19296 20.537C8.23065 20.4461 8.25005 20.3485 8.25006 20.25C8.25006 20.1515 8.23067 20.054 8.19298 19.963C8.15529 19.872 8.10005 19.7893 8.03041 19.7197L4.81068 16.5H15.75C17.3413 16.5 18.8675 15.8679 19.9927 14.7426C21.1179 13.6174 21.75 12.0913 21.75 10.5C21.75 8.9087 21.1179 7.38258 19.9927 6.25736C18.8675 5.13214 17.3413 4.5 15.75 4.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UDownLeftSolid);
export default ForwardRef;