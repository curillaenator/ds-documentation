import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SpeakerLowSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.5795 2.32708C14.4534 2.26538 14.3125 2.24032 14.1728 2.25478C14.0332 2.26923 13.9004 2.32261 13.7896 2.40884L7.24264 7.50082H3C2.60231 7.50128 2.22105 7.65946 1.93984 7.94066C1.65864 8.22187 1.50045 8.60314 1.5 9.00082V15.0008C1.50045 15.3985 1.65864 15.7798 1.93984 16.061C2.22105 16.3422 2.60231 16.5004 3 16.5008H7.24265L13.7896 21.5928C13.9004 21.679 14.0332 21.7324 14.1728 21.7468C14.3125 21.7613 14.4534 21.7362 14.5795 21.6745C14.7057 21.6129 14.8119 21.517 14.8863 21.3979C14.9606 21.2788 15 21.1412 15 21.0008V3.00082C15 2.86042 14.9606 2.72283 14.8862 2.60372C14.8119 2.48461 14.7056 2.38877 14.5795 2.32708ZM3 9.00082H6.74725V15.0008H3V9.00082Z'
      fill='currentColor'
    />
    <path
      d='M18.4016 9.34931C18.2609 9.20882 18.0702 9.12994 17.8714 9.13002C17.6726 9.1301 17.4819 9.20913 17.3413 9.34973C17.2007 9.49033 17.1217 9.681 17.1217 9.87983C17.1217 10.0787 17.2006 10.2694 17.3411 10.41C17.55 10.6189 17.7157 10.867 17.8288 11.1399C17.9419 11.4129 18.0001 11.7055 18.0001 12.0009C18.0001 12.2964 17.9419 12.5889 17.8288 12.8619C17.7157 13.1349 17.55 13.3829 17.3411 13.5918C17.2714 13.6614 17.2162 13.7441 17.1785 13.8351C17.1408 13.9261 17.1214 14.0236 17.1214 14.1221C17.1214 14.2206 17.1407 14.3181 17.1784 14.4091C17.2161 14.5001 17.2714 14.5828 17.341 14.6524C17.4106 14.7221 17.4933 14.7773 17.5843 14.815C17.6753 14.8527 17.7728 14.8721 17.8713 14.8721C17.9698 14.8722 18.0673 14.8528 18.1583 14.8151C18.2493 14.7774 18.332 14.7222 18.4016 14.6525C18.7499 14.3043 19.0261 13.8909 19.2146 13.436C19.4031 12.981 19.5001 12.4934 19.5001 12.0009C19.5001 11.5085 19.4031 11.0208 19.2146 10.5659C19.0261 10.1109 18.7499 9.6975 18.4016 9.34931Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(SpeakerLowSolid);
export default ForwardRef;