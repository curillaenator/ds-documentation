import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PuzzlePieceSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.5418 21.0001L19.4999 21C19.8975 20.9996 20.2788 20.8414 20.56 20.5602C20.8412 20.279 20.9994 19.8977 20.9998 19.5L20.9999 15.9702C20.9999 15.8469 20.9695 15.7254 20.9114 15.6167C20.8532 15.5079 20.7692 15.4152 20.6667 15.3466C20.5641 15.2781 20.4463 15.2359 20.3236 15.2238C20.2008 15.2117 20.077 15.2301 19.9631 15.2772C19.6974 15.3873 19.4125 15.4437 19.1249 15.4432C17.8843 15.4432 16.8749 14.4033 16.8749 13.125C16.8749 11.8467 17.8843 10.8068 19.1249 10.8068C19.4125 10.8063 19.6974 10.8627 19.9631 10.9728C20.077 11.02 20.2008 11.0383 20.3236 11.0262C20.4463 11.0141 20.5641 10.9719 20.6667 10.9034C20.7692 10.8348 20.8532 10.7421 20.9114 10.6333C20.9695 10.5246 20.9999 10.4031 20.9999 10.2798L20.9998 6.75C20.9994 6.35231 20.8412 5.97103 20.56 5.68982C20.2788 5.40861 19.8975 5.25044 19.4998 5.25L16.1045 5.25009C16.1181 5.12553 16.1249 5.00031 16.1249 4.875C16.1249 3.97989 15.7693 3.12145 15.1364 2.48851C14.5034 1.85558 13.645 1.5 12.7499 1.5C11.8548 1.5 10.9963 1.85558 10.3634 2.48851C9.73048 3.12145 9.3749 3.97989 9.3749 4.875C9.37485 5.00031 9.38167 5.12553 9.39532 5.25009L5.99992 5.25C5.60223 5.25045 5.22096 5.40863 4.93975 5.68983C4.65855 5.97104 4.50037 6.35231 4.49992 6.75L4.49997 9.77042C4.37542 9.75675 4.25022 9.74993 4.12492 9.75C3.22982 9.75 2.37138 10.1056 1.73845 10.7385C1.10552 11.3715 0.749939 12.2299 0.749939 13.125C0.749939 14.0201 1.10552 14.8786 1.73845 15.5115C2.37138 16.1444 3.22982 16.5 4.12492 16.5C4.25022 16.5001 4.37542 16.4933 4.49997 16.4796L4.49992 19.5C4.50037 19.8977 4.65854 20.2789 4.93973 20.5602C5.22093 20.8414 5.60219 20.9995 5.99987 21L9.95804 21.0001'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PuzzlePieceSolid);
export default ForwardRef;
