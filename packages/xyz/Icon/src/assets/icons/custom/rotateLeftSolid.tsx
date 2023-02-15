import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RotateLeftSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <mask id='path-1-inside-1' fill='white'>
      <path d='M13.9157 11.0028V21.0861C13.9157 21.3392 14.1171 21.5444 14.3657 21.5444H22.4657C22.7142 21.5444 22.9157 21.3392 22.9157 21.0861L22.9157 11.0028C22.9157 10.7496 22.7142 10.5444 22.4657 10.5444L14.3657 10.5444C14.1171 10.5444 13.9157 10.7496 13.9157 11.0028Z' />
      <path d='M6.34838 17.1238C6.33785 17.1308 6.3269 17.137 6.31609 17.1434C6.30588 17.1495 6.2959 17.1559 6.2854 17.1616C6.27448 17.1674 6.26326 17.1723 6.25213 17.1776C6.24106 17.1828 6.23016 17.1883 6.21881 17.193C6.20819 17.1974 6.19734 17.201 6.18659 17.2048C6.17423 17.2093 6.16204 17.214 6.14941 17.2178C6.139 17.221 6.12843 17.2233 6.11793 17.2259C6.10471 17.2293 6.09164 17.233 6.07815 17.2357C6.06669 17.2379 6.0551 17.2392 6.04355 17.2409C6.03089 17.2428 6.01837 17.2452 6.00551 17.2464C5.98815 17.2481 5.97074 17.2486 5.95332 17.2491C5.94617 17.2493 5.93919 17.2501 5.93198 17.2502C5.9245 17.2502 5.91726 17.2493 5.90982 17.249C5.89271 17.2485 5.87558 17.2481 5.85853 17.2464C5.84516 17.2451 5.83213 17.2427 5.81896 17.2407C5.80795 17.2391 5.7969 17.2379 5.78596 17.2357C5.77194 17.2329 5.75834 17.2291 5.7446 17.2256C5.73466 17.223 5.72462 17.2209 5.71475 17.2179C5.70161 17.2139 5.6889 17.2091 5.67607 17.2044C5.66581 17.2007 5.65547 17.1973 5.64534 17.1931C5.63348 17.1882 5.62209 17.1825 5.61054 17.177C5.59992 17.1719 5.58918 17.1673 5.57876 17.1617C5.56762 17.1557 5.55703 17.149 5.54624 17.1425C5.53606 17.1363 5.52573 17.1306 5.51578 17.124C5.50375 17.1159 5.49238 17.107 5.48085 17.0983C5.47286 17.0922 5.4646 17.0867 5.4568 17.0803C5.43748 17.0645 5.41896 17.0477 5.40131 17.0301L2.21967 13.8485C2.07902 13.7078 2 13.517 2 13.3181C2 13.1192 2.07902 12.9284 2.21967 12.7878C2.36032 12.6471 2.55109 12.5681 2.75 12.5681C2.94891 12.5681 3.13968 12.6471 3.28033 12.7878L5.18193 14.6894L5.18193 12.0001C5.18467 9.61395 6.13377 7.32634 7.82102 5.63909C9.50826 3.95184 11.7959 3.00274 14.182 3C14.2805 3 14.378 3.0194 14.469 3.05709C14.56 3.09479 14.6427 3.15004 14.7124 3.21968C14.782 3.28933 14.8373 3.37202 14.875 3.46302C14.9126 3.55402 14.932 3.65155 14.932 3.75005C14.932 3.84855 14.9126 3.94608 14.875 4.03708C14.8373 4.12808 14.782 4.21077 14.7124 4.28041C14.6427 4.35006 14.56 4.40531 14.469 4.443C14.378 4.4807 14.2805 4.5001 14.182 4.5001C12.1936 4.50228 10.2872 5.29315 8.88113 6.6992C7.47508 8.10524 6.68421 10.0116 6.68203 12.0001V14.6894L8.58363 12.7878C8.72428 12.6471 8.91504 12.5681 9.11396 12.5681C9.31287 12.5681 9.50363 12.6471 9.64429 12.7878C9.78494 12.9285 9.86396 13.1192 9.86396 13.3181C9.86396 13.517 9.78494 13.7078 9.64429 13.8485L6.46231 17.0304C6.44483 17.0479 6.42644 17.0645 6.40732 17.0801C6.39872 17.0872 6.38966 17.0933 6.38084 17.0999C6.37009 17.108 6.35957 17.1163 6.34838 17.1238Z' />
    </mask>
    <path
      d='M13.9157 21.0861H12.3157H13.9157ZM13.9157 11.0028H15.5157H13.9157ZM14.3657 10.5444V12.1444V10.5444ZM22.4657 10.5444V8.94445V10.5444ZM22.9157 11.0028H21.3157H22.9157ZM22.9157 21.0861H24.5157H22.9157ZM22.4657 21.5444V23.1444V21.5444ZM14.3657 21.5444V19.9444V21.5444ZM6.34838 17.1238L7.23786 18.4538L7.23795 18.4537L6.34838 17.1238ZM6.31609 17.1434L5.49531 15.77L5.49424 15.7706L6.31609 17.1434ZM6.2854 17.1616L7.03998 18.5724L7.04039 18.5722L6.2854 17.1616ZM6.25213 17.1776L5.5692 15.7306L5.56742 15.7315L6.25213 17.1776ZM6.21881 17.193L6.83022 18.6716L6.8316 18.671L6.21881 17.193ZM6.18659 17.2048L5.64492 15.6993L5.64161 15.7005L6.18659 17.2048ZM6.14941 17.2178L5.68661 15.6862L5.68581 15.6865L6.14941 17.2178ZM6.11793 17.2259L5.72303 15.6754L5.72086 15.676L6.11793 17.2259ZM6.07815 17.2357L6.38786 18.8054L6.38851 18.8053L6.07815 17.2357ZM6.04355 17.2409L5.80676 15.6586L5.8066 15.6586L6.04355 17.2409ZM6.00551 17.2464L5.85028 15.654L5.84862 15.6541L6.00551 17.2464ZM5.95332 17.2491L5.99767 18.8485L5.99808 18.8484L5.95332 17.2491ZM5.93198 17.2502L5.93196 18.8502L5.93372 18.8502L5.93198 17.2502ZM5.90982 17.249L5.86256 18.8483L5.86363 18.8484L5.90982 17.249ZM5.85853 17.2464L6.01461 15.6541L6.01368 15.654L5.85853 17.2464ZM5.81896 17.2407L6.0591 15.6588L6.05772 15.6586L5.81896 17.2407ZM5.78596 17.2357L6.0965 15.6661L6.09456 15.6657L5.78596 17.2357ZM5.7446 17.2256L5.34447 18.7748L5.34562 18.7751L5.7446 17.2256ZM5.71475 17.2179L5.25078 18.7492L5.25307 18.7499L5.71475 17.2179ZM5.67607 17.2044L6.22338 15.7009L6.22168 15.7003L5.67607 17.2044ZM5.64534 17.1931L5.03146 18.6707L5.03599 18.6726L5.64534 17.1931ZM5.61054 17.177L6.29846 15.7324L6.29768 15.7321L5.61054 17.177ZM5.57876 17.1617L4.82422 18.5726L4.82468 18.5728L5.57876 17.1617ZM5.54624 17.1425L4.72052 18.5129L4.72183 18.5137L5.54624 17.1425ZM5.51578 17.124L4.62575 18.4536L4.62686 18.4543L5.51578 17.124ZM5.48085 17.0983L4.51518 18.374L4.51612 18.3747L5.48085 17.0983ZM5.4568 17.0803L6.47266 15.8441L6.46931 15.8414L5.4568 17.0803ZM5.40131 17.0301L4.26994 18.1615L4.27003 18.1616L5.40131 17.0301ZM2.21967 13.8485L1.0883 14.9798L2.21967 13.8485ZM2 13.3181H3.6H2ZM2.75 12.5681L2.75 14.1681H2.75V12.5681ZM3.28033 12.7878L4.4117 11.6564L3.28033 12.7878ZM5.18193 14.6894L4.05056 15.8208L6.78193 18.5521L6.78193 14.6894L5.18193 14.6894ZM5.18193 12.0001L3.58193 11.9982V12.0001L5.18193 12.0001ZM14.182 3L14.182 1.4L14.1802 1.4L14.182 3ZM14.469 3.05709L15.0813 1.57889L15.0813 1.57888L14.469 3.05709ZM14.875 3.46302L16.3532 2.85074L16.3532 2.85072L14.875 3.46302ZM14.932 3.75005L13.332 3.75005V3.75007L14.932 3.75005ZM14.875 4.03708L13.3967 3.42479L13.3967 3.42479L14.875 4.03708ZM14.182 4.5001L14.182 2.9001L14.1802 2.9001L14.182 4.5001ZM6.68203 12.0001L5.08203 11.9983V12.0001H6.68203ZM6.68203 14.6894H5.08203V18.5521L7.8134 15.8208L6.68203 14.6894ZM8.58363 12.7878L9.715 13.9192H9.715L8.58363 12.7878ZM9.11396 12.5681L9.11395 14.1681H9.11396V12.5681ZM9.86396 13.3181H8.26396V13.3181L9.86396 13.3181ZM6.40732 17.0801L5.39262 15.843L5.3918 15.8437L6.40732 17.0801ZM6.38084 17.0999L5.42107 15.8198L5.4208 15.82L6.38084 17.0999ZM15.5157 21.0861V11.0028H12.3157V21.0861H15.5157ZM15.5157 11.0028C15.5157 11.6055 15.0283 12.1444 14.3657 12.1444V8.94445C13.2059 8.94445 12.3157 9.8938 12.3157 11.0028H15.5157ZM14.3657 12.1444L22.4657 12.1444V8.94445L14.3657 8.94445V12.1444ZM22.4657 12.1444C21.803 12.1444 21.3157 11.6055 21.3157 11.0028H24.5157C24.5157 9.8938 23.6254 8.94445 22.4657 8.94445V12.1444ZM21.3157 11.0028L21.3157 21.0861H24.5157L24.5157 11.0028H21.3157ZM21.3157 21.0861C21.3157 20.4834 21.803 19.9444 22.4657 19.9444V23.1444C23.6254 23.1444 24.5157 22.1951 24.5157 21.0861H21.3157ZM22.4657 19.9444H14.3657V23.1444H22.4657V19.9444ZM14.3657 19.9444C15.0283 19.9444 15.5157 20.4834 15.5157 21.0861H12.3157C12.3157 22.1951 13.2059 23.1444 14.3657 23.1444V19.9444ZM5.4589 15.7938C5.48731 15.7748 5.50913 15.7618 5.51397 15.759C5.51623 15.7576 5.51807 15.7565 5.51405 15.7589C5.51162 15.7603 5.50397 15.7648 5.49531 15.77L7.13686 18.5169C7.13361 18.5188 7.13138 18.5201 7.13438 18.5183C7.13579 18.5175 7.14305 18.5133 7.15071 18.5087C7.16636 18.4994 7.19892 18.4798 7.23786 18.4538L5.4589 15.7938ZM5.49424 15.7706C5.48534 15.776 5.47771 15.7806 5.47506 15.7822C5.47077 15.7849 5.47265 15.7837 5.47458 15.7825C5.47726 15.7809 5.4839 15.7769 5.49289 15.7717C5.50202 15.7665 5.5148 15.7592 5.53041 15.7509L7.04039 18.5722C7.08081 18.5506 7.11265 18.5315 7.12713 18.5228C7.13415 18.5186 7.14109 18.5143 7.14186 18.5139C7.14428 18.5124 7.14173 18.5139 7.13793 18.5162L5.49424 15.7706ZM5.53082 15.7507C5.55976 15.7352 5.58182 15.7248 5.58699 15.7223C5.58947 15.7212 5.59132 15.7203 5.58752 15.7221C5.58529 15.7231 5.57769 15.7266 5.5692 15.7306L6.93506 18.6245C6.93213 18.6259 6.9301 18.6268 6.93345 18.6253C6.93522 18.6245 6.94264 18.621 6.95069 18.6172C6.96698 18.6096 7.00011 18.5938 7.03998 18.5724L5.53082 15.7507ZM5.56742 15.7315C5.55901 15.7355 5.55154 15.7391 5.54929 15.7402C5.5455 15.742 5.54725 15.7411 5.54961 15.74C5.55449 15.7377 5.57616 15.7274 5.60603 15.715L6.8316 18.671C6.87281 18.654 6.90561 18.6386 6.92154 18.631C6.92943 18.6273 6.93669 18.6238 6.93841 18.6229C6.94167 18.6214 6.93972 18.6223 6.93684 18.6237L5.56742 15.7315ZM5.60741 15.7145C5.62353 15.7078 5.63703 15.7026 5.64677 15.6989C5.65638 15.6953 5.66359 15.6927 5.6665 15.6917C5.66856 15.6909 5.67069 15.6902 5.66593 15.6919C5.663 15.6929 5.65464 15.6958 5.64492 15.6993L6.72825 18.7104C6.72391 18.7119 6.72094 18.713 6.7234 18.7121C6.72403 18.7119 6.73156 18.7092 6.739 18.7066C6.75449 18.7011 6.78869 18.6888 6.83022 18.6716L5.60741 15.7145ZM5.64161 15.7005C5.63438 15.7031 5.62707 15.7058 5.62584 15.7063C5.62299 15.7073 5.6249 15.7066 5.62806 15.7055C5.63427 15.7032 5.65636 15.6954 5.68661 15.6862L6.61222 18.7494C6.65509 18.7365 6.68959 18.7243 6.70814 18.7177C6.71747 18.7143 6.72554 18.7114 6.72885 18.7102C6.73376 18.7084 6.73262 18.7088 6.73156 18.7092L5.64161 15.7005ZM5.68581 15.6865C5.70363 15.6811 5.71846 15.677 5.729 15.6742C5.73935 15.6714 5.74708 15.6695 5.74988 15.6688C5.75134 15.6684 5.75221 15.6682 5.75176 15.6683C5.75154 15.6684 5.75125 15.6684 5.75056 15.6686C5.74998 15.6688 5.74897 15.669 5.74791 15.6693C5.74407 15.6702 5.73448 15.6725 5.72303 15.6754L6.51284 18.7764C6.50664 18.778 6.50231 18.7791 6.50372 18.7787C6.50398 18.7787 6.50429 18.7786 6.50503 18.7784C6.50564 18.7783 6.50667 18.778 6.50776 18.7777C6.50995 18.7772 6.51344 18.7764 6.51754 18.7753C6.53231 18.7717 6.56861 18.7626 6.61302 18.7492L5.68581 15.6865ZM5.72086 15.676C5.71298 15.678 5.70513 15.6801 5.7037 15.6804C5.70056 15.6813 5.70256 15.6807 5.70586 15.6799C5.71238 15.6783 5.73583 15.6724 5.7678 15.666L6.38851 18.8053C6.43396 18.7963 6.47069 18.7872 6.49043 18.7822C6.50033 18.7797 6.50893 18.7775 6.51238 18.7766C6.51753 18.7752 6.51628 18.7756 6.51501 18.7759L5.72086 15.676ZM5.76844 15.6659C5.78725 15.6622 5.80284 15.6595 5.81384 15.6578C5.82465 15.656 5.83268 15.6548 5.83551 15.6544C5.837 15.6542 5.83786 15.6541 5.83735 15.6542C5.83709 15.6542 5.83676 15.6543 5.836 15.6544C5.83538 15.6545 5.83429 15.6546 5.83316 15.6548C5.82904 15.6553 5.81888 15.6567 5.80676 15.6586L6.28035 18.8233C6.27401 18.8243 6.26962 18.8249 6.27128 18.8246C6.27159 18.8246 6.27195 18.8245 6.27277 18.8244C6.27346 18.8243 6.27457 18.8242 6.27576 18.824C6.27813 18.8237 6.28188 18.8232 6.28626 18.8225C6.30202 18.8203 6.34055 18.8147 6.38786 18.8054L5.76844 15.6659ZM5.8066 15.6586C5.7947 15.6604 5.7846 15.662 5.78088 15.6626C5.77488 15.6635 5.77751 15.6631 5.77969 15.6628C5.78302 15.6623 5.79152 15.661 5.80296 15.6594C5.81458 15.6579 5.83075 15.6559 5.85028 15.654L6.16074 18.8389C6.21107 18.834 6.25148 18.8279 6.26951 18.8251C6.27802 18.8237 6.28696 18.8223 6.28727 18.8223C6.28986 18.8218 6.28607 18.8225 6.28051 18.8233L5.8066 15.6586ZM5.84862 15.6541C5.87753 15.6513 5.89922 15.6502 5.90839 15.6498C5.91087 15.6497 5.9128 15.6496 5.91404 15.6496C5.91467 15.6495 5.91515 15.6495 5.91546 15.6495C5.91578 15.6495 5.91595 15.6495 5.91595 15.6495C5.91595 15.6495 5.91582 15.6495 5.91551 15.6495C5.91519 15.6495 5.91475 15.6495 5.91413 15.6495C5.9126 15.6496 5.91134 15.6496 5.90857 15.6497L5.99808 18.8484C6.0025 18.8483 6.07863 18.847 6.1624 18.8387L5.84862 15.6541ZM5.90897 15.6497C5.88219 15.6504 5.86055 15.6517 5.84828 15.6524C5.84203 15.6528 5.83696 15.6532 5.83442 15.6533C5.83314 15.6534 5.832 15.6535 5.83165 15.6535C5.83107 15.6536 5.83131 15.6536 5.83166 15.6535C5.83236 15.6535 5.83561 15.6533 5.84 15.653C5.84452 15.6527 5.85119 15.6523 5.85935 15.6519C5.87549 15.6511 5.90008 15.6502 5.93023 15.6502L5.93372 18.8502C5.96748 18.8501 5.99565 18.8491 6.01535 18.8481C6.03426 18.8472 6.04948 18.8461 6.05369 18.8458C6.05492 18.8457 6.05605 18.8457 6.05635 18.8456C6.05689 18.8456 6.05663 18.8456 6.05624 18.8456C6.05547 18.8457 6.05216 18.8459 6.0477 18.8462C6.03897 18.8468 6.02088 18.8478 5.99767 18.8485L5.90897 15.6497ZM5.932 15.6502C5.96193 15.6502 5.98636 15.6511 6.00249 15.6518C6.01065 15.6522 6.01734 15.6526 6.0219 15.6529C6.02636 15.6532 6.02966 15.6534 6.03048 15.6534C6.0309 15.6535 6.03117 15.6535 6.03068 15.6534C6.03042 15.6534 6.02931 15.6534 6.02814 15.6533C6.02577 15.6531 6.02088 15.6528 6.01489 15.6524C6.00308 15.6517 5.98205 15.6505 5.95601 15.6497L5.86363 18.8484C5.84131 18.8477 5.82398 18.8467 5.81585 18.8462C5.81169 18.8459 5.80864 18.8457 5.80811 18.8457C5.80787 18.8457 5.80767 18.8457 5.80833 18.8457C5.80876 18.8457 5.80995 18.8458 5.81129 18.8459C5.8159 18.8462 5.83124 18.8473 5.85032 18.8482C5.87015 18.8491 5.89829 18.8502 5.93196 18.8502L5.932 15.6502ZM5.95709 15.6497C5.95037 15.6495 5.94989 15.6495 5.94832 15.6495C5.94772 15.6495 5.95045 15.6495 5.955 15.6497C5.96367 15.6501 5.98545 15.6512 6.01461 15.6541L5.70246 18.8388C5.78511 18.8469 5.86205 18.8483 5.86256 18.8483L5.95709 15.6497ZM6.01368 15.654C6.03263 15.6558 6.04837 15.6578 6.05978 15.6593C6.07103 15.6608 6.07941 15.6621 6.08293 15.6626C6.08558 15.663 6.08789 15.6634 6.08273 15.6625C6.07959 15.662 6.07006 15.6605 6.0591 15.6588L5.57883 18.8226C5.57445 18.8219 5.57149 18.8214 5.57491 18.822C5.57632 18.8222 5.58518 18.8237 5.59441 18.8251C5.61342 18.828 5.65355 18.834 5.70339 18.8389L6.01368 15.654ZM6.05772 15.6586C6.04487 15.6567 6.03418 15.6552 6.0297 15.6546C6.02846 15.6544 6.02734 15.6543 6.02663 15.6542C6.02577 15.6541 6.02546 15.654 6.02513 15.654C6.02452 15.6539 6.02539 15.654 6.02688 15.6542C6.02973 15.6546 6.03806 15.6558 6.04928 15.6576C6.0607 15.6595 6.07693 15.6622 6.0965 15.6661L5.47543 18.8053C5.52363 18.8148 5.56281 18.8204 5.57798 18.8226C5.58223 18.8232 5.58585 18.8237 5.588 18.824C5.5922 18.8245 5.5896 18.8242 5.5917 18.8245C5.59272 18.8246 5.58755 18.8239 5.58021 18.8228L6.05772 15.6586ZM6.09456 15.6657C6.12668 15.672 6.15025 15.6779 6.15718 15.6797C6.16071 15.6806 6.1628 15.6811 6.15995 15.6804C6.15894 15.6801 6.15098 15.678 6.14359 15.6761L5.34562 18.7751C5.34509 18.7749 5.34399 18.7746 5.34982 18.7762C5.35383 18.7772 5.36277 18.7795 5.37317 18.7822C5.39384 18.7874 5.43122 18.7966 5.47736 18.8056L6.09456 15.6657ZM6.14474 15.6764C6.13175 15.6731 6.12103 15.6705 6.11615 15.6693C6.11398 15.6687 6.11115 15.6681 6.11102 15.668C6.11016 15.6678 6.11082 15.668 6.112 15.6683C6.11426 15.6688 6.12192 15.6707 6.13227 15.6735C6.14283 15.6763 6.15805 15.6804 6.17643 15.686L5.25307 18.7499C5.29779 18.7633 5.33433 18.7724 5.34729 18.7755C5.35097 18.7765 5.35412 18.7772 5.35576 18.7776C5.3562 18.7777 5.35661 18.7778 5.35692 18.7779C5.35727 18.778 5.35749 18.778 5.3577 18.7781C5.35813 18.7782 5.35819 18.7782 5.35811 18.7782C5.35797 18.7782 5.35651 18.7778 5.35433 18.7773C5.35211 18.7767 5.34871 18.7759 5.34447 18.7748L6.14474 15.6764ZM6.17873 15.6867C6.20757 15.6954 6.2286 15.7029 6.23487 15.7051C6.23811 15.7063 6.23997 15.707 6.23757 15.7061C6.23695 15.7059 6.22964 15.7032 6.22338 15.7009L5.12876 18.7079C5.12828 18.7077 5.12824 18.7077 5.12916 18.708C5.13206 18.7091 5.12949 18.7081 5.13379 18.7097C5.13779 18.7112 5.14606 18.7142 5.15572 18.7177C5.17484 18.7245 5.2088 18.7364 5.25078 18.7492L6.17873 15.6867ZM6.22168 15.7003C6.21103 15.6964 6.20208 15.6933 6.19845 15.692C6.19745 15.6917 6.19649 15.6913 6.19594 15.6911C6.19527 15.6909 6.19498 15.6908 6.19476 15.6907C6.1943 15.6905 6.19505 15.6908 6.19636 15.6913C6.19885 15.6922 6.20588 15.6947 6.21532 15.6982C6.22493 15.7018 6.23846 15.707 6.25468 15.7137L5.03599 18.6726C5.0771 18.6895 5.1109 18.7016 5.12495 18.7066C5.12883 18.708 5.13215 18.7091 5.13426 18.7099C5.13533 18.7102 5.13631 18.7106 5.13694 18.7108C5.13767 18.7111 5.13799 18.7112 5.13828 18.7113C5.13979 18.7118 5.13598 18.7105 5.13047 18.7085L6.22168 15.7003ZM6.25921 15.7156C6.28721 15.7272 6.30749 15.7368 6.31271 15.7393C6.31535 15.7405 6.31697 15.7413 6.314 15.7399C6.31248 15.7391 6.3056 15.7358 6.29846 15.7324L4.92262 18.6216C4.92125 18.6209 4.92013 18.6204 4.92436 18.6224C4.92715 18.6237 4.93452 18.6273 4.94294 18.6313C4.95971 18.6392 4.99161 18.6541 5.03146 18.6707L6.25921 15.7156ZM6.29768 15.7321C6.28791 15.7274 6.27955 15.7235 6.27647 15.7221C6.27154 15.7198 6.27366 15.7208 6.27547 15.7216C6.2782 15.7229 6.2852 15.7262 6.29453 15.7308C6.304 15.7355 6.31716 15.7421 6.33283 15.7505L4.82468 18.5728C4.86515 18.5945 4.89868 18.6104 4.91368 18.6174C4.92081 18.6208 4.92825 18.6242 4.92865 18.6244C4.9309 18.6254 4.92786 18.624 4.92339 18.6219L6.29768 15.7321ZM6.33329 15.7508C6.34854 15.7589 6.36105 15.766 6.37005 15.7712C6.37895 15.7763 6.38552 15.7803 6.38833 15.7819C6.39057 15.7833 6.39225 15.7843 6.38849 15.782C6.38623 15.7807 6.37892 15.7762 6.37065 15.7712L4.72183 18.5137C4.71895 18.512 4.71701 18.5108 4.72012 18.5127C4.72173 18.5137 4.72879 18.518 4.73641 18.5226C4.75183 18.5319 4.78379 18.551 4.82422 18.5726L6.33329 15.7508ZM6.37195 15.772C6.3619 15.7659 6.35337 15.7609 6.35004 15.759C6.34697 15.7572 6.34807 15.7578 6.3467 15.757C6.34634 15.7568 6.34712 15.7572 6.34846 15.758C6.35101 15.7596 6.35788 15.7636 6.36703 15.7693C6.37635 15.7751 6.38931 15.7833 6.40471 15.7936L4.62686 18.4543C4.6663 18.4806 4.69918 18.5003 4.71339 18.5088C4.71728 18.5111 4.72061 18.513 4.72281 18.5143C4.72391 18.515 4.72492 18.5156 4.72561 18.516C4.72641 18.5165 4.72675 18.5167 4.72713 18.5169C4.72891 18.5179 4.72549 18.5159 4.72052 18.5129L6.37195 15.772ZM6.40582 15.7944C6.43168 15.8117 6.45014 15.8254 6.45556 15.8294C6.45838 15.8316 6.45997 15.8328 6.4579 15.8312C6.45744 15.8308 6.45092 15.8259 6.44557 15.8218L4.51612 18.3747C4.5158 18.3745 4.51587 18.3745 4.51677 18.3752C4.51722 18.3756 4.5177 18.3759 4.51846 18.3765C4.51914 18.377 4.52008 18.3777 4.52106 18.3785C4.52474 18.3813 4.53209 18.3869 4.5407 18.3933C4.55769 18.406 4.58785 18.4282 4.62575 18.4536L6.40582 15.7944ZM6.44651 15.8225C6.43295 15.8123 6.42177 15.8041 6.41629 15.8001C6.41358 15.7982 6.41104 15.7963 6.41042 15.7959C6.40927 15.795 6.40988 15.7955 6.41081 15.7962C6.41267 15.7975 6.42016 15.803 6.43012 15.8105C6.44036 15.8183 6.45512 15.8297 6.47265 15.8441L4.44095 18.3164C4.48192 18.3501 4.51641 18.3752 4.5267 18.3827C4.52965 18.3848 4.53228 18.3867 4.53315 18.3874C4.53455 18.3884 4.53404 18.388 4.53335 18.3875C4.53191 18.3865 4.52475 18.3813 4.51518 18.374L6.44651 15.8225ZM6.46931 15.8414C6.49134 15.8594 6.51246 15.8785 6.53259 15.8986L4.27003 18.1616C4.32545 18.217 4.38361 18.2696 4.44429 18.3192L6.46931 15.8414ZM6.53268 15.8987L3.35104 12.7171L1.0883 14.9798L4.26994 18.1615L6.53268 15.8987ZM3.35104 12.7171C3.51045 12.8765 3.6 13.0927 3.6 13.3181H0.4C0.4 13.9414 0.647589 14.5391 1.0883 14.9798L3.35104 12.7171ZM3.6 13.3181C3.6 13.5436 3.51045 13.7598 3.35104 13.9192L1.0883 11.6564C0.647587 12.0971 0.4 12.6949 0.4 13.3181H3.6ZM3.35104 13.9192C3.19163 14.0786 2.97543 14.1681 2.75 14.1681L2.75 10.9681C2.12674 10.9681 1.52901 11.2157 1.0883 11.6564L3.35104 13.9192ZM2.75 14.1681C2.52457 14.1681 2.30837 14.0786 2.14896 13.9192L4.4117 11.6564C3.97099 11.2157 3.37326 10.9681 2.75 10.9681V14.1681ZM2.14896 13.9192L4.05056 15.8208L6.3133 13.558L4.4117 11.6564L2.14896 13.9192ZM6.78193 14.6894L6.78193 12.0001L3.58193 12.0001L3.58193 14.6894L6.78193 14.6894ZM6.78193 12.0019C6.78418 10.0395 7.56475 8.1581 8.95239 6.77046L6.68965 4.50772C4.70279 6.49457 3.58516 9.1884 3.58193 11.9982L6.78193 12.0019ZM8.95239 6.77046C10.34 5.38282 12.2214 4.60226 14.1838 4.6L14.1802 1.4C11.3703 1.40323 8.6765 2.52087 6.68965 4.50772L8.95239 6.77046ZM14.182 4.6C14.0704 4.6 13.9599 4.57802 13.8568 4.53531L15.0813 1.57888C14.7962 1.46078 14.4906 1.4 14.182 1.4L14.182 4.6ZM13.8567 4.5353C13.7536 4.49258 13.6599 4.42997 13.581 4.35105L15.8437 2.08831C15.6255 1.8701 15.3665 1.69699 15.0813 1.57889L13.8567 4.5353ZM13.581 4.35105C13.5021 4.27214 13.4395 4.17844 13.3968 4.07532L16.3532 2.85072C16.2351 2.56559 16.062 2.30653 15.8437 2.08831L13.581 4.35105ZM13.3967 4.07529C13.354 3.97218 13.332 3.86166 13.332 3.75005L16.532 3.75005C16.532 3.44144 16.4713 3.13585 16.3532 2.85074L13.3967 4.07529ZM13.332 3.75007C13.332 3.63843 13.354 3.5279 13.3967 3.42479L16.3532 4.64938C16.4713 4.36426 16.5321 4.05866 16.532 3.75003L13.332 3.75007ZM13.3967 3.42479C13.4395 3.32166 13.5021 3.22796 13.581 3.14904L15.8437 5.41178C16.062 5.19357 16.2351 4.9345 16.3532 4.64937L13.3967 3.42479ZM13.581 3.14904C13.6599 3.07012 13.7536 3.00751 13.8567 2.9648L15.0813 5.92121C15.3664 5.80311 15.6255 5.63 15.8437 5.41178L13.581 3.14904ZM13.8567 2.9648C13.9599 2.92208 14.0704 2.9001 14.182 2.9001L14.182 6.1001C14.4906 6.1001 14.7962 6.03932 15.0813 5.92121L13.8567 2.9648ZM14.1802 2.9001C11.7681 2.90275 9.45543 3.86216 7.74976 5.56783L10.0125 7.83057C11.1189 6.72415 12.619 6.10181 14.1838 6.1001L14.1802 2.9001ZM7.74976 5.56783C6.04408 7.2735 5.08468 9.58613 5.08203 11.9983L8.28203 12.0018C8.28374 10.4371 8.90608 8.93699 10.0125 7.83057L7.74976 5.56783ZM5.08203 12.0001V14.6894H8.28203V12.0001H5.08203ZM7.8134 15.8208L9.715 13.9192L7.45226 11.6564L5.55066 13.558L7.8134 15.8208ZM9.715 13.9192C9.55559 14.0786 9.33939 14.1681 9.11395 14.1681L9.11396 10.9681C8.4907 10.9681 7.89297 11.2157 7.45226 11.6564L9.715 13.9192ZM9.11396 14.1681C8.88853 14.1681 8.67232 14.0786 8.51292 13.9192L10.7757 11.6564C10.3349 11.2157 9.73721 10.9681 9.11396 10.9681V14.1681ZM8.51292 13.9192C8.35351 13.7598 8.26396 13.5436 8.26396 13.3181H11.464C11.464 12.6949 11.2164 12.0971 10.7757 11.6564L8.51292 13.9192ZM8.26396 13.3181C8.26396 13.0927 8.35351 12.8765 8.51292 12.7171L10.7757 14.9798C11.2164 14.5391 11.464 13.9414 11.464 13.3181L8.26396 13.3181ZM8.51292 12.7171L5.33094 15.8991L7.59368 18.1618L10.7757 14.9798L8.51292 12.7171ZM5.33094 15.8991C5.35346 15.8765 5.3744 15.858 5.39262 15.843L7.42202 18.3172C7.47847 18.2709 7.5362 18.2193 7.59368 18.1618L5.33094 15.8991ZM5.3918 15.8437C5.40828 15.8302 5.42219 15.8194 5.43203 15.8119C5.44165 15.8046 5.44887 15.7993 5.45109 15.7977C5.45225 15.7968 5.45291 15.7964 5.45216 15.7969C5.45207 15.797 5.44948 15.7988 5.44748 15.8003C5.44298 15.8036 5.43304 15.8108 5.42107 15.8198L7.3406 18.3801C7.33305 18.3858 7.32755 18.3898 7.3275 18.3898C7.32739 18.3899 7.32742 18.3899 7.32778 18.3896C7.32797 18.3895 7.32816 18.3893 7.32846 18.3891C7.32873 18.3889 7.32911 18.3886 7.3295 18.3884C7.33097 18.3873 7.33386 18.3852 7.33723 18.3827C7.34928 18.3739 7.38286 18.3494 7.42284 18.3165L5.3918 15.8437ZM5.4208 15.82C5.41343 15.8255 5.40666 15.8306 5.4049 15.832C5.40174 15.8344 5.40334 15.8332 5.40577 15.8313C5.41062 15.8277 5.4307 15.8127 5.45882 15.7939L7.23795 18.4537C7.27726 18.4274 7.30819 18.4045 7.32379 18.3928C7.33159 18.387 7.33853 18.3817 7.34072 18.38C7.3443 18.3773 7.34287 18.3784 7.34088 18.3799L5.4208 15.82Z'
      fill='currentColor'
      mask='url(#path-1-inside-1)'
    />
  </svg>
);

const ForwardRef = forwardRef(RotateLeftSolid);
export default ForwardRef;
