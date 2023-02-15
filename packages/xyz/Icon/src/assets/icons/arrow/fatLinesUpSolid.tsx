import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FatLinesUpSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.6929 11.537C21.6362 11.674 21.54 11.7911 21.4167 11.8736C21.2934 11.956 21.1483 12 21 12H17.25V14.25C17.25 14.4489 17.171 14.6396 17.0303 14.7803C16.8897 14.9209 16.6989 15 16.5 15H7.50001C7.3011 15 7.11034 14.9209 6.96968 14.7803C6.82903 14.6396 6.75001 14.4489 6.75001 14.25V12H3.00001C2.85167 12 2.70666 11.956 2.58332 11.8736C2.45998 11.7911 2.36385 11.674 2.30709 11.5369C2.25032 11.3999 2.23547 11.2491 2.26442 11.1036C2.29336 10.9581 2.3648 10.8245 2.46969 10.7196L11.4697 1.71959C11.6104 1.57898 11.8011 1.5 12 1.5C12.1989 1.5 12.3897 1.57898 12.5303 1.71959L21.5303 10.7196C21.6352 10.8245 21.7067 10.9581 21.7356 11.1036C21.7645 11.2491 21.7497 11.3999 21.6929 11.537ZM16.5 19.5H7.50001C7.3011 19.5 7.11033 19.579 6.96968 19.7196C6.82903 19.8603 6.75001 20.051 6.75001 20.25C6.75001 20.4489 6.82903 20.6396 6.96968 20.7803C7.11033 20.9209 7.3011 21 7.50001 21H16.5C16.6989 21 16.8897 20.9209 17.0303 20.7803C17.171 20.6396 17.25 20.4489 17.25 20.25C17.25 20.051 17.171 19.8603 17.0303 19.7196C16.8897 19.579 16.6989 19.5 16.5 19.5ZM16.5 16.5H7.50001C7.3011 16.5 7.11033 16.579 6.96968 16.7196C6.82903 16.8603 6.75001 17.051 6.75001 17.25C6.75001 17.4489 6.82903 17.6396 6.96968 17.7803C7.11033 17.9209 7.3011 18 7.50001 18H16.5C16.6989 18 16.8897 17.9209 17.0303 17.7803C17.171 17.6396 17.25 17.4489 17.25 17.25C17.25 17.051 17.171 16.8603 17.0303 16.7196C16.8897 16.579 16.6989 16.5 16.5 16.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FatLinesUpSolid);
export default ForwardRef;
