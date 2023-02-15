import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Competition = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1 13C1 6.37259 6.37258 1 13 1H113C119.627 1 125 6.37258 125 13V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
      fill='#E3F1FD'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M41 97C41 96.4477 41.4477 96 42 96H84C84.5523 96 85 96.4477 85 97V116C85 116.552 85.4477 117 86 117H124C124.552 117 125 117.448 125 118V155C125 161.627 119.627 167 113 167H13C6.37258 167 1 161.627 1 155V129C1 128.448 1.44772 128 2 128H40C40.5523 128 41 127.552 41 127V97Z'
      fill='#D3F1DB'
      stroke='#6BD087'
      strokeWidth={2}
      strokeLinejoin='round'
    />
    <path
      d='M1 13C1 6.37259 6.37258 1 13 1H113C119.627 1 125 6.37258 125 13V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M63 80C78.464 80 91 67.464 91 52C91 36.536 78.464 24 63 24C47.536 24 35 36.536 35 52C35 67.464 47.536 80 63 80Z'
      fill='#FDF0E4'
      stroke='#F2994A'
      strokeWidth={2}
    />
    <path
      d='M51.1875 40.1875V49.2267C51.1875 55.7401 56.3972 61.1389 62.9104 61.1872C64.4692 61.199 66.0148 60.9022 67.4583 60.3139C68.9018 59.7255 70.2146 58.8573 71.321 57.7593C72.4274 56.6613 73.3055 55.3551 73.9047 53.9161C74.504 52.4771 74.8125 50.9338 74.8125 49.375V40.1875C74.8125 39.8394 74.6742 39.5056 74.4281 39.2594C74.1819 39.0133 73.8481 38.875 73.5 38.875H52.5C52.1519 38.875 51.8181 39.0133 51.5719 39.2594C51.3258 39.5056 51.1875 39.8394 51.1875 40.1875Z'
      fill='#FBE0C9'
      stroke='#F2994A'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M57.75 67.75H68.25' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M63 61.1875V67.75' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M74.5195 52H76.1248C77.5172 52 78.8525 51.4469 79.8371 50.4623C80.8217 49.4777 81.3748 48.1424 81.3748 46.75V44.125C81.3748 43.7769 81.2365 43.4431 80.9904 43.1969C80.7442 42.9508 80.4104 42.8125 80.0623 42.8125H74.8123'
      stroke='#F2994A'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M51.5091 52H49.8535C48.4611 52 47.1258 51.4469 46.1412 50.4623C45.1566 49.4777 44.6035 48.1424 44.6035 46.75V44.125C44.6035 43.7769 44.7418 43.4431 44.9879 43.1969C45.2341 42.9508 45.5679 42.8125 45.916 42.8125H51.166'
      stroke='#F2994A'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M63 104V118' stroke='#6BD087' strokeWidth={2} strokeLinecap='round' />
    <path d='M101 125V139' stroke='#6BD087' strokeWidth={2} strokeLinecap='round' />
    <path d='M107 125V139' stroke='#6BD087' strokeWidth={2} strokeLinecap='round' />
    <path d='M16 135V149' stroke='#6BD087' strokeWidth={2} strokeLinecap='round' />
    <path d='M22 135V149' stroke='#6BD087' strokeWidth={2} strokeLinecap='round' />
    <path d='M28 135V149' stroke='#6BD087' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const ForwardRef = forwardRef(Competition);
export default ForwardRef;
