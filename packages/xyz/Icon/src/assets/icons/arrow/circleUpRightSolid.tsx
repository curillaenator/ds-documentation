import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CircleUpRightSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.8946 5.10523C17.531 3.74167 15.7937 2.81307 13.9024 2.43686C12.0111 2.06065 10.0507 2.25374 8.26911 2.99169C6.48753 3.72964 4.96479 4.97933 3.89345 6.58271C2.8221 8.18608 2.25027 10.0711 2.25027 11.9995C2.25027 13.9279 2.8221 15.8129 3.89345 17.4163C4.96479 19.0197 6.48753 20.2694 8.26911 21.0073C10.0507 21.7453 12.0111 21.9384 13.9024 21.5622C15.7937 21.186 17.531 20.2574 18.8946 18.8938C20.7206 17.064 21.7461 14.5845 21.7461 11.9995C21.7461 9.41448 20.7206 6.93503 18.8946 5.10523ZM15.3745 13.8745C15.3745 14.0734 15.2955 14.2642 15.1549 14.4048C15.0142 14.5455 14.8235 14.6245 14.6245 14.6245C14.4256 14.6245 14.2349 14.5455 14.0942 14.4048C13.9536 14.2642 13.8745 14.0734 13.8745 13.8745V11.1851L9.90482 15.1548C9.76413 15.2952 9.57347 15.374 9.37471 15.3739C9.17596 15.3738 8.98538 15.2948 8.84484 15.1542C8.7043 15.0137 8.6253 14.8231 8.62519 14.6244C8.62509 14.4256 8.70389 14.2349 8.84428 14.0942L12.814 10.1245H10.1245C9.92564 10.1245 9.73487 10.0455 9.59422 9.90485C9.45357 9.7642 9.37455 9.57343 9.37455 9.37452C9.37455 9.17561 9.45357 8.98484 9.59422 8.84419C9.73487 8.70354 9.92564 8.62452 10.1245 8.62452H14.6245C14.8232 8.6252 15.0136 8.70443 15.1541 8.84494C15.2946 8.98545 15.3739 9.17582 15.3745 9.37452V13.8745Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CircleUpRightSolid);
export default ForwardRef;