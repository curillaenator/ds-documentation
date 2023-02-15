import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SpeakerSimpleSlashSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.9978 15C18.1967 15 18.3875 14.9209 18.5281 14.7803C18.6688 14.6396 18.7478 14.4489 18.7478 14.25V9.74997C18.7478 9.55106 18.6688 9.36029 18.5281 9.21964C18.3875 9.07899 18.1967 8.99997 17.9978 8.99997C17.7989 8.99997 17.6081 9.07899 17.4675 9.21964C17.3268 9.36029 17.2478 9.55106 17.2478 9.74997V14.25C17.2478 14.4489 17.3268 14.6396 17.4675 14.7803C17.6081 14.9209 17.7989 15 17.9978 15Z'
      fill='currentColor'
    />
    <path
      d='M20.9978 7.49997C20.7989 7.49998 20.6081 7.579 20.4675 7.71965C20.3268 7.8603 20.2478 8.05106 20.2478 8.24997V15.75C20.2478 15.9489 20.3268 16.1396 20.4675 16.2803C20.6081 16.421 20.7989 16.5 20.9978 16.5C21.1967 16.5 21.3875 16.421 21.5281 16.2803C21.6688 16.1396 21.7478 15.9489 21.7478 15.75V8.24997C21.7478 8.05106 21.6688 7.8603 21.5281 7.71965C21.3875 7.579 21.1967 7.49998 20.9978 7.49997Z'
      fill='currentColor'
    />
    <path
      d='M5.05499 3.24543C4.92118 3.09824 4.73437 3.01023 4.53567 3.00077C4.33697 2.99131 4.14265 3.06117 3.99545 3.19499C3.84826 3.3288 3.76025 3.51561 3.75079 3.71431C3.74133 3.91301 3.81119 4.10733 3.94501 4.25453L6.89543 7.49998H3C2.60231 7.50044 2.22105 7.65862 1.93984 7.93983C1.65864 8.22103 1.50045 8.6023 1.5 8.99998V15C1.50045 15.3977 1.65864 15.7789 1.93984 16.0601C2.22105 16.3413 2.60231 16.4995 3 16.5H7.24264L13.7896 21.592C13.9004 21.6782 14.0332 21.7315 14.1728 21.746C14.3125 21.7604 14.4534 21.7354 14.5795 21.6737C14.7056 21.612 14.8119 21.5162 14.8863 21.3971C14.9606 21.278 15 21.1404 15 21V16.415L18.945 20.7545C19.0113 20.8274 19.0912 20.8865 19.1803 20.9285C19.2694 20.9705 19.3659 20.9945 19.4643 20.9992C19.5627 21.0039 19.6611 20.9891 19.7538 20.9558C19.8464 20.9225 19.9317 20.8712 20.0045 20.805C20.0774 20.7387 20.1365 20.6588 20.1785 20.5696C20.2205 20.4805 20.2445 20.384 20.2492 20.2857C20.2539 20.1873 20.2391 20.0889 20.2058 19.9962C20.1725 19.9035 20.1212 19.8183 20.055 19.7454L5.05499 3.24543Z'
      fill='currentColor'
    />
    <path
      d='M13.6951 10.5198C13.7969 10.6318 13.9303 10.7103 14.0776 10.7451C14.2249 10.7799 14.3793 10.7694 14.5205 10.7148C14.6617 10.6602 14.7831 10.5641 14.8687 10.4393C14.9543 10.3144 15.0001 10.1666 15.0001 10.0152V2.99998C15.0001 2.85958 14.9607 2.722 14.8864 2.60289C14.812 2.48379 14.7058 2.38794 14.5796 2.32626C14.4535 2.26457 14.3126 2.23953 14.1729 2.25398C14.0333 2.26843 13.9005 2.3218 13.7897 2.408L10.0537 5.3137C9.97213 5.37713 9.90454 5.45674 9.85518 5.54754C9.80582 5.63833 9.77575 5.73834 9.76687 5.8413C9.75799 5.94426 9.77049 6.04794 9.80357 6.14585C9.83666 6.24375 9.88962 6.33376 9.95914 6.41022L13.6951 10.5198Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(SpeakerSimpleSlashSolid);
export default ForwardRef;