import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CloudFogSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 18.75H6.75C6.55109 18.75 6.36033 18.671 6.21967 18.5303C6.07902 18.3897 6 18.1989 6 18C6 17.8011 6.07902 17.6103 6.21967 17.4697C6.36033 17.329 6.55109 17.25 6.75 17.25H11.25C11.4489 17.25 11.6397 17.329 11.7803 17.4697C11.921 17.6103 12 17.8011 12 18C12 18.1989 11.921 18.3897 11.7803 18.5303C11.6397 18.671 11.4489 18.75 11.25 18.75ZM17.25 17.25H15C14.8011 17.25 14.6103 17.329 14.4697 17.4697C14.329 17.6103 14.25 17.8011 14.25 18C14.25 18.1989 14.329 18.3897 14.4697 18.5303C14.6103 18.671 14.8011 18.75 15 18.75H17.25C17.4489 18.75 17.6397 18.671 17.7803 18.5303C17.921 18.3897 18 18.1989 18 18C18 17.8011 17.921 17.6103 17.7803 17.4697C17.6397 17.329 17.4489 17.25 17.25 17.25ZM15 20.25H9.75C9.55109 20.25 9.36033 20.329 9.21967 20.4697C9.07902 20.6103 9 20.8011 9 21C9 21.1989 9.07902 21.3897 9.21967 21.5303C9.36033 21.671 9.55109 21.75 9.75 21.75H15C15.1989 21.75 15.3897 21.671 15.5303 21.5303C15.671 21.3897 15.75 21.1989 15.75 21C15.75 20.8011 15.671 20.6103 15.5303 20.4697C15.3897 20.329 15.1989 20.25 15 20.25ZM14.625 1.5C13.184 1.50164 11.7773 1.93941 10.5899 2.75571C9.40241 3.57202 8.48986 4.72864 7.97223 6.07343C7.30646 5.95599 6.62353 5.9783 5.96684 6.13895C5.31015 6.2996 4.69404 6.59507 4.15767 7.00659C3.62129 7.41812 3.17636 7.9367 2.85115 8.52939C2.52594 9.12209 2.32755 9.77594 2.26858 10.4494C2.20961 11.1229 2.29136 11.8013 2.50863 12.4415C2.7259 13.0817 3.07394 13.6697 3.53064 14.1681C3.98734 14.6666 4.54273 15.0647 5.16151 15.337C5.78029 15.6093 6.44895 15.75 7.125 15.75H14.625C16.5147 15.75 18.3269 14.9993 19.6631 13.6631C20.9993 12.3269 21.75 10.5147 21.75 8.625C21.75 6.73533 20.9993 4.92306 19.6631 3.58686C18.3269 2.25067 16.5147 1.5 14.625 1.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CloudFogSolid);
export default ForwardRef;