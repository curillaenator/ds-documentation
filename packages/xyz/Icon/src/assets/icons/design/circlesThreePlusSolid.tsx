import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CirclesThreePlusSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.125 11.25C9.40317 11.25 11.25 9.40317 11.25 7.125C11.25 4.84683 9.40317 3 7.125 3C4.84683 3 3 4.84683 3 7.125C3 9.40317 4.84683 11.25 7.125 11.25Z'
      fill='currentColor'
    />
    <path
      d='M16.875 11.25C19.1532 11.25 21 9.40317 21 7.125C21 4.84683 19.1532 3 16.875 3C14.5968 3 12.75 4.84683 12.75 7.125C12.75 9.40317 14.5968 11.25 16.875 11.25Z'
      fill='currentColor'
    />
    <path
      d='M7.125 21C9.40317 21 11.25 19.1532 11.25 16.875C11.25 14.5968 9.40317 12.75 7.125 12.75C4.84683 12.75 3 14.5968 3 16.875C3 19.1532 4.84683 21 7.125 21Z'
      fill='currentColor'
    />
    <path
      d='M19.5 16.125H17.625V14.25C17.625 14.0511 17.546 13.8603 17.4053 13.7197C17.2647 13.579 17.0739 13.5 16.875 13.5C16.6761 13.5 16.4853 13.579 16.3447 13.7197C16.204 13.8603 16.125 14.0511 16.125 14.25V16.125H14.25C14.0511 16.125 13.8603 16.204 13.7197 16.3447C13.579 16.4853 13.5 16.6761 13.5 16.875C13.5 17.0739 13.579 17.2647 13.7197 17.4053C13.8603 17.546 14.0511 17.625 14.25 17.625H16.125V19.5C16.125 19.6989 16.204 19.8897 16.3447 20.0303C16.4853 20.171 16.6761 20.25 16.875 20.25C17.0739 20.25 17.2647 20.171 17.4053 20.0303C17.546 19.8897 17.625 19.6989 17.625 19.5V17.625H19.5C19.6989 17.625 19.8897 17.546 20.0303 17.4053C20.171 17.2647 20.25 17.0739 20.25 16.875C20.25 16.6761 20.171 16.4853 20.0303 16.3447C19.8897 16.204 19.6989 16.125 19.5 16.125Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CirclesThreePlusSolid);
export default ForwardRef;