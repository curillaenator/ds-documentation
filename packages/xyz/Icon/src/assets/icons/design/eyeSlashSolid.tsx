import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const EyeSlashSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M23.1854 11.6962C23.1525 11.6221 22.3586 9.86098 20.5929 8.09509C18.2413 5.74316 15.2699 4.49995 12.0001 4.49995C11.3093 4.49918 10.6196 4.5554 9.93804 4.66804C9.80512 4.69023 9.68063 4.74783 9.57767 4.83477C9.47471 4.92171 9.39707 5.03478 9.35291 5.1621C9.30876 5.28943 9.29973 5.42629 9.32677 5.55832C9.3538 5.69034 9.41591 5.81264 9.50655 5.91235L19.0026 16.3581C19.1358 16.5046 19.3214 16.5925 19.5191 16.6026C19.7169 16.6127 19.9105 16.5443 20.058 16.4122C22.1967 14.4965 23.1461 12.394 23.1854 12.3054C23.228 12.2095 23.2501 12.1057 23.2501 12.0008C23.2501 11.8958 23.228 11.7921 23.1854 11.6962Z'
      fill='currentColor'
    />
    <path
      d='M5.05506 3.24542C4.92125 3.09823 4.73444 3.01022 4.53574 3.00076C4.33704 2.9913 4.14271 3.06116 3.99552 3.19497C3.84833 3.32879 3.76032 3.51559 3.75086 3.7143C3.7414 3.913 3.81126 4.10732 3.94508 4.25451L5.74894 6.23873C2.34385 8.32851 0.879913 11.5495 0.814705 11.6961C0.772103 11.792 0.750092 11.8958 0.750092 12.0007C0.750092 12.1056 0.772103 12.2094 0.814705 12.3053C0.847664 12.3794 1.64161 14.1402 3.4073 15.9057C5.75892 18.257 8.73026 19.5 12.0001 19.5C13.6806 19.5098 15.3441 19.1636 16.8812 18.4843L18.9451 20.7545C19.0789 20.9017 19.2657 20.9897 19.4644 20.9992C19.6631 21.0086 19.8574 20.9388 20.0046 20.805C20.1518 20.6711 20.2398 20.4843 20.2493 20.2856C20.2587 20.0869 20.1889 19.8926 20.0551 19.7454L5.05506 3.24542ZM12.0001 15.375C11.3832 15.3753 10.7781 15.2064 10.2505 14.8867C9.72294 14.567 9.2931 14.1089 9.00774 13.562C8.72239 13.0151 8.59244 12.4004 8.63202 11.7848C8.67161 11.1692 8.87922 10.5763 9.23227 10.0704L13.6577 14.9384C13.1523 15.225 12.5811 15.3755 12.0001 15.375Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(EyeSlashSolid);
export default ForwardRef;