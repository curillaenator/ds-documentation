import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BluetoothConnectedSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.7 15.9002L12.5001 12.0002L17.7 8.10028C17.7931 8.03041 17.8687 7.93982 17.9208 7.83567C17.9729 7.73152 18 7.61668 18 7.50024C18 7.3838 17.9729 7.26896 17.9208 7.16481C17.8687 7.06066 17.7931 6.97007 17.7 6.9002L11.7 2.4002C11.5886 2.31665 11.4561 2.26577 11.3173 2.25327C11.1786 2.24077 11.0392 2.26715 10.9146 2.32944C10.79 2.39173 10.6852 2.48748 10.612 2.60595C10.5388 2.72443 10.5 2.86096 10.5 3.00024V10.5002L5.69998 6.9002C5.62118 6.84111 5.53152 6.79812 5.43611 6.77368C5.34069 6.74924 5.2414 6.74383 5.1439 6.75777C4.94698 6.78591 4.76931 6.89112 4.64996 7.05026C4.53062 7.2094 4.47939 7.40943 4.50753 7.60635C4.53567 7.80326 4.64088 7.98094 4.80002 8.10028L9.99994 12.0002L4.80002 15.9002C4.64088 16.0195 4.53567 16.1972 4.50753 16.3941C4.47939 16.5911 4.53062 16.7911 4.64996 16.9502C4.76931 17.1094 4.94698 17.2146 5.1439 17.2427C5.34081 17.2709 5.54084 17.2196 5.69998 17.1003L10.5 13.5003V21.0002C10.5 21.1395 10.5388 21.276 10.612 21.3945C10.6852 21.513 10.79 21.6088 10.9146 21.671C11.0392 21.7333 11.1786 21.7597 11.3173 21.7472C11.4561 21.7347 11.5886 21.6838 11.7 21.6003L17.7 17.1003C17.7931 17.0304 17.8687 16.9398 17.9208 16.8357C17.9729 16.7315 18 16.6167 18 16.5002C18 16.3838 17.9729 16.269 17.9208 16.1648C17.8687 16.0607 17.7931 15.9701 17.7 15.9002V15.9002ZM12 4.50024L16 7.50024L12 10.5002V4.50024ZM12 19.5002V13.5002L16 16.5002L12 19.5002ZM19.5 12.0002C19.5 12.2227 19.434 12.4403 19.3104 12.6253C19.1868 12.8103 19.0111 12.9545 18.8055 13.0396C18.6 13.1248 18.3738 13.147 18.1555 13.1036C17.9373 13.0602 17.7368 12.9531 17.5795 12.7957C17.4222 12.6384 17.315 12.4379 17.2716 12.2197C17.2282 12.0015 17.2505 11.7753 17.3356 11.5697C17.4208 11.3642 17.565 11.1885 17.75 11.0648C17.935 10.9412 18.1525 10.8752 18.375 10.8752C18.6733 10.8756 18.9592 10.9942 19.1701 11.2051C19.381 11.416 19.4997 11.702 19.5 12.0002ZM4.875 13.1252C4.6525 13.1252 4.43499 13.0593 4.24998 12.9356C4.06498 12.812 3.92078 12.6363 3.83564 12.4308C3.75049 12.2252 3.72821 11.999 3.77162 11.7808C3.81503 11.5625 3.92217 11.3621 4.07951 11.2047C4.23684 11.0474 4.4373 10.9403 4.65552 10.8969C4.87375 10.8534 5.09995 10.8757 5.30552 10.9609C5.51109 11.046 5.68679 11.1902 5.8104 11.3752C5.93402 11.5602 6 11.7777 6 12.0002C5.99967 12.2985 5.88103 12.5845 5.67013 12.7954C5.45922 13.0063 5.17327 13.1249 4.875 13.1252Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BluetoothConnectedSolid);
export default ForwardRef;
