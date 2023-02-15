import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MusicNotesSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.9615 2.40885C19.8717 2.33871 19.767 2.28996 19.6555 2.26632C19.544 2.24267 19.4286 2.24475 19.3181 2.27239L7.31806 5.27239C7.15579 5.31295 7.01174 5.4066 6.9088 5.53844C6.80587 5.67028 6.74996 5.83274 6.74997 6.00001V16.3203C6.12446 15.9025 5.37728 15.7058 4.62713 15.7612C3.87698 15.8167 3.16688 16.1213 2.60964 16.6266C2.05241 17.1318 1.67999 17.8088 1.55156 18.55C1.42313 19.2911 1.54605 20.0539 1.9008 20.7172C2.25554 21.3805 2.82177 21.9063 3.50951 22.2109C4.19726 22.5155 4.96709 22.5816 5.6967 22.3987C6.42631 22.2157 7.07385 21.7942 7.53646 21.201C7.99906 20.6079 8.2502 19.8772 8.24997 19.125V6.58558L18.75 3.96058V13.3203C18.1245 12.9025 17.3773 12.7058 16.6271 12.7612C15.877 12.8167 15.1669 13.1213 14.6096 13.6266C14.0524 14.1318 13.68 14.8088 13.5516 15.55C13.4231 16.2911 13.5461 17.0539 13.9008 17.7172C14.2555 18.3805 14.8218 18.9063 15.5095 19.2109C16.1973 19.5155 16.9671 19.5816 17.6967 19.3987C18.4263 19.2157 19.0738 18.7942 19.5365 18.201C19.9991 17.6079 20.2502 16.8772 20.25 16.125V3.00001C20.25 2.88602 20.224 2.77354 20.174 2.67111C20.124 2.56867 20.0513 2.47898 19.9615 2.40885Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MusicNotesSimpleSolid);
export default ForwardRef;