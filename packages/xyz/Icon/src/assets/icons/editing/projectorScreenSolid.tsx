import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ProjectorScreenSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.7497 5.99991V4.49994C21.7492 4.10226 21.5911 3.721 21.3099 3.43979C21.0287 3.15859 20.6474 3.00041 20.2497 2.99996H3.74995C3.35227 3.00041 2.97101 3.15859 2.6898 3.43979C2.4086 3.721 2.25042 4.10226 2.24997 4.49994V5.99991C2.25042 6.39759 2.4086 6.77886 2.6898 7.06006C2.97101 7.34126 3.35227 7.49944 3.74995 7.49989V16.4998H2.99996C2.80105 16.4998 2.61029 16.5788 2.46963 16.7194C2.32898 16.8601 2.24997 17.0508 2.24997 17.2498C2.24997 17.4487 2.32898 17.6394 2.46963 17.7801C2.61029 17.9207 2.80105 17.9997 2.99996 17.9997H11.2498V19.6287C10.7494 19.8057 10.3277 20.1538 10.0591 20.6116C9.79058 21.0694 9.69251 21.6074 9.78226 22.1305C9.87202 22.6536 10.1438 23.1282 10.5496 23.4703C10.9554 23.8124 11.4691 24 11.9998 24C12.5306 24 13.0443 23.8124 13.4501 23.4703C13.8559 23.1282 14.1276 22.6536 14.2174 22.1305C14.3071 21.6074 14.2091 21.0694 13.9405 20.6116C13.672 20.1538 13.2502 19.8057 12.7498 19.6287V17.9997H20.9997C21.1986 17.9997 21.3894 17.9207 21.53 17.7801C21.6707 17.6394 21.7497 17.4487 21.7497 17.2498C21.7497 17.0508 21.6707 16.8601 21.53 16.7194C21.3894 16.5788 21.1986 16.4998 20.9997 16.4998H20.2497V7.49989C20.6474 7.49944 21.0287 7.34126 21.3099 7.06006C21.5911 6.77886 21.7492 6.39759 21.7497 5.99991ZM11.9998 22.4997C11.8515 22.4997 11.7065 22.4557 11.5832 22.3733C11.4598 22.2909 11.3637 22.1737 11.3069 22.0367C11.2502 21.8997 11.2353 21.7489 11.2643 21.6034C11.2932 21.4579 11.3646 21.3243 11.4695 21.2194C11.5744 21.1145 11.708 21.0431 11.8535 21.0141C11.999 20.9852 12.1498 21 12.2868 21.0568C12.4239 21.1136 12.541 21.2097 12.6234 21.333C12.7058 21.4564 12.7498 21.6014 12.7498 21.7497C12.7496 21.9485 12.6705 22.1392 12.5299 22.2798C12.3893 22.4204 12.1987 22.4995 11.9998 22.4997ZM3.74995 4.49994H20.2497L20.2506 5.99991H3.74995V4.49994Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ProjectorScreenSolid);
export default ForwardRef;
