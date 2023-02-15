import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberEightSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.4908 12.1875C16.0344 11.7594 15.5175 11.4007 14.9567 11.1229C15.2877 10.9234 15.5968 10.6896 15.8789 10.4254C16.3928 9.9544 16.8032 9.38164 17.0839 8.74354C17.3647 8.10543 17.5096 7.41591 17.5096 6.71878C17.5096 6.02165 17.3647 5.33213 17.0839 4.69402C16.8032 4.05592 16.3928 3.48316 15.8789 3.01213C14.8212 2.03968 13.4368 1.5 12 1.5C10.5632 1.5 9.1788 2.03968 8.12109 3.01213C7.60716 3.48316 7.1968 4.05592 6.91606 4.69402C6.63533 5.33213 6.49035 6.02165 6.49035 6.71878C6.49035 7.41591 6.63533 8.10543 6.91606 8.74354C7.1968 9.38164 7.60716 9.9544 8.12109 10.4254C8.40317 10.6896 8.71227 10.9234 9.04328 11.1229C8.4825 11.4007 7.9656 11.7594 7.50915 12.1876C6.91538 12.7315 6.44124 13.393 6.11687 14.1301C5.79251 14.8671 5.625 15.6635 5.625 16.4688C5.625 17.274 5.79251 18.0705 6.11687 18.8075C6.44124 19.5445 6.91538 20.206 7.50915 20.75C8.73392 21.8754 10.3366 22.5 12 22.5C13.6634 22.5 15.2661 21.8754 16.4908 20.7499C17.0846 20.206 17.5588 19.5445 17.8831 18.8075C18.2075 18.0704 18.375 17.274 18.375 16.4687C18.375 15.6635 18.2075 14.867 17.8831 14.13C17.5588 13.393 17.0846 12.7315 16.4908 12.1875V12.1875ZM9.14776 9.33184C8.78326 9.00109 8.49198 8.59774 8.29266 8.14771C8.09333 7.69769 7.99035 7.21093 7.99035 6.71874C7.99035 6.22654 8.09333 5.73979 8.29266 5.28976C8.49198 4.83974 8.78326 4.43639 9.14776 4.10564C9.92738 3.39434 10.9446 3 12 3C13.0553 3 14.0726 3.39434 14.8522 4.10564C15.2167 4.43639 15.508 4.83974 15.7073 5.28976C15.9067 5.73979 16.0096 6.22654 16.0096 6.71874C16.0096 7.21093 15.9067 7.69769 15.7073 8.14771C15.508 8.59774 15.2167 9.00109 14.8522 9.33184C14.0726 10.0432 13.0554 10.4375 12 10.4375C10.9446 10.4375 9.92737 10.0432 9.14776 9.33184ZM15.4642 19.6564C14.5175 20.5207 13.2819 21 12 21C10.7181 21 9.48249 20.5208 8.53583 19.6564C8.09148 19.2528 7.73643 18.7607 7.49347 18.2117C7.25051 17.6628 7.125 17.0691 7.125 16.4688C7.125 15.8685 7.25051 15.2748 7.49347 14.7258C7.73643 14.1769 8.09148 13.6848 8.53583 13.2811C9.48248 12.4168 10.7181 11.9375 12 11.9375C13.2819 11.9375 14.5175 12.4167 15.4642 13.2811C15.9085 13.6847 16.2636 14.1768 16.5065 14.7258C16.7495 15.2747 16.875 15.8684 16.875 16.4687C16.875 17.0691 16.7495 17.6627 16.5065 18.2117C16.2636 18.7606 15.9085 19.2527 15.4642 19.6564Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberEightSolid);
export default ForwardRef;
