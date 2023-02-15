import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RotateRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <mask id='path-1-inside-1' fill='white'>
      <path d='M11 10.4583V20.5417C11 20.7948 10.7985 21 10.55 21H2.45C2.20147 21 2 20.7948 2 20.5417L2 10.4583C2 10.2052 2.20147 10 2.45 10L10.55 10C10.7985 10 11 10.2052 11 10.4583Z' />
      <path d='M18.5673 16.5794C18.5778 16.5864 18.5888 16.5925 18.5996 16.599C18.6098 16.6051 18.6198 16.6115 18.6303 16.6171C18.6412 16.623 18.6524 16.6279 18.6635 16.6331C18.6746 16.6384 18.6855 16.6439 18.6968 16.6486C18.7075 16.653 18.7183 16.6565 18.7291 16.6604C18.7414 16.6649 18.7536 16.6696 18.7662 16.6734C18.7767 16.6765 18.7872 16.6788 18.7977 16.6815C18.8109 16.6849 18.824 16.6885 18.8375 16.6912C18.849 16.6935 18.8606 16.6948 18.8721 16.6965C18.8848 16.6984 18.8973 16.7007 18.9102 16.702C18.9275 16.7037 18.9449 16.7041 18.9623 16.7046C18.9695 16.7048 18.9765 16.7057 18.9837 16.7057C18.9912 16.7057 18.9984 16.7048 19.0058 16.7046C19.0229 16.7041 19.0401 16.7037 19.0571 16.702C19.0705 16.7007 19.0835 16.6983 19.0967 16.6963C19.1077 16.6946 19.1188 16.6934 19.1297 16.6913C19.1437 16.6885 19.1573 16.6847 19.1711 16.6812C19.181 16.6786 19.191 16.6765 19.2009 16.6735C19.2141 16.6695 19.2268 16.6646 19.2396 16.66C19.2499 16.6562 19.2602 16.6529 19.2703 16.6487C19.2822 16.6438 19.2936 16.6381 19.3051 16.6326C19.3157 16.6275 19.3265 16.6228 19.3369 16.6172C19.348 16.6113 19.3586 16.6045 19.3694 16.598C19.3796 16.5919 19.3899 16.5862 19.3999 16.5795C19.4119 16.5715 19.4233 16.5626 19.4348 16.5538C19.4428 16.5478 19.4511 16.5423 19.4589 16.5358C19.4782 16.5201 19.4967 16.5033 19.5144 16.4857L22.696 13.304C22.8366 13.1634 22.9157 12.9726 22.9157 12.7737C22.9157 12.5748 22.8366 12.384 22.696 12.2434C22.5553 12.1027 22.3646 12.0237 22.1657 12.0237C21.9668 12.0237 21.776 12.1027 21.6353 12.2434L19.7337 14.145L19.7337 11.4556C19.731 9.06951 18.7819 6.7819 17.0946 5.09466C15.4074 3.40741 13.1198 2.45831 10.7337 2.45557C10.6352 2.45557 10.5376 2.47497 10.4466 2.51266C10.3556 2.55035 10.2729 2.6056 10.2033 2.67525C10.1336 2.7449 10.0784 2.82758 10.0407 2.91858C10.003 3.00958 9.98361 3.10712 9.98361 3.20562C9.98361 3.30411 10.003 3.40165 10.0407 3.49265C10.0784 3.58365 10.1336 3.66633 10.2033 3.73598C10.2729 3.80563 10.3556 3.86088 10.4466 3.89857C10.5376 3.93626 10.6352 3.95566 10.7337 3.95566C12.7221 3.95785 14.6285 4.74872 16.0345 6.15477C17.4406 7.56081 18.2315 9.46719 18.2336 11.4556L18.2336 14.145L16.332 12.2434C16.1914 12.1027 16.0006 12.0237 15.8017 12.0237C15.6028 12.0237 15.412 12.1027 15.2714 12.2434C15.1307 12.384 15.0517 12.5748 15.0517 12.7737C15.0517 12.9726 15.1307 13.1634 15.2714 13.304L18.4534 16.486C18.4708 16.5035 18.4892 16.52 18.5083 16.5357C18.5169 16.5428 18.526 16.5489 18.5348 16.5555C18.5456 16.5636 18.5561 16.5719 18.5673 16.5794Z' />
    </mask>
    <path
      d='M11 20.5417H12.6H11ZM11 10.4583H9.4H11ZM10.55 10V11.6V10ZM2.45 10L2.45 8.40001L2.45 10ZM2 10.4583H3.6H2ZM2 20.5417H0.4H2ZM2.45 21L2.45 22.6H2.45V21ZM10.55 21V19.4V21ZM18.5673 16.5794L17.6777 17.9093L17.6778 17.9093L18.5673 16.5794ZM18.5996 16.599L19.4214 15.2262L19.4204 15.2256L18.5996 16.599ZM18.6303 16.6171L17.8753 18.0278L17.8757 18.028L18.6303 16.6171ZM18.6635 16.6331L19.3482 15.1871L19.3465 15.1862L18.6635 16.6331ZM18.6968 16.6486L18.0841 18.1266L18.0854 18.1272L18.6968 16.6486ZM18.7291 16.6604L19.2741 15.1561L19.2707 15.1549L18.7291 16.6604ZM18.7662 16.6734L19.2299 15.142L19.2291 15.1418L18.7662 16.6734ZM18.7977 16.6815L19.1948 15.1316L19.1926 15.131L18.7977 16.6815ZM18.8375 16.6912L18.5272 18.2608L18.5278 18.261L18.8375 16.6912ZM18.8721 16.6965L19.1091 15.1141L19.1089 15.1141L18.8721 16.6965ZM18.9102 16.702L19.067 15.1097L19.0654 15.1095L18.9102 16.702ZM18.9623 16.7046L18.9176 18.304L18.918 18.304L18.9623 16.7046ZM18.9837 16.7057L18.9819 18.3057H18.9837L18.9837 16.7057ZM19.0058 16.7046L19.052 18.3039L19.0531 18.3039L19.0058 16.7046ZM19.0571 16.702L18.902 15.1095L18.901 15.1096L19.0571 16.702ZM19.0967 16.6963L18.8579 15.1142L18.8566 15.1144L19.0967 16.6963ZM19.1297 16.6913L18.8211 15.1213L18.8192 15.1217L19.1297 16.6913ZM19.1711 16.6812L19.57 18.2306L19.5712 18.2303L19.1711 16.6812ZM19.2009 16.6735L19.6626 18.2054L19.6649 18.2047L19.2009 16.6735ZM19.2396 16.66L18.694 15.1559L18.6923 15.1565L19.2396 16.66ZM19.2703 16.6487L19.8797 18.1281L19.8842 18.1263L19.2703 16.6487ZM19.3051 16.6326L18.618 15.1876L18.6172 15.188L19.3051 16.6326ZM19.3369 16.6172L20.091 18.0284L20.0914 18.0282L19.3369 16.6172ZM19.3694 16.598L20.1938 17.9693L20.1951 17.9685L19.3694 16.598ZM19.3999 16.5795L20.2888 17.9099L20.2899 17.9091L19.3999 16.5795ZM19.4348 16.5538L20.3995 17.8303L20.4005 17.8296L19.4348 16.5538ZM19.4589 16.5358L18.4463 15.297L18.443 15.2997L19.4589 16.5358ZM19.5144 16.4857L20.6456 17.6171L20.6457 17.617L19.5144 16.4857ZM22.696 13.304L21.5646 12.1727L22.696 13.304ZM22.9157 12.7737H21.3157H22.9157ZM22.1657 12.0237V13.6237V12.0237ZM21.6353 12.2434L20.504 11.112L21.6353 12.2434ZM19.7337 14.145L18.1337 14.145L18.1337 18.0077L20.8651 15.2763L19.7337 14.145ZM19.7337 11.4556L21.3337 11.4556L21.3337 11.4538L19.7337 11.4556ZM10.7337 2.45557L10.7355 0.855566H10.7337L10.7337 2.45557ZM10.4466 2.51266L9.83436 1.03444L9.83433 1.03445L10.4466 2.51266ZM10.0407 2.91858L8.5625 2.30628L8.56249 2.30631L10.0407 2.91858ZM9.98361 3.20562L11.5836 3.20563V3.20561L9.98361 3.20562ZM10.0407 3.49265L11.5189 2.88036L11.5189 2.88035L10.0407 3.49265ZM10.7337 3.95566L10.7354 2.35566H10.7337L10.7337 3.95566ZM18.2336 11.4556L19.8336 11.4556L19.8336 11.4539L18.2336 11.4556ZM18.2336 14.145L17.1023 15.2763L19.8336 18.0077L19.8336 14.145L18.2336 14.145ZM15.8017 12.0237V13.6237H15.8017L15.8017 12.0237ZM15.0517 12.7737L16.6517 12.7737V12.7737H15.0517ZM18.5083 16.5357L19.5239 15.2993L19.523 15.2986L18.5083 16.5357ZM18.5348 16.5555L19.4949 15.2755L19.4946 15.2753L18.5348 16.5555ZM12.6 20.5417V10.4583H9.4V20.5417H12.6ZM12.6 10.4583C12.6 9.34936 11.7097 8.40001 10.55 8.40001V11.6C9.88732 11.6 9.4 11.0611 9.4 10.4583H12.6ZM10.55 8.40001L2.45 8.40001L2.45 11.6L10.55 11.6V8.40001ZM2.45 8.40001C1.29027 8.40001 0.4 9.34936 0.4 10.4583H3.6C3.6 11.0611 3.11267 11.6 2.45 11.6L2.45 8.40001ZM0.4 10.4583L0.4 20.5417H3.6L3.6 10.4583H0.4ZM0.4 20.5417C0.4 21.6507 1.29026 22.6 2.45 22.6L2.45 19.4C3.11268 19.4 3.6 19.939 3.6 20.5417H0.4ZM2.45 22.6H10.55V19.4H2.45V22.6ZM10.55 22.6C11.7097 22.6 12.6 21.6507 12.6 20.5417H9.4C9.4 19.939 9.88732 19.4 10.55 19.4V22.6ZM17.6778 17.9093C17.7167 17.9354 17.7493 17.9549 17.7649 17.9643C17.7726 17.9688 17.7799 17.9731 17.7813 17.9739C17.7843 17.9757 17.7821 17.9744 17.7788 17.9724L19.4204 15.2256C19.4117 15.2204 19.404 15.2159 19.4016 15.2145C19.3976 15.2121 19.3994 15.2132 19.4017 15.2145C19.4065 15.2174 19.4284 15.2304 19.4568 15.2494L17.6778 17.9093ZM17.7777 17.9718C17.7739 17.9695 17.7714 17.9679 17.7738 17.9694C17.7746 17.9699 17.7815 17.9741 17.7885 17.9784C17.803 17.9871 17.8349 18.0062 17.8753 18.0278L19.3853 15.2065C19.4009 15.2148 19.4136 15.222 19.4228 15.2273C19.4318 15.2325 19.4384 15.2365 19.4411 15.2381C19.443 15.2393 19.4449 15.2404 19.4406 15.2378C19.4379 15.2362 19.4303 15.2315 19.4214 15.2262L17.7777 17.9718ZM17.8757 18.028C17.9156 18.0493 17.9487 18.0651 17.965 18.0728C17.973 18.0766 17.9805 18.08 17.9822 18.0808C17.9856 18.0824 17.9835 18.0815 17.9806 18.0801L19.3465 15.1862C19.338 15.1822 19.3304 15.1787 19.3281 15.1777C19.3243 15.1759 19.3262 15.1767 19.3287 15.1779C19.3338 15.1803 19.3559 15.1907 19.3848 15.2062L17.8757 18.028ZM17.9788 18.0792C17.9759 18.0779 17.974 18.0769 17.9773 18.0785C17.979 18.0793 17.9862 18.0828 17.9941 18.0866C18.0101 18.0941 18.0429 18.1095 18.0841 18.1266L19.3096 15.1706C19.3395 15.183 19.3612 15.1933 19.366 15.1956C19.3684 15.1967 19.3702 15.1975 19.3664 15.1957C19.3641 15.1946 19.3567 15.191 19.3482 15.1871L17.9788 18.0792ZM18.0854 18.1272C18.127 18.1444 18.1612 18.1566 18.1767 18.1622C18.1841 18.1648 18.1916 18.1674 18.1923 18.1677C18.1947 18.1685 18.1917 18.1675 18.1874 18.1659L19.2707 15.1549C19.261 15.1514 19.2527 15.1485 19.2497 15.1474C19.245 15.1458 19.2471 15.1465 19.2492 15.1472C19.2521 15.1483 19.2593 15.1509 19.2689 15.1545C19.2786 15.1581 19.2921 15.1634 19.3083 15.17L18.0854 18.1272ZM18.1841 18.1647C18.183 18.1643 18.1819 18.1639 18.1868 18.1657C18.1901 18.1669 18.1982 18.1699 18.2075 18.1732C18.2261 18.1799 18.2606 18.192 18.3034 18.205L19.2291 15.1418C19.2593 15.1509 19.2814 15.1588 19.2876 15.161C19.2908 15.1622 19.2927 15.1629 19.2898 15.1618C19.2886 15.1614 19.2813 15.1587 19.274 15.1561L18.1841 18.1647ZM18.3026 18.2048C18.3471 18.2182 18.3834 18.2273 18.3981 18.2309C18.4022 18.2319 18.4057 18.2328 18.4079 18.2333C18.409 18.2336 18.41 18.2338 18.4106 18.234C18.4114 18.2341 18.4117 18.2342 18.4119 18.2343C18.4134 18.2346 18.409 18.2336 18.4028 18.232L19.1926 15.131C19.1812 15.1281 19.1716 15.1258 19.1677 15.1248C19.1667 15.1246 19.1657 15.1243 19.1651 15.1242C19.1644 15.124 19.1641 15.1239 19.1639 15.1239C19.1635 15.1238 19.1643 15.124 19.1658 15.1244C19.1686 15.125 19.1763 15.127 19.1867 15.1297C19.1972 15.1325 19.212 15.1366 19.2299 15.142L18.3026 18.2048ZM18.4007 18.2315C18.3994 18.2311 18.3981 18.2308 18.4033 18.2321C18.4067 18.233 18.4153 18.2353 18.4252 18.2378C18.445 18.2428 18.4817 18.2518 18.5272 18.2608L19.1479 15.1216C19.1798 15.1279 19.2033 15.1338 19.2098 15.1355C19.2131 15.1363 19.2151 15.1368 19.212 15.136C19.2105 15.1356 19.2027 15.1336 19.1948 15.1316L18.4007 18.2315ZM18.5278 18.261C18.5751 18.2703 18.6136 18.2759 18.6294 18.2781C18.6338 18.2787 18.6375 18.2792 18.6399 18.2796C18.6411 18.2797 18.6422 18.2799 18.6429 18.28C18.6437 18.2801 18.6441 18.2802 18.6444 18.2802C18.646 18.2804 18.6417 18.2798 18.6353 18.2789L19.1089 15.1141C19.0968 15.1123 19.0866 15.1109 19.0825 15.1103C19.0814 15.1102 19.0803 15.11 19.0797 15.1099C19.0789 15.1098 19.0786 15.1098 19.0783 15.1097C19.0778 15.1097 19.0787 15.1098 19.0801 15.11C19.083 15.1104 19.091 15.1116 19.1018 15.1133C19.1128 15.1151 19.1284 15.1178 19.1472 15.1215L18.5278 18.261ZM18.6352 18.2789C18.6296 18.278 18.6258 18.2774 18.6284 18.2778C18.6287 18.2779 18.6376 18.2793 18.6461 18.2806C18.6642 18.2834 18.7046 18.2895 18.7549 18.2944L19.0654 15.1095C19.0849 15.1114 19.1011 15.1134 19.1127 15.115C19.1242 15.1165 19.1327 15.1178 19.136 15.1183C19.1382 15.1187 19.1408 15.1191 19.1348 15.1181C19.1311 15.1175 19.121 15.1159 19.1091 15.1141L18.6352 18.2789ZM18.7533 18.2943C18.837 18.3025 18.9132 18.3039 18.9176 18.304L19.0071 15.1053C19.0043 15.1052 19.0031 15.1051 19.0015 15.1051C19.0009 15.1051 19.0005 15.1051 19.0002 15.1051C18.9998 15.1051 18.9997 15.1051 18.9997 15.1051C18.9997 15.1051 18.9999 15.1051 19.0002 15.1051C19.0005 15.1051 19.001 15.1051 19.0016 15.1051C19.0029 15.1052 19.0048 15.1052 19.0073 15.1053C19.0164 15.1058 19.0381 15.1068 19.067 15.1097L18.7533 18.2943ZM18.918 18.304C18.8948 18.3034 18.8767 18.3023 18.868 18.3018C18.8635 18.3015 18.8602 18.3013 18.8594 18.3012C18.859 18.3012 18.8588 18.3012 18.8593 18.3012C18.8596 18.3012 18.8607 18.3013 18.862 18.3014C18.8662 18.3017 18.8814 18.3028 18.9003 18.3037C18.92 18.3046 18.9482 18.3057 18.9819 18.3057L18.9854 15.1057C19.0156 15.1058 19.0402 15.1067 19.0563 15.1075C19.0645 15.1079 19.0711 15.1083 19.0757 15.1086C19.0801 15.1088 19.0833 15.1091 19.084 15.1091C19.0843 15.1091 19.0846 15.1091 19.084 15.1091C19.0837 15.1091 19.0825 15.109 19.0812 15.1089C19.0787 15.1087 19.0736 15.1084 19.0674 15.108C19.0551 15.1072 19.0335 15.106 19.0067 15.1052L18.918 18.304ZM18.9837 18.3057C19.0174 18.3057 19.0455 18.3047 19.0653 18.3038C19.0844 18.3029 19.0998 18.3018 19.1044 18.3015C19.1057 18.3014 19.1069 18.3013 19.1073 18.3013C19.108 18.3012 19.1078 18.3012 19.1075 18.3013C19.107 18.3013 19.104 18.3015 19.0998 18.3018C19.0917 18.3023 19.0744 18.3033 19.052 18.3039L18.9596 15.1053C18.9336 15.106 18.9126 15.1072 18.9008 15.108C18.8948 15.1083 18.8899 15.1087 18.8875 15.1088C18.8864 15.1089 18.8852 15.109 18.885 15.109C18.8845 15.109 18.8848 15.109 18.8852 15.109C18.886 15.1089 18.8893 15.1087 18.8938 15.1084C18.8983 15.1082 18.905 15.1078 18.9132 15.1074C18.9293 15.1066 18.9537 15.1057 18.9837 15.1057L18.9837 18.3057ZM19.0531 18.3039C19.0536 18.3039 19.1306 18.3025 19.2132 18.2944L18.901 15.1096C18.9302 15.1068 18.952 15.1057 18.9607 15.1053C18.9652 15.1051 18.9679 15.105 18.9673 15.105C18.9658 15.1051 18.9653 15.1051 18.9586 15.1053L19.0531 18.3039ZM19.2123 18.2945C19.2621 18.2896 19.3022 18.2836 19.3212 18.2807C19.3305 18.2792 19.3393 18.2778 19.3408 18.2776C19.3442 18.277 19.3412 18.2775 19.3368 18.2782L18.8566 15.1144C18.8456 15.1161 18.8361 15.1176 18.8329 15.1181C18.8278 15.1189 18.8301 15.1186 18.8327 15.1182C18.8363 15.1176 18.8446 15.1163 18.8559 15.1148C18.8673 15.1133 18.883 15.1114 18.902 15.1095L19.2123 18.2945ZM19.3355 18.2784C19.3281 18.2795 19.3229 18.2802 19.324 18.28C19.3261 18.2798 19.3235 18.2801 19.3277 18.2795C19.3298 18.2792 19.3334 18.2787 19.3377 18.2781C19.3529 18.276 19.392 18.2704 19.4402 18.2608L18.8192 15.1217C18.8387 15.1178 18.855 15.115 18.8664 15.1132C18.8776 15.1114 18.8859 15.1102 18.8888 15.1098C18.8903 15.1096 18.8911 15.1095 18.8905 15.1095C18.8902 15.1096 18.8899 15.1096 18.889 15.1097C18.8883 15.1098 18.8872 15.11 18.886 15.1102C18.8815 15.1108 18.8708 15.1123 18.8579 15.1142L19.3355 18.2784ZM19.4383 18.2612C19.4844 18.2521 19.5218 18.243 19.5425 18.2377C19.5529 18.2351 19.5618 18.2328 19.5658 18.2317C19.5717 18.2302 19.5706 18.2305 19.57 18.2306L18.7721 15.1317C18.7647 15.1336 18.7567 15.1357 18.7557 15.136C18.7529 15.1367 18.7549 15.1362 18.7585 15.1353C18.7654 15.1335 18.789 15.1276 18.8211 15.1213L19.4383 18.2612ZM19.5712 18.2303C19.567 18.2314 19.5635 18.2323 19.5613 18.2328C19.5592 18.2334 19.5577 18.2337 19.5576 18.2338C19.5575 18.2338 19.5575 18.2338 19.558 18.2337C19.5582 18.2336 19.5584 18.2336 19.5587 18.2335C19.559 18.2334 19.5595 18.2333 19.5599 18.2332C19.5615 18.2328 19.5647 18.232 19.5684 18.2311C19.5813 18.2279 19.6179 18.2189 19.6626 18.2054L18.7392 15.1415C18.7576 15.136 18.7728 15.1318 18.7834 15.129C18.7937 15.1263 18.8014 15.1244 18.8037 15.1238C18.8048 15.1235 18.8055 15.1234 18.8046 15.1236C18.8045 15.1236 18.8017 15.1243 18.7995 15.1248C18.7946 15.126 18.7839 15.1286 18.7709 15.132L19.5712 18.2303ZM19.6649 18.2047C19.7069 18.192 19.7408 18.1801 19.7599 18.1732C19.7696 18.1698 19.7779 18.1668 19.7819 18.1653C19.7862 18.1637 19.7836 18.1646 19.7865 18.1636C19.7874 18.1632 19.7874 18.1633 19.7869 18.1634L18.6923 15.1565C18.686 15.1587 18.6787 15.1614 18.6781 15.1617C18.6757 15.1626 18.6776 15.1619 18.6808 15.1607C18.6871 15.1585 18.7081 15.151 18.7369 15.1422L19.6649 18.2047ZM19.7852 18.1641C19.7797 18.1661 19.7759 18.1674 19.7774 18.1669C19.7776 18.1668 19.778 18.1666 19.7787 18.1664C19.7793 18.1662 19.7803 18.1658 19.7814 18.1655C19.7835 18.1647 19.7868 18.1635 19.7907 18.1622C19.8047 18.1572 19.8385 18.1451 19.8797 18.1281L18.661 15.1693C18.6772 15.1626 18.6908 15.1574 18.7004 15.1538C18.7098 15.1502 18.7168 15.1477 18.7193 15.1468C18.7206 15.1464 18.7214 15.1461 18.7209 15.1463C18.7207 15.1463 18.7204 15.1465 18.7197 15.1467C18.7192 15.1469 18.7182 15.1472 18.7172 15.1476C18.7136 15.1488 18.7046 15.152 18.694 15.1559L19.7852 18.1641ZM19.8842 18.1263C19.9241 18.1097 19.956 18.0948 19.9728 18.0868C19.9812 18.0828 19.9885 18.0793 19.9913 18.078C19.9956 18.0759 19.9944 18.0765 19.993 18.0771L18.6172 15.188C18.61 15.1914 18.6032 15.1947 18.6016 15.1955C18.5987 15.1969 18.6003 15.1961 18.6029 15.1949C18.6081 15.1924 18.6284 15.1828 18.6565 15.1712L19.8842 18.1263ZM19.9923 18.0775C19.9878 18.0796 19.9848 18.081 19.987 18.08C19.9874 18.0798 19.9949 18.0763 20.002 18.073C20.017 18.0659 20.0505 18.05 20.091 18.0284L18.5828 15.2061C18.5985 15.1977 18.6117 15.1911 18.6211 15.1864C18.6305 15.1818 18.6375 15.1785 18.6402 15.1772C18.642 15.1764 18.6441 15.1754 18.6392 15.1777C18.6361 15.1791 18.6277 15.183 18.618 15.1876L19.9923 18.0775ZM20.0914 18.0282C20.1318 18.0066 20.1638 17.9875 20.1792 17.9782C20.1868 17.9736 20.1939 17.9693 20.1955 17.9683C20.1986 17.9664 20.1967 17.9676 20.1938 17.9693L18.545 15.2268C18.5368 15.2317 18.5295 15.2362 18.5272 15.2376C18.5235 15.2399 18.5251 15.2388 18.5274 15.2375C18.5302 15.2358 18.5368 15.2319 18.5456 15.2267C18.5546 15.2215 18.5671 15.2145 18.5824 15.2063L20.0914 18.0282ZM20.1951 17.9685C20.1902 17.9715 20.1868 17.9735 20.1886 17.9724C20.189 17.9722 20.1893 17.972 20.1901 17.9715C20.1908 17.9711 20.1918 17.9705 20.1929 17.9699C20.1951 17.9686 20.1984 17.9666 20.2023 17.9643C20.2165 17.9559 20.2494 17.9362 20.2888 17.9099L18.511 15.2492C18.5263 15.2389 18.5393 15.2307 18.5486 15.2249C18.5577 15.2192 18.5646 15.2152 18.5671 15.2136C18.5685 15.2128 18.5693 15.2124 18.5689 15.2126C18.5676 15.2134 18.5686 15.2128 18.5656 15.2146C18.5623 15.2165 18.5537 15.2215 18.5437 15.2276L20.1951 17.9685ZM20.2899 17.9091C20.3278 17.8838 20.358 17.8616 20.3749 17.8489C20.3836 17.8424 20.3909 17.8369 20.3946 17.8341C20.3956 17.8333 20.3965 17.8326 20.3972 17.8321C20.3979 17.8315 20.3984 17.8311 20.3989 17.8308C20.3998 17.8301 20.3999 17.83 20.3995 17.8303L18.4701 15.2774C18.4648 15.2814 18.4582 15.2864 18.4578 15.2867C18.4557 15.2883 18.4573 15.2871 18.4601 15.285C18.4655 15.281 18.484 15.2672 18.5098 15.2499L20.2899 17.9091ZM20.4005 17.8296C20.3909 17.8368 20.3838 17.842 20.3823 17.8431C20.3816 17.8436 20.3811 17.844 20.3825 17.8429C20.3834 17.8423 20.386 17.8404 20.389 17.8383C20.3992 17.8308 20.4337 17.8057 20.4747 17.772L18.443 15.2997C18.4605 15.2853 18.4753 15.2739 18.4855 15.2661C18.4955 15.2585 18.503 15.2531 18.5049 15.2517C18.5058 15.251 18.5064 15.2506 18.5053 15.2514C18.5046 15.2519 18.5021 15.2537 18.4994 15.2557C18.4939 15.2597 18.4827 15.2678 18.4691 15.2781L20.4005 17.8296ZM20.4714 17.7747C20.532 17.7252 20.5902 17.6726 20.6456 17.6171L18.3831 15.3542C18.4032 15.3341 18.4243 15.315 18.4463 15.297L20.4714 17.7747ZM20.6457 17.617L23.8274 14.4354L21.5646 12.1727L18.383 15.3543L20.6457 17.617ZM23.8274 14.4354C24.2681 13.9947 24.5157 13.397 24.5157 12.7737H21.3157C21.3157 12.5483 21.4052 12.3321 21.5646 12.1727L23.8274 14.4354ZM24.5157 12.7737C24.5157 12.1504 24.2681 11.5527 23.8274 11.112L21.5646 13.3747C21.4052 13.2153 21.3157 12.9991 21.3157 12.7737H24.5157ZM23.8274 11.112C23.3867 10.6713 22.7889 10.4237 22.1657 10.4237V13.6237C21.9402 13.6237 21.724 13.5341 21.5646 13.3747L23.8274 11.112ZM22.1657 10.4237C21.5424 10.4237 20.9447 10.6713 20.504 11.112L22.7667 13.3747C22.6073 13.5341 22.3911 13.6237 22.1657 13.6237V10.4237ZM20.504 11.112L18.6024 13.0136L20.8651 15.2763L22.7667 13.3747L20.504 11.112ZM21.3337 14.145L21.3337 11.4556L18.1337 11.4556L18.1337 14.145L21.3337 14.145ZM21.3337 11.4538C21.3305 8.64396 20.2129 5.95014 18.226 3.96329L15.9633 6.22603C17.3509 7.61367 18.1315 9.49506 18.1337 11.4575L21.3337 11.4538ZM18.226 3.96329C16.2392 1.97643 13.5453 0.858798 10.7355 0.855567L10.7318 4.05557C12.6942 4.05782 14.5756 4.83839 15.9633 6.22603L18.226 3.96329ZM10.7337 0.855566C10.4251 0.855566 10.1195 0.916351 9.83436 1.03444L11.0589 3.99087C10.9558 4.03358 10.8453 4.05557 10.7337 4.05557L10.7337 0.855566ZM9.83433 1.03445C9.5492 1.15256 9.29014 1.32567 9.07193 1.54388L11.3347 3.80662C11.2558 3.88554 11.1621 3.94815 11.0589 3.99086L9.83433 1.03445ZM9.07193 1.54388C8.85372 1.76209 8.68061 2.02115 8.5625 2.30628L11.5189 3.53088C11.4762 3.63401 11.4136 3.72771 11.3347 3.80662L9.07193 1.54388ZM8.56249 2.30631C8.4444 2.59142 8.38361 2.89701 8.38361 3.20562L11.5836 3.20561C11.5836 3.31723 11.5616 3.42775 11.5189 3.53086L8.56249 2.30631ZM8.38361 3.2056C8.38361 3.51423 8.4444 3.81983 8.5625 4.10494L11.5189 2.88035C11.5616 2.98346 11.5836 3.09399 11.5836 3.20563L8.38361 3.2056ZM8.5625 4.10494C8.6806 4.39006 8.8537 4.64913 9.07193 4.86735L11.3347 2.60461C11.4136 2.68354 11.4762 2.77724 11.5189 2.88036L8.5625 4.10494ZM9.07193 4.86735C9.29015 5.08557 9.54921 5.25867 9.83433 5.37678L11.0589 2.42036C11.162 2.46308 11.2557 2.52569 11.3347 2.60461L9.07193 4.86735ZM9.83433 5.37678C10.1195 5.49488 10.4251 5.55566 10.7337 5.55566L10.7337 2.35566C10.8453 2.35566 10.9558 2.37765 11.0589 2.42036L9.83433 5.37678ZM10.7319 5.55566C12.2966 5.55738 13.7967 6.17972 14.9032 7.28614L17.1659 5.0234C15.4602 3.31772 13.1476 2.35831 10.7354 2.35566L10.7319 5.55566ZM14.9032 7.28614C16.0096 8.39255 16.6319 9.89268 16.6336 11.4574L19.8336 11.4539C19.831 9.0417 18.8716 6.72907 17.1659 5.0234L14.9032 7.28614ZM16.6336 11.4556L16.6336 14.145L19.8336 14.145L19.8336 11.4556L16.6336 11.4556ZM19.365 13.0136L17.4634 11.112L15.2007 13.3747L17.1023 15.2763L19.365 13.0136ZM17.4634 11.112C17.0227 10.6713 16.425 10.4237 15.8017 10.4237L15.8017 13.6237C15.5763 13.6237 15.3601 13.5341 15.2007 13.3747L17.4634 11.112ZM15.8017 10.4237C15.1784 10.4237 14.5807 10.6713 14.14 11.112L16.4027 13.3747C16.2433 13.5341 16.0271 13.6237 15.8017 13.6237V10.4237ZM14.14 11.112C13.6993 11.5527 13.4517 12.1504 13.4517 12.7737H16.6517C16.6517 12.9991 16.5622 13.2153 16.4027 13.3747L14.14 11.112ZM13.4517 12.7737C13.4517 13.397 13.6993 13.9947 14.14 14.4354L16.4027 12.1727C16.5622 12.3321 16.6517 12.5483 16.6517 12.7737L13.4517 12.7737ZM14.14 14.4354L17.322 17.6174L19.5847 15.3546L16.4027 12.1727L14.14 14.4354ZM17.322 17.6174C17.3795 17.6749 17.4372 17.7265 17.4936 17.7728L19.523 15.2986C19.5413 15.3135 19.5622 15.3321 19.5847 15.3546L17.322 17.6174ZM17.4928 17.7721C17.5328 17.805 17.5664 17.8295 17.5784 17.8383C17.5818 17.8408 17.5847 17.8429 17.5862 17.8439C17.5866 17.8442 17.5869 17.8445 17.5872 17.8447C17.5875 17.8449 17.5877 17.845 17.5879 17.8452C17.5882 17.8454 17.5883 17.8454 17.5882 17.8454C17.5881 17.8453 17.5826 17.8413 17.5751 17.8357L19.4946 15.2753C19.4826 15.2664 19.4727 15.2591 19.4682 15.2559C19.4662 15.2544 19.4636 15.2525 19.4635 15.2525C19.4627 15.2519 19.4634 15.2524 19.4646 15.2532C19.4668 15.2549 19.474 15.2601 19.4836 15.2675C19.4935 15.275 19.5074 15.2857 19.5239 15.2993L17.4928 17.7721ZM17.5748 17.8355C17.5728 17.834 17.5714 17.8329 17.5749 17.8356C17.5771 17.8373 17.5841 17.8425 17.5919 17.8484C17.6075 17.8601 17.6384 17.883 17.6777 17.9093L19.4568 15.2495C19.485 15.2683 19.5051 15.2833 19.5099 15.2869C19.5123 15.2887 19.5139 15.29 19.5108 15.2876C19.509 15.2862 19.5022 15.2811 19.4949 15.2755L17.5748 17.8355Z'
      fill='currentColor'
      mask='url(#path-1-inside-1)'
    />
  </svg>
);

const ForwardRef = forwardRef(RotateRight);
export default ForwardRef;
