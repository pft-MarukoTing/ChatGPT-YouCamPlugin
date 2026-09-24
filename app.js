const portrait = document.getElementById("portrait");
const portraitSources = {
  live: "assets/portrait-live.png",
  photo: "assets/portrait-photo.png"
};

const catalog = {
  look: [
    { id: "coral-dew", name: "Coral Dew", type: "look", image: "assets/look-coral-dew.jpg" },
    { id: "sweet-bloom", name: "Sweet Bloom", type: "look", image: "assets/look-sweet-bloom.jpg" },
    { id: "candy-beat", name: "Candy Beat", type: "look", image: "assets/look-candy-beat.jpg" }
  ],
  lip: [
    { id: "muted-peach", name: "Muted Peach", type: "lip", color: "#d8896f" },
    { id: "rose-beige", name: "Rose Beige", type: "lip", color: "#d69a8d" },
    { id: "dusty-coral", name: "Dusty Coral", type: "lip", color: "#e97870" }
  ],
  blush: [
    { id: "soft-apricot", name: "Soft Apricot", type: "blush", image: "assets/pattern-blush-1.jpg" },
    { id: "petal-pink", name: "Petal Pink", type: "blush", image: "assets/pattern-blush-2.jpg" },
    { id: "warm-rose", name: "Warm Rose", type: "blush", image: "assets/pattern-blush-3.jpg" }
  ],
  foundation: [
    { id: "ivory-beige", name: "Ivory Beige", type: "foundation", color: "#f0d5b8" },
    { id: "warm-sand", name: "Warm Sand", type: "foundation", color: "#e0b48c" },
    { id: "soft-honey", name: "Soft Honey", type: "foundation", color: "#d9a066" }
  ],
  eyelashes: [
    { id: "natural-curl", name: "Natural Curl", type: "eyelashes", image: "assets/pattern-eyelashes-1.png" },
    { id: "winged-look", name: "Winged Look", type: "eyelashes", image: "assets/pattern-eyelashes-2.jpg" },
    { id: "wispy-length", name: "Wispy Length", type: "eyelashes", image: "assets/pattern-eyelashes-3.png" }
  ],
  eyeliner: [
    { id: "bold-wing", name: "Bold Wing", type: "eyeliner", image: "assets/pattern-eyeliner-2.jpg" },
    { id: "soft-flick", name: "Soft Flick", type: "eyeliner", image: "assets/pattern-eyeliner-1.jpg" },
    { id: "classic-wing", name: "Classic Wing", type: "eyeliner", image: "assets/pattern-eyeliner-3.jpg" }
  ],
  eyebrow: [
    { id: "soft-arch", name: "Soft Arch", type: "eyebrow", image: "assets/pattern-eyebrow-1.jpg" },
    { id: "arrow", name: "Arrow", type: "eyebrow", image: "assets/pattern-eyebrow-2.jpg" },
    { id: "straight", name: "Straight", type: "eyebrow", image: "assets/pattern-eyebrow-3.jpg" }
  ],
  eyeshadow: [
    { id: "soft-taupe-elegance", name: "Soft Taupe Elegance", type: "eyeshadow", image: "assets/pattern-eyeshadow-1.jpg" },
    { id: "peachy-soft-glow", name: "Peachy Soft Glow", type: "eyeshadow", image: "assets/pattern-eyeshadow-2.jpg" },
    { id: "soft-rose-glow", name: "Soft Rose Glow", type: "eyeshadow", image: "assets/pattern-eyeshadow-3.jpg" }
  ]
};

const modeTabIcons = {
  look: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.5774 2.00363C21.0365 2.21748 20.9607 11.4542 21.0471 11.5017C21.5686 11.7844 21.8749 12.324 21.9358 13.1081C21.9511 13.3081 21.9519 13.5123 21.9378 13.7185C21.924 13.9248 21.8956 14.1322 21.8548 14.3386C21.7728 14.7502 21.6391 15.1575 21.4631 15.5388C21.2464 16.0095 20.6808 16.5468 20.1458 16.9792C20.1522 17.3252 20.1995 19.1462 21.4094 19.4216C21.3822 19.4423 19.7231 20.6919 17.6057 19.8972C17.3436 20.2124 17.0365 20.5664 16.6692 20.9665C15.1268 22.6326 13.7249 22.9433 12.596 22.9968C11.5217 23.0477 9.68493 22.4857 8.1526 20.8015C7.96358 20.5415 7.7664 20.2446 7.56276 19.9362C5.36831 20.7741 3.34825 19.4303 3.33522 19.4216C4.5453 19.1465 4.59284 17.3255 4.59889 16.9792C4.1251 16.5875 3.71242 16.0242 3.42897 15.3884C3.26209 15.0163 3.13894 14.6203 3.06862 14.2185C3.03356 14.0179 3.01114 13.8155 3.00319 13.615C2.99526 13.4156 3.0009 13.2153 3.02174 13.0202C3.10331 12.2569 3.42228 11.7303 3.95241 11.4558C4.05198 11.4049 3.97793 1.78617 12.5774 2.00363ZM16.8811 6.65402C16.683 7.62122 15.7686 9.00306 12.6057 9.77805C8.78424 10.7179 6.93666 10.6116 5.98952 11.2741C5.5146 11.7414 5.4126 11.756 5.05202 12.2917C4.89118 12.2658 4.68494 12.2591 4.51979 12.3474C4.24236 12.4945 4.14691 12.8848 4.11745 13.1853C3.98308 14.5032 4.71222 15.8832 5.40944 16.3855C5.55937 16.4933 5.69047 16.5529 5.80885 16.5857C5.58198 15.8779 5.32686 14.9275 5.5608 14.8532C5.73112 14.7641 6.23336 15.5835 6.50221 16.4568C6.54667 16.5988 6.59398 16.7375 6.64381 16.8737C6.675 16.921 6.70222 16.9672 6.71705 17.0095C7.59573 19.1165 9.08061 20.5832 10.4055 21.3904C11.2799 21.8916 12.0815 22.1223 12.5774 22.1159C14.0237 22.0982 17.3384 20.1903 18.635 16.0827C18.6417 16.0632 19.1455 14.5922 19.4055 14.6745C19.6677 14.7586 19.322 16.1088 19.138 16.6872C19.2513 16.6532 19.3706 16.5964 19.4934 16.5154C20.2064 16.0449 20.9541 14.6074 20.8508 13.2595C20.8284 12.9509 20.7401 12.5503 20.4651 12.3991C20.3043 12.3104 20.1018 12.3164 19.9436 12.3405C19.7935 12.2268 19.6748 12.1259 19.5755 12.0105C19.4754 12.2346 19.1281 12.8885 18.4631 12.9372C18.4631 12.9372 19.6508 13.1603 20.3831 12.3962C20.3831 12.3962 19.6575 13.8522 18.1282 13.8083C18.1247 13.8 17.9223 13.3208 17.1008 13.405C17.1008 13.405 17.1932 14.0832 16.5628 14.2995C15.6782 14.5878 15.4817 13.7077 15.4817 13.7077C15.1009 13.7765 14.624 14.0672 14.4807 14.3357C14.3622 14.5582 14.0509 14.5634 14.2229 14.3279C14.7232 13.6429 15.0137 13.4337 15.6624 13.1862C16.0097 13.054 16.2122 12.9763 16.2122 12.9763C16.2829 12.6208 15.023 13.083 15.0051 13.0896C16.1419 11.6971 17.3164 12.6341 18.5198 11.7331C18.5157 11.746 18.318 12.3548 17.759 12.5534C17.759 12.5534 19.0196 12.5731 19.5579 11.988C19.2794 11.6516 19.1475 11.1816 18.8538 9.92941C18.6284 8.90338 17.902 7.67664 16.8811 6.65402ZM10.6643 19.4441C11.9338 18.1805 12.1497 18.8041 12.4475 18.8034C12.7455 18.8024 12.9664 18.1961 14.178 19.4734C14.2143 19.459 14.2498 19.4483 14.2864 19.448C14.3492 19.4475 14.283 19.6517 14.1028 19.738C14.0306 19.9837 13.7189 20.6775 12.4983 20.6804C11.2807 20.6834 10.8124 19.9454 10.7141 19.7165C10.4868 19.6214 10.5282 19.3777 10.5833 19.405C10.6108 19.4187 10.6377 19.4315 10.6643 19.4441ZM13.3049 19.5241C12.8324 19.3128 12.2638 19.2466 11.677 19.528C11.6421 19.5447 11.6017 19.5572 11.5589 19.5681C11.5653 19.5672 11.571 19.5672 11.5774 19.5661C11.5982 19.5628 11.5129 19.6019 11.4358 19.6364C11.6935 19.6872 11.9697 19.7677 12.429 19.7644C12.943 19.7602 13.2063 19.6462 13.5061 19.6071C13.4571 19.5846 13.4092 19.5653 13.4329 19.571C13.4384 19.5725 13.4431 19.5726 13.4485 19.5739C13.4018 19.56 13.3536 19.5459 13.3049 19.5241ZM6.56666 11.6902C7.74669 12.6328 8.89829 11.6525 10.013 13.1101C9.99907 13.1046 8.75994 12.6193 8.82936 12.9919C8.8346 12.9941 9.03214 13.075 9.36842 13.2116C10.0043 13.4706 10.289 13.6893 10.7796 14.406C10.9484 14.6528 10.6431 14.6476 10.5266 14.4148C10.3862 14.1336 9.91869 13.8294 9.54518 13.7575C9.54254 13.77 9.34689 14.6756 8.48561 14.3757C7.86732 14.1493 7.95729 13.4402 7.95729 13.4402C7.14474 13.3511 6.94948 13.862 6.94948 13.862C5.46112 13.9073 4.74996 12.4067 4.73952 12.3845C5.45344 13.1791 6.60786 12.9536 6.62135 12.9509C5.83416 12.8895 5.50026 11.9011 5.50026 11.9011C5.99777 12.5726 7.31276 12.5486 7.31276 12.5486C6.76591 12.3413 6.57162 11.7066 6.56666 11.6902Z" fill="currentColor"/></svg>',
  makeup: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.0794 13.3338H15.0293V10.6151C15.0293 10.4352 14.9092 10.2852 14.7489 10.2253V5.94724C14.7489 4.9677 14.2282 4.16807 13.7375 3.63832C13.4971 3.36844 13.2468 3.15854 13.0665 3.00861C12.9764 2.93864 12.8963 2.87867 12.8462 2.83869C12.8262 2.8287 12.8062 2.8187 12.7961 2.80871C12.3856 2.3889 11.6445 2.3989 11.2339 2.8287C11.2339 2.8287 11.2339 2.8287 11.2239 2.83869C11.2139 2.84869 11.1838 2.86868 11.1638 2.89866C11.1137 2.94864 11.0336 3.01861 10.9435 3.09857C10.7632 3.26849 10.5329 3.50838 10.2926 3.79824C9.8319 4.34799 9.30114 5.14762 9.30114 5.95724V10.2652C9.17096 10.3152 9.05079 10.4052 9.02074 10.5451V10.6251V13.3438H8.90057C8.70029 13.3438 8.54006 13.4737 8.5 13.6437V13.7236V21.1202C8.5 21.3301 8.68026 21.5 8.90057 21.5H15.0994C15.3197 21.5 15.5 21.3301 15.5 21.1202V13.7236C15.5 13.5137 15.3197 13.3438 15.0994 13.3438L15.0794 13.3338ZM10.9835 4.29801C11.1938 4.03813 11.4142 3.82823 11.5744 3.66831C11.6545 3.58834 11.7246 3.52837 11.7647 3.48839C11.7847 3.4684 11.8047 3.44841 11.8147 3.43841C11.8147 3.43841 11.8247 3.43841 11.8247 3.42842L11.8748 3.37844C11.8748 3.37844 11.9349 3.32846 11.995 3.32846C12.0551 3.32846 12.0951 3.34845 12.1152 3.37844C12.1452 3.40843 12.1753 3.43841 12.2153 3.4684C12.2153 3.4684 12.2153 3.4684 12.2253 3.4684C12.2353 3.4684 12.2554 3.48839 12.2754 3.49838C12.3155 3.52837 12.3856 3.57835 12.4557 3.63832C12.6059 3.75826 12.8162 3.93818 13.0265 4.16807C13.4471 4.62786 13.8176 5.24757 13.8176 5.93725V10.1953H10.1824V5.94724C10.1824 5.44748 10.5429 4.83776 10.9936 4.29801H10.9835ZM9.89199 11.0449H14.118V13.3438H9.89199V11.0449Z" fill="currentColor"/></svg>'
};

const categoryLabels = { all: "ALL", look: "LOOK", lip: "LIP COLOR", blush: "BLUSH", foundation: "FOUNDATION", eyelashes: "EYELASHES", eyeliner: "EYE LINER", eyebrow: "EYEBROW", eyeshadow: "EYESHADOW" };
const categoryIcons = {
  lip: '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill="currentColor" d="M24.4,21.72h0v-4.12c0-.34-.22-.63-.52-.74v-5.9c0-2.62-2.35-4.79-2.73-5.12-.28-.32-.7-.51-1.15-.51h0c-.48,0-.91.21-1.16.52-.28.29-2.72,2.94-2.72,5.11v5.9c-.3.11-.52.4-.52.74v4.12c-.37,0-.68.3-.68.68v11.6c0,.37.3.68.68.68h8.8c.37,0,.68-.3.68-.68v-11.6c0-.37-.3-.68-.68-.68ZM22.8,18.4v3.2h-5.6v-3.2h5.6ZM19.86,6.73s.09-.05.14-.05c0,0,.1.01.14.05.03.04.06.07.09.1.02.02,2.29,1.97,2.29,4.13v5.85h-5.05v-5.85c0-1.39,1.7-3.49,2.39-4.23Z"/></svg>',
  eyelashes: '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill="currentColor" d="M36.6,22.27c-.2-.25-4.08-5.08-9.55-6.8-.76-.29-1.58-.57-2.49-.84-1.94-.56-2.37-3.03-2.37-3.03,0,0-.4,2.36-.87,2.7-.48.35-2.64-1.58-3.21-3.58-.15,2.27,1.23,3.8.73,4.21-.36.3-4.28-2.11-5.08-6.11-.17,4.24,3.03,7,2.7,7.24-.33.24-4.01-.97-5.28-4.46.53,4.66,3.64,5.25,3.04,5.92-.15.17-1.77-.17-3.47-1.24-1.89-1.18-3.88-3.23-4.33-5.94-.03,3.5,1.53,5.83,3.08,7.2,1.52,1.34,3.01,1.76,2.86,1.98-.5.71-4.76-.16-5.89-2.72.52,2.93,2.76,3.82,3.81,4.17.15.05.42.34.3.56-.03.03-.05.06-.08.09-.16.12-.5.2-1.16.15-1.72-.13-5.01-1.27-6.32-4.32.09,1.16.71,3.41,2.62,4.81,1.78,1.31,2.8,1.59,3.8,1.53.1.07.19.14.28.21.06.14.13.29.22.41h0s.04.04.08.09c-.46,0-1.12-.02-1.24,0-.94.15-2.92.68-2.88,1.24.02.25.87-.22,2.4-.17,1.23.04,2.43.34,3.03.52.09.1.17.19.27.29-.21.05-.46.1-.72.16-.93.21-2.88.86-2.81,1.42.03.24.86-.27,2.39-.31,1.06-.03,2.1.13,2.77.27.09.07.17.14.26.21-.24.13-.54.29-.88.48-.84.47-1.43.93-1.41,1.08.02.14.18.3,1.13,0,.76-.24,2.1-.7,2.97-.89,2.2,1.31,4.94,2.4,7.97,2.4,7.51,0,13.27-6.7,13.33-6.77.24-.3.37-.68.37-1.07s-.13-.77-.37-1.07ZM35.72,23.56s-.01.03-.02.04c0-.02.01-.03.02-.04ZM27.68,18.42c.19.28.29.62.29.96,0,.46-.18.9-.51,1.22-.32.32-.76.51-1.22.51h0c-.34,0-.67-.1-.96-.29-.28-.19-.5-.46-.63-.78-.13-.32-.16-.66-.1-1s.23-.64.47-.88c.24-.24.55-.41.88-.47.33-.07.68-.03,1,.1s.58.35.77.64ZM23.28,29.98c-6.9,0-12.34-6.25-12.39-6.31l-.23.18s0,0,0,0l.23-.18c-.07-.09-.11-.21-.11-.32s.04-.23.11-.33c.18-.23,3.62-4.49,8.44-6.22-.72.62-1.29,1.4-1.66,2.28-.46,1.12-.58,2.34-.34,3.53s.82,2.27,1.67,3.12c.85.85,1.94,1.43,3.13,1.67,1.18.23,2.41.11,3.53-.35,1.11-.46,2.07-1.25,2.74-2.25.67-1,1.03-2.18,1.03-3.39,0-1.62-.65-3.18-1.8-4.32-.09-.09-.18-.16-.27-.24,3.89,1.44,6.85,4.49,7.89,5.69.19.33.33.7.43,1.11,0,0,0,.02-.02.03-.05.06-5.49,6.31-12.39,6.31Z"/></svg>',
  eyeliner: '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill="currentColor" d="M36.38,19.29c-.09-.11-.88-1.1-2.2-2.31-1.72-2.1-5.48-6.32-12.41-6.13-5.67.76-8.58,3.91-12.01,7.24-2.19,1.48-4.48.33-6.52-.34-.34-.11-.59.32-.34.58,1.32,1.41,3.23,2.77,7,3.3.98,1.07,6.34,6.57,13.15,6.57,7.51,0,13.27-6.7,13.33-6.76.24-.3.37-.68.37-1.07s-.13-.77-.37-1.07ZM27.46,15.44c.19.28.29.62.29.96,0,.46-.18.9-.51,1.22s-.76.51-1.22.51h0c-.34,0-.67-.1-.96-.29-.28-.19-.5-.46-.63-.78-.13-.32-.16-.66-.1-1,.07-.33.23-.64.47-.88.24-.24.55-.41.88-.47.33-.07.68-.03,1,.1s.58.35.77.64ZM35.44,20.69c-.05.06-5.49,6.31-12.39,6.31s-12.34-6.25-12.39-6.31l-.43.34h0l.43-.34c-.07-.09-.11-.21-.11-.33s.04-.23.11-.33c.18-.23,3.62-4.49,8.44-6.22-.72.62-1.29,1.4-1.66,2.28-.46,1.12-.58,2.34-.34,3.53s.82,2.27,1.67,3.12c.85.85,1.94,1.43,3.13,1.67,1.18.23,2.41.11,3.53-.35s2.07-1.25,2.74-2.25c.67-1,1.03-2.18,1.03-3.39,0-1.62-.65-3.18-1.8-4.32-.09-.09-.18-.16-.27-.24,4.75,1.76,8.13,5.95,8.31,6.18.07.09.11.21.11.33s-.04.23-.11.33Z"/></svg>',
  eyebrow: '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill="currentColor" d="M3.6,20.65s4.58-5.45,10.4-5.45c3.57,0,4.4.15,4.4.15,0,0,1.81.3,3.92.69,2.25.67,11.51,3.51,12.89,4.61,1.51,1.2,1.33,3.19.83,3.77-.29.29-.64.51-1.03.65-.37.14-.77.17-1.15.09l-.34-.07c-.74-.15-1.46-.41-2.12-.78-.78-.45-1.59-.83-2.43-1.14-1.66-.59-11.56-3.86-14.14-4.19-2.58-.34-3.41-.59-5.82,0-2.41.59-5.41,1.68-5.41,1.68Z"/></svg>',
  eyeshadow: '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill="currentColor" d="M35.33,18.71c-.62-.77-6.24-7.54-13.56-7.54s-13.51,7.47-13.56,7.54c-.24.31-.38.69-.38,1.08s.13.78.38,1.08h0c.06.07,5.86,6.88,13.56,6.88s13.51-6.82,13.56-6.88c.24-.31.38-.69.38-1.08s-.13-.78-.38-1.09ZM26.26,14.79c.19.29.3.63.3.98,0,.47-.19.91-.52,1.24-.33.33-.78.51-1.24.52-.35,0-.69-.1-.98-.3-.29-.19-.51-.47-.65-.79-.13-.32-.17-.67-.1-1.02.07-.34.24-.65.48-.9.25-.25.56-.41.9-.48.34-.07.69-.03,1.02.1.32.13.6.36.79.65ZM34.39,20.15c-.05.06-5.64,6.42-12.62,6.42s-12.51-6.3-12.62-6.43c-.07-.1-.12-.22-.12-.34s.04-.24.12-.35c.04-.06,3.59-4.57,8.64-6.35-.75.64-1.35,1.44-1.73,2.36-.47,1.14-.59,2.39-.35,3.59.24,1.21.84,2.31,1.71,3.18.87.87,1.98,1.46,3.18,1.7,1.21.24,2.46.11,3.59-.36,1.14-.47,2.11-1.27,2.79-2.29.68-1.02,1.05-2.22,1.05-3.45,0-1.65-.66-3.23-1.83-4.4-.09-.09-.18-.17-.27-.25,4.82,1.8,8.28,6.05,8.46,6.28.08.1.12.22.12.34s-.04.24-.12.35Z"/><path fill="currentColor" d="M31.19,15.07c-2.92-4.29-14.88-12.04-27.51,2.56,0,0,.8,3.06,6.35,4.67l-1.68-2.48,4.74-4.95,3.65-1.98,4.59-1.17,4.09.44,5.77,2.91Z"/></svg>',
  foundation: '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.4055 25.4112C29.2443 25.5182 29.0876 25.5932 28.9388 25.6381C29.1551 24.9395 29.386 23.7516 29.043 23.6413C28.6994 23.5304 28.2785 24.8404 28.2785 24.8404C26.5765 30.2599 22.2255 32.7764 20.327 32.7998C19.6825 32.8083 18.6577 32.5194 17.5397 31.884C15.9808 30.9461 14.2438 29.2992 13.0564 26.9715C12.826 26.4831 12.6191 25.9623 12.4455 25.4047C12.0926 24.2524 11.6928 23.8763 11.4692 23.994C11.1948 24.0815 11.3244 24.8506 11.4938 25.5179C11.3258 25.4795 11.1361 25.398 10.9176 25.2394C10.0024 24.5766 9.04477 22.7559 9.22121 21.0171C9.25989 20.6206 9.38552 20.106 9.74969 19.9119C9.8756 19.8442 10.0193 19.8213 10.1593 19.8185C10.4425 20.9344 10.8199 22.0664 11.0562 21.984C11.2852 21.9039 11.0565 20.6305 11.0077 19.1326C11.1782 18.9627 11.367 18.8033 11.679 18.4952C12.9223 17.6211 15.347 17.7614 20.3634 16.5213C24.5156 15.4988 25.7166 13.6762 25.9766 12.4C27.3167 13.7492 28.2695 15.3676 28.5653 16.7214C28.844 17.9143 29.0114 18.5672 29.2206 19.0065C29.1808 20.558 28.9335 21.9019 29.1689 21.984C29.3996 22.0641 29.7652 20.9866 30.0461 19.8969C30.2456 19.8715 30.4859 19.8721 30.6812 19.9805C31.0423 20.1799 31.1581 20.7084 31.1874 21.1155C31.3229 22.8939 30.3413 24.7905 29.4055 25.4112ZM32.3844 20.9989C32.3047 19.9683 31.9036 19.2592 31.221 18.8877C31.1078 18.8253 31.2077 6.68583 20.1359 6.40478C8.87994 6.11867 8.97705 18.7601 8.84672 18.827C8.15257 19.1878 7.7354 19.8803 7.62872 20.884C7.60141 21.1406 7.59409 21.4034 7.60451 21.6656C7.61492 21.9292 7.6442 22.1945 7.69008 22.4582C7.78213 22.9862 7.94258 23.507 8.16101 23.9961C8.53202 24.8316 9.07276 25.5711 9.69288 26.086C9.685 26.5396 9.62335 28.9344 8.03885 29.2961C8.03885 29.2961 10.6905 31.0774 13.5721 29.9726C13.8387 30.3779 14.0965 30.7683 14.3439 31.11C16.3496 33.3236 18.7532 34.0628 20.1592 33.9959C21.6371 33.9256 23.4721 33.5167 25.4912 31.3264C25.972 30.8006 26.3737 30.3363 26.7168 29.922C29.5112 30.9751 31.6958 29.2961 31.6958 29.2961C30.1119 28.9344 30.05 26.5413 30.0415 26.0865C30.7419 25.5182 31.4816 24.8125 31.7654 24.1939C31.9959 23.6925 32.1716 23.1568 32.2788 22.6155C32.3323 22.3443 32.3686 22.0728 32.3866 21.8016C32.4052 21.5304 32.4043 21.262 32.3844 20.9989Z" fill="currentColor"/><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M29.4055 25.4112C29.2443 25.5182 29.0876 25.5932 28.9388 25.6381C29.1551 24.9395 29.386 23.7516 29.043 23.6413C28.6994 23.5304 28.2785 24.8404 28.2785 24.8404C26.5764 30.2599 22.2255 32.7764 20.327 32.7998C19.6825 32.8083 18.6577 32.5194 17.5397 31.884C15.9808 30.9461 14.2438 29.2992 13.0564 26.9715C12.826 26.4831 12.6191 25.9623 12.4454 25.4047C12.0926 24.2524 11.6928 23.8763 11.4692 23.994C11.1948 24.0815 11.3244 24.8506 11.4938 25.5179C11.3258 25.4795 11.1361 25.398 10.9176 25.2394C10.0023 24.5766 9.04475 22.7559 9.22119 21.0171C9.25987 20.6206 9.3855 20.106 9.74968 19.9119C9.87559 19.8442 10.0193 19.8213 10.1593 19.8185C10.4425 20.9344 10.8199 22.0664 11.0562 21.984C11.2852 21.9038 11.0565 20.6305 11.0076 19.1326C11.1782 18.9627 11.367 18.8033 11.679 18.4952C12.9223 17.6211 15.347 17.7614 20.3634 16.5213C24.5156 15.4988 25.7165 13.6761 25.9765 12.4C27.3167 13.7492 28.2695 15.3676 28.5653 16.7214C28.844 17.9143 29.0114 18.5672 29.2206 19.0065C29.1808 20.558 28.9335 21.9019 29.1689 21.984C29.3995 22.0641 29.7651 20.9866 30.046 19.8969C30.2456 19.8715 30.4859 19.8721 30.6812 19.9804C31.0423 20.1799 31.1581 20.7084 31.1874 21.1155C31.3229 22.8939 30.3413 24.7905 29.4055 25.4112Z" fill="currentColor"/></svg>',
  blush: '<svg viewBox="0 0 40 40" aria-hidden="true"><path opacity="0.361258" fill-rule="evenodd" clip-rule="evenodd" d="M24.3648 20.8359C26.2407 20.908 27.7036 22.4873 27.6308 24.3638C27.5583 26.2404 25.9787 27.7029 24.1023 27.6308C22.226 27.5583 20.7639 25.979 20.8359 24.1029C20.9084 22.2259 22.4884 20.7638 24.3648 20.8359Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9066 29.4969C22.3634 31.3703 20.6535 32.4146 19.2019 32.3707C16.8614 32.2992 13.7953 29.4875 11.9863 25.09C11.9195 24.8951 11.853 24.7002 11.7869 24.5058C11.5249 24.6389 10.8781 24.8467 10.2599 24.3945C9.37472 23.7482 8.4479 21.9718 8.6187 20.2751L8.61907 20.2755C8.65624 19.8884 8.77786 19.3863 9.12997 19.1971C9.33981 19.0836 9.60146 19.0919 9.80566 19.1252C10.2291 20.4117 10.7839 21.5642 11.3913 22.1799C11.3887 22.1802 10.9712 19.8506 11.0422 17.7752C12.2453 16.9219 14.5445 17.0986 19.3967 15.8897C23.413 14.8919 24.5748 13.1139 24.8267 11.8687C26.1225 13.1851 27.0441 14.7637 27.3309 16.0846C27.8418 18.2939 27.1105 22.2699 27.0925 22.2707C27.7036 21.6535 28.2746 20.4889 28.7145 19.1877C28.9157 19.1566 29.1733 19.1494 29.3775 19.2641C29.7266 19.4586 29.8384 19.9743 29.867 20.3716C29.9886 21.9816 29.1796 23.6888 28.3392 24.4108C28.5231 24.6287 28.7378 24.8872 28.9709 25.1759C28.9709 25.1713 28.9705 25.1634 28.9705 25.1592C29.65 24.603 30.3681 23.9113 30.6433 23.3055C30.867 22.8144 31.0374 22.2896 31.1414 21.7595C31.1932 21.4939 31.2289 21.2279 31.2461 20.9622C31.2641 20.697 31.2634 20.434 31.2439 20.1764C31.1669 19.1668 30.7776 18.4725 30.1155 18.1081C30.0055 18.0476 30.2577 18.0037 30.1459 17.9655C30.1699 17.6019 30.141 16.5326 30.1815 15.4943C30.2559 13.7235 29.4803 11.8452 29.4803 11.8456C29.4758 11.8793 29.4717 11.9137 29.4676 11.9481C28.4176 7.88511 24.2835 5.60463 19.3044 5.60425C14.3343 5.60387 10.2231 7.86014 9.12997 11.8664C9.12922 11.8573 9.12772 11.8479 9.12659 11.8388C9.12697 11.8384 8.25458 13.7095 8.31126 15.4667C8.34204 16.4751 8.29737 17.5095 8.31689 17.8898C8.20127 17.9311 8.53611 17.9833 8.40961 18.0491C7.73617 18.4025 7.33151 19.0806 7.2279 20.0636C7.20162 20.3148 7.19449 20.5721 7.20425 20.8294C7.21439 21.0871 7.24291 21.3474 7.28721 21.6055C7.37693 22.1227 7.53234 22.6328 7.74405 23.1118C8.10405 23.9302 8.62921 24.6545 9.23058 25.1585C9.22419 25.4536 9.19566 27.4079 7.62581 27.9059C7.62581 27.9059 9.9652 29.8341 12.6729 28.4731C13.0464 29.0436 13.4045 29.6074 13.7423 30.0789C15.6879 32.247 17.5221 33.5429 19.1884 33.5982C20.83 33.6531 22.598 32.4362 24.5568 30.2912C24.6045 30.2382 24.6484 30.1886 24.693 30.1379L23.9066 29.4969Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.2429 32.6168L32.2491 32.6114L32.1988 32.5519C32.174 32.5143 32.1528 32.4759 32.1229 32.4403C32.0935 32.405 32.0591 32.3773 32.0262 32.3463L28.426 28.051L26.582 29.5638L30.2069 33.8886C30.2259 33.9151 30.2402 33.9431 30.2611 33.9681C30.2824 33.9934 30.3076 34.0126 30.3304 34.0356L30.4047 34.1246L30.4136 34.1169C30.853 34.4841 31.5063 34.5014 31.9642 34.1258C32.4222 33.7498 32.5263 33.1113 32.2429 32.6168ZM27.8528 27.9693C28.0862 27.7771 28.1566 27.436 28.0022 27.195L26.9722 25.1769C26.7272 24.7951 26.2553 24.6785 25.9352 24.9429L25.6716 25.1681L26.4117 26.1806L26.3432 26.2731L25.4436 25.3634L24.7368 25.9677L25.4208 26.8574L25.3205 26.9445L24.5158 26.1568L24.2232 26.4074C23.9039 26.6713 23.9344 27.1517 24.2685 27.459L25.8737 28.9385C26.0842 29.1326 26.4357 29.1265 26.6687 28.9346L27.8528 27.9693Z" fill="currentColor"/></svg>'
};
const categoryIconImages = { lip: "assets/icon-cat-lip.png", blush: "assets/icon-cat-blush.png", foundation: "assets/icon-cat-foundation.png", eyelashes: "assets/icon-cat-eyelashes.png", eyeliner: "assets/icon-cat-eyeliner.png", eyebrow: "assets/icon-cat-eyebrow.png", eyeshadow: "assets/icon-cat-eyeshadow.png" };
function createCategoryIconNode(category, className = "category-heading-icon", { preferOutline = false } = {}) {
  const image = categoryIconImages[category];
  const icon = categoryIcons[category];
  if (icon && preferOutline) {
    const span = document.createElement("span");
    span.className = className;
    span.innerHTML = icon;
    return span;
  }
  if (image) {
    const img = document.createElement("img");
    img.className = `${className} ${className}--badge`;
    img.src = image;
    img.alt = "";
    return img;
  }
  if (icon) {
    const span = document.createElement("span");
    span.className = className;
    span.innerHTML = icon;
    return span;
  }
  return null;
}
function createCategoryHeading(category, withLabel = true) {
  const heading = document.createElement("h3");
  const iconNode = createCategoryIconNode(category);
  if (iconNode) heading.append(iconNode);
  if (withLabel) heading.append(document.createTextNode(categoryLabels[category]));
  else heading.setAttribute("aria-label", categoryLabels[category]);
  return heading;
}
const MAKEUP_CATEGORIES = ["lip", "blush", "foundation", "eyelashes", "eyeliner", "eyebrow", "eyeshadow"];
const selectedByCategory = {
  look: null,
  lip: null,
  blush: null,
  foundation: null,
  eyelashes: null,
  eyeliner: null,
  eyebrow: null,
  eyeshadow: null
};

let uxFlow = "multi-launcher";
let selectedSingle = catalog.look[0];
let activeSection = "look";
let activeMakeupCategory = "lip";
let currentMode = null;
const ZOOM_MIN = 1;
const ZOOM_MAX = 1.22;
const ZOOM_STEP = .07;
let zoom = ZOOM_MIN;
function updateZoomButtons() {
  document.querySelector('[data-action="zoom-in"]').disabled = zoom >= ZOOM_MAX - .001;
  document.querySelector('[data-action="zoom-out"]').disabled = zoom <= ZOOM_MIN + .001;
}
let bannerTimer;
let transitionTimer;
let conversationTimer;
let composerDraftAction = null;
let composerDraftItems = [];
let followupUserTurn = null;
let followupAssistantTurn = null;

const toolFrame = document.getElementById("toolFrame");
const productShelf = document.getElementById("productShelf");
const lookPicker = document.getElementById("lookPicker");
const makeupModeTabs = document.getElementById("makeupModeTabs");
const makeupTabs = document.getElementById("makeupTabs");
const applyBanner = document.getElementById("applyBanner");
const appliedName = document.getElementById("appliedName");
const appliedLabel = appliedName.previousElementSibling;
const cameraView = document.getElementById("cameraView");
const backdrop = document.getElementById("overlayBackdrop");
const chatShell = document.getElementById("chatShell");
const sidebarToggle = document.querySelector(".sidebar-collapse");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const isMobileViewport = () => window.matchMedia("(max-width: 767px)").matches;
function getSidebarBand() {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width <= 1099) return "tablet";
  return "desktop";
}
const assistantTurn = document.getElementById("assistantTurn");
const assistantCopy = assistantTurn.querySelector(":scope > p");
const userTurn = document.querySelector(".user-turn");
const recommendationCard = document.getElementById("recommendationCard");
const recommendationView = document.querySelector(".recommendation-view");
const recommendationGroups = document.getElementById("recommendationGroups");
const recommendationPicker = document.getElementById("recommendationPicker");
const recommendationModeTabs = document.getElementById("recommendationModeTabs");
const recommendationMakeupTabs = document.getElementById("recommendationMakeupTabs");
const recommendationShelf = document.getElementById("recommendationShelf");
const recommendationTitle = document.getElementById("recommendationTitle");
const recommendationHint = document.getElementById("recommendationHint");
const recommendationActions = document.getElementById("recommendationActions");
const tryPhotoButton = document.getElementById("tryPhotoButton");
const tryLiveButton = document.getElementById("tryLiveButton");
const experienceCard = document.getElementById("experienceCard");
const experienceChooser = document.getElementById("experienceChooser");
const experienceFlowBack = document.getElementById("experienceFlowBack");
const liveOptionTitle = document.getElementById("liveOptionTitle");
const chooserHeading = document.getElementById("chooserHeading");
const secondaryExperiences = document.getElementById("secondaryExperiences");
const experiencePowered = document.getElementById("experiencePowered");
const openingCameraView = document.getElementById("openingCameraView");
const modelChooser = document.getElementById("modelChooser");
const uploadChooser = document.getElementById("uploadChooser");
const uploadingView = document.getElementById("uploadingView");
const creatingPhotoView = document.getElementById("creatingPhotoView");
const clearMakeupButton = document.getElementById("clearMakeupButton");
const vtoBack = document.getElementById("vtoBack");
const vtoBackLabel = document.getElementById("vtoBackLabel");
const toolStatus = document.getElementById("toolStatus");
const themeToggle = document.getElementById("themeToggle");
const themeToggleLabel = document.getElementById("themeToggleLabel");
const composer = document.querySelector(".composer");
const composerText = document.getElementById("composerText");
const sendButton = document.getElementById("sendButton");
const photoResult = document.getElementById("photoResult");
const photoResultSummary = document.getElementById("photoResultSummary");
const photoResultCaption = document.getElementById("photoResultCaption");
const photoResultCompliment = document.getElementById("photoResultCompliment");
const toolAnchor = document.createElement("span");
toolAnchor.hidden = true;
toolFrame.before(toolAnchor);
portrait.src = portraitSources.live;

const mobileSidebarToggle = document.getElementById("mobileSidebarToggle");
const mobileSidebarButtons = [sidebarToggle, mobileSidebarToggle];

function setMobileSidebarOpen(isOpen) {
  chatShell.classList.toggle("sidebar-open", isOpen);
  sidebarBackdrop.classList.toggle("show", isOpen);
  mobileSidebarButtons.forEach((button) => {
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Close sidebar" : "Open sidebar");
    button.title = isOpen ? "Close sidebar" : "Open sidebar";
  });
}

function closeMobileSidebar() {
  setMobileSidebarOpen(false);
}

function toggleMobileSidebar() {
  setMobileSidebarOpen(!chatShell.classList.contains("sidebar-open"));
}

sidebarToggle.addEventListener("click", () => {
  if (isMobileViewport()) {
    toggleMobileSidebar();
    return;
  }
  const isCollapsed = chatShell.classList.toggle("sidebar-collapsed");
  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
  sidebarToggle.setAttribute("aria-label", isCollapsed ? "Expand sidebar" : "Collapse sidebar");
  sidebarToggle.title = isCollapsed ? "Expand sidebar" : "Collapse sidebar";
});

mobileSidebarToggle.addEventListener("click", toggleMobileSidebar);
sidebarBackdrop.addEventListener("click", closeMobileSidebar);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatShell.classList.contains("sidebar-open")) closeMobileSidebar();
});

let sidebarBand = getSidebarBand();
if (sidebarBand === "tablet") chatShell.classList.add("sidebar-collapsed");
window.addEventListener("resize", () => {
  const nextBand = getSidebarBand();
  if (nextBand !== sidebarBand) {
    chatShell.classList.toggle("sidebar-collapsed", nextBand === "tablet");
    sidebarBand = nextBand;
  }
  if (nextBand !== "mobile") closeMobileSidebar();
});

function createSelectedMark() {
  const mark = document.createElement("span");
  mark.className = "look-selected-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.innerHTML = '<svg viewBox="0 0 18 18"><path d="m4 9 3 3 7-7"/></svg>';
  return mark;
}

function createProductButton(item, selected, onSelect, compact = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `product-card product-${item.type}${compact ? " compact" : ""}${selected ? " selected" : ""}`;
  button.setAttribute("aria-label", `Try ${item.name}`);
  button.setAttribute("aria-pressed", String(selected));
  button.dataset.itemType = item.type;
  button.dataset.itemId = item.id;

  const visual = document.createElement("span");
  visual.className = "product-visual";
  if (item.color) {
    const color = document.createElement("i");
    color.style.backgroundColor = item.color;
    visual.append(color);
  } else {
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = `${item.name} reference`;
    visual.append(image);
  }
  visual.append(createSelectedMark());

  const name = document.createElement("b");
  name.textContent = item.name;
  button.append(visual, name);
  button.addEventListener("click", onSelect);
  return button;
}

let recommendationViewMaxHeight = 0;
let pendingPeekItem = null;
function fitRecommendationViewHeight() {
  recommendationView.style.minHeight = "";
  const naturalHeight = recommendationView.getBoundingClientRect().height;
  recommendationViewMaxHeight = Math.max(naturalHeight, recommendationViewMaxHeight);
  recommendationView.style.minHeight = `${recommendationViewMaxHeight}px`;
}

function updateShelfEdgeState() {
  const maxScroll = recommendationShelf.scrollWidth - recommendationShelf.clientWidth;
  recommendationShelf.classList.toggle("shelf-at-start", recommendationShelf.scrollLeft <= 1);
  recommendationShelf.classList.toggle("shelf-at-end", recommendationShelf.scrollLeft >= maxScroll - 1);
}
recommendationShelf.addEventListener("scroll", updateShelfEdgeState);

window.addEventListener("resize", () => {
  recommendationViewMaxHeight = 0;
  fitRecommendationViewHeight();
  updateShelfEdgeState();
});

function renderRecommendationChooser() {
  recommendationGroups.innerHTML = "";
  const isProposalOne = uxFlow === "multi-launcher";
  recommendationPicker.hidden = !isProposalOne;
  recommendationGroups.hidden = isProposalOne;
  recommendationActions.hidden = !isProposalOne;

  if (isProposalOne) {
    renderRecommendationTabs();
    const sectionChanged = recommendationShelf.dataset.renderedSection !== activeSection;
    const preservedScrollLeft = recommendationShelf.scrollLeft;
    recommendationShelf.dataset.renderedSection = activeSection;
    recommendationShelf.innerHTML = "";
    recommendationShelf.classList.toggle("expanded-makeup", activeSection === "makeup");
    const appendItem = (item, container) => {
      const selected = selectedByCategory[item.type]?.id === item.id;
      container.append(createProductButton(item, selected, () => {
        if (item.type === "look") {
          MAKEUP_CATEGORIES.forEach((category) => { selectedByCategory[category] = null; });
        } else {
          selectedByCategory.look = null;
        }
        selectedByCategory[item.type] = selected ? null : item;
        pendingPeekItem = { type: item.type, id: item.id };
        renderRecommendationChooser();
      }, true));
    };
    if (activeSection === "look") {
      catalog.look.forEach((item) => appendItem(item, recommendationShelf));
    } else {
      MAKEUP_CATEGORIES.forEach((category) => {
        const group = document.createElement("section");
        group.className = "recommendation-category-group";
        const heading = createCategoryHeading(category);
        const row = document.createElement("div");
        row.className = "recommendation-row";
        catalog[category].forEach((item) => appendItem(item, row));
        group.append(heading, row);
        recommendationShelf.append(group);
      });
    }
    tryPhotoButton.disabled = getSelectedItems().length === 0;
    fitRecommendationViewHeight();
    recommendationShelf.scrollLeft = sectionChanged ? 0 : preservedScrollLeft;
    if (pendingPeekItem && !sectionChanged) {
      const key = pendingPeekItem;
      const cards = Array.from(recommendationShelf.querySelectorAll(".product-card"));
      const clickedIndex = cards.findIndex((c) => c.dataset.itemType === key.type && c.dataset.itemId === key.id);
      const prevCard = clickedIndex > 0 ? cards[clickedIndex - 1] : null;
      if (prevCard) {
        // Measure with the "at start" bleed padding already removed (no transition), since we're
        // about to scroll away from position 0 and that padding change would otherwise shift the
        // content mid-animation and throw off the target position.
        recommendationShelf.style.transition = "none";
        recommendationShelf.classList.remove("shelf-at-start");
        void recommendationShelf.offsetWidth;
        const shelfLeft = recommendationShelf.getBoundingClientRect().left;
        const prevLeft = prevCard.getBoundingClientRect().left - shelfLeft + recommendationShelf.scrollLeft;
        recommendationShelf.style.transition = "";
        recommendationShelf.scrollTo({ left: prevLeft + prevCard.offsetWidth / 2, behavior: "smooth" });
      } else {
        recommendationShelf.scrollTo({ left: 0, behavior: "smooth" });
      }
    }
    pendingPeekItem = null;
    updateShelfEdgeState();
    return;
  }

  Object.entries(catalog).forEach(([category, items]) => {
    const group = document.createElement("section");
    group.className = "recommendation-group";
    const heading = createCategoryHeading(category);
    const row = document.createElement("div");
    row.className = "recommendation-row";
    items.forEach((item) => row.append(createProductButton(item, selectedSingle?.id === item.id, () => {
      selectedSingle = item;
      renderRecommendationChooser();
      showExperienceForSingle();
    }, true)));
    group.append(heading, row);
    recommendationGroups.append(group);
  });
}

function renderRecommendationTabs() {
  recommendationModeTabs.innerHTML = "";
  recommendationMakeupTabs.innerHTML = "";
  [{ id: "look", label: "LOOK" }, { id: "makeup", label: "MAKEUP" }].forEach((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "tab";
    button.innerHTML = `${modeTabIcons[section.id]}<span>${section.label}</span>`;
    button.className = section.id === activeSection ? "active" : "";
    button.setAttribute("aria-selected", String(section.id === activeSection));
    button.addEventListener("click", () => {
      if (section.id !== activeSection) {
        if (section.id === "look") {
          MAKEUP_CATEGORIES.forEach((category) => { selectedByCategory[category] = null; });
        } else {
          selectedByCategory.look = null;
          activeMakeupCategory = "lip";
        }
      }
      activeSection = section.id;
      renderRecommendationChooser();
    });
    recommendationModeTabs.append(button);
  });

  recommendationMakeupTabs.hidden = true;
}

function getSelectedItems() {
  return Object.values(selectedByCategory).filter(Boolean);
}

function formatItemList(items) {
  const names = items.map((item) => item.name);
  if (names.length < 2) return names[0] || "the selected makeup";
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names.at(-1)}`;
}

function setComposerDraft(text, action, items = []) {
  composerDraftAction = action;
  composerDraftItems = [...items];
  composerText.textContent = text;
  composerText.classList.add("has-draft");
  composer.classList.add("has-draft");
  sendButton.focus();
}

function clearComposerDraft() {
  composerDraftAction = null;
  composerDraftItems = [];
  composerText.textContent = "Ask anything";
  composerText.classList.remove("has-draft");
  composer.classList.remove("has-draft");
}

function resetFollowupConversation() {
  assistantTurn.append(experienceCard, toolStatus, toolAnchor, toolFrame, photoResult);
  photoResult.hidden = true;
  followupUserTurn?.remove();
  followupAssistantTurn?.remove();
  followupUserTurn = null;
  followupAssistantTurn = null;
  clearComposerDraft();
}

function submitComposerDraft() {
  if (!composerDraftAction) return;
  const action = composerDraftAction;
  const instruction = composerText.textContent;
  const submittedItems = [...composerDraftItems];
  clearComposerDraft();

  followupUserTurn?.remove();
  followupAssistantTurn?.remove();
  followupUserTurn = document.createElement("div");
  followupUserTurn.className = "user-turn followup-user-turn";
  const bubble = document.createElement("div");
  bubble.className = "user-bubble";
  bubble.textContent = instruction;
  followupUserTurn.append(bubble);

  followupAssistantTurn = document.createElement("article");
  followupAssistantTurn.className = "assistant-turn followup-assistant-turn revealed";
  assistantTurn.after(followupUserTurn, followupAssistantTurn);
  if (action === "photo") {
    followupAssistantTurn.append(photoResult);
    experienceCard.hidden = true;
    showPhotoResult(submittedItems);
    return;
  }

  followupAssistantTurn.append(toolAnchor, experienceCard, toolStatus, toolFrame, photoResult);
  photoResult.hidden = true;
  experienceCard.hidden = false;
  setLiveOnlyLayout(false);
  showExperienceView(openingCameraView);
  followupUserTurn.scrollIntoView({ behavior: "smooth", block: "center" });
  transitionTimer = window.setTimeout(() => {
    openTryOn(action, true);
  }, 1000);
}

function showPhotoResult(items) {
  const itemNames = formatItemList(items);
  experienceCard.hidden = true;
  toolStatus.before(experienceCard);
  toolStatus.hidden = true;
  toolFrame.hidden = true;
  photoResultSummary.textContent = `I’ve applied ${itemNames} to your photo, keeping the finish fresh and lightweight for the outdoor wedding.`;
  photoResultCaption.textContent = `${itemNames} applied`;
  photoResultCompliment.textContent = "It looks beautiful on you—the soft color brightens your complexion and gives your eyes and features more definition without feeling heavy.";
  photoResult.hidden = false;
  photoResult.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderTabs() {
  makeupModeTabs.innerHTML = "";
  makeupTabs.innerHTML = "";
  const lockSection = uxFlow === "multi-launcher" && currentMode === "live";
  makeupModeTabs.hidden = lockSection;

  if (!lockSection) [{ id: "look", label: "LOOK" }, { id: "makeup", label: "MAKEUP" }].forEach((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "tab";
    button.innerHTML = `${modeTabIcons[section.id]}<span>${section.label}</span>`;
    button.className = section.id === activeSection ? "active" : "";
    button.setAttribute("aria-selected", String(section.id === activeSection));
    button.addEventListener("click", () => {
      activeSection = section.id;
      if (section.id === "makeup") activeMakeupCategory = "lip";
      renderMultiPicker();
    });
    makeupModeTabs.append(button);
  });

  makeupTabs.hidden = activeSection !== "makeup";
  if (activeSection === "makeup") {
    MAKEUP_CATEGORIES.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.role = "tab";
      const iconNode = createCategoryIconNode(category, "makeup-tab-icon", { preferOutline: true });
      if (iconNode) button.append(iconNode);
      button.append(document.createElement("span"));
      button.lastElementChild.textContent = categoryLabels[category];
      button.dataset.category = category;
      button.className = category === activeMakeupCategory ? "active" : "";
      button.setAttribute("aria-selected", String(category === activeMakeupCategory));
      button.addEventListener("click", () => scrollShelfToCategory(category));
      makeupTabs.append(button);
    });
  }
}

function scrollTabIntoView(category) {
  const btn = makeupTabs.querySelector(`[data-category="${category}"]`);
  if (!btn) return;
  const btnRect = btn.getBoundingClientRect();
  const tabsRect = makeupTabs.getBoundingClientRect();
  if (btnRect.left < tabsRect.left) {
    makeupTabs.scrollBy({ left: btnRect.left - tabsRect.left - 12, behavior: "smooth" });
  } else if (btnRect.right > tabsRect.right) {
    makeupTabs.scrollBy({ left: btnRect.right - tabsRect.right + 12, behavior: "smooth" });
  }
}

function setActiveMakeupTab(category) {
  activeMakeupCategory = category;
  Array.from(makeupTabs.children).forEach((btn) => {
    const isActive = btn.dataset.category === category;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });
  scrollTabIntoView(category);
}

let suppressMakeupSpy = false;
let suppressMakeupSpyTimer;
function scrollShelfToCategory(category) {
  const group = productShelf.querySelector(`[data-category="${category}"]`);
  if (!group) return;
  suppressMakeupSpy = true;
  window.clearTimeout(suppressMakeupSpyTimer);
  suppressMakeupSpyTimer = window.setTimeout(() => { suppressMakeupSpy = false; }, 500);
  setActiveMakeupTab(category);
  const delta = group.getBoundingClientRect().left - productShelf.getBoundingClientRect().left;
  productShelf.scrollBy({ left: delta, behavior: "smooth" });
}

function updateMakeupCategorySpy() {
  if (activeSection !== "makeup" || suppressMakeupSpy) return;
  const shelfLeft = productShelf.getBoundingClientRect().left;
  let closest = null;
  let closestDist = Infinity;
  productShelf.querySelectorAll("[data-category]").forEach((group) => {
    const dist = Math.abs(group.getBoundingClientRect().left - shelfLeft);
    if (dist < closestDist) { closestDist = dist; closest = group; }
  });
  if (!closest || closest.dataset.category === activeMakeupCategory) return;
  setActiveMakeupTab(closest.dataset.category);
}
productShelf.addEventListener("scroll", updateMakeupCategorySpy);

function renderMultiPicker() {
  const sectionChanged = productShelf.dataset.renderedSection !== activeSection;
  const preservedScrollLeft = productShelf.scrollLeft;
  if (sectionChanged) activeMakeupCategory = "lip";
  renderTabs();
  cameraView.classList.toggle("picker-makeup", activeSection === "makeup");
  productShelf.dataset.renderedSection = activeSection;
  productShelf.innerHTML = "";
  const appendItem = (item, container) => {
    const selected = selectedByCategory[item.type]?.id === item.id;
    container.append(createProductButton(item, selected, () => {
      if (uxFlow === "multi-live" || uxFlow === "multi-launcher") {
        if (item.type === "look") {
          MAKEUP_CATEGORIES.forEach((category) => { selectedByCategory[category] = null; });
        } else {
          selectedByCategory.look = null;
        }
      }
      selectedByCategory[item.type] = selected ? null : item;
      renderMultiPicker();
      showApplied(item.name, selected ? `${categoryLabels[item.type]} REMOVED` : `${categoryLabels[item.type]} APPLIED`);
    }));
  };
  if (activeSection === "look") {
    catalog.look.forEach((item) => appendItem(item, productShelf));
  } else {
    MAKEUP_CATEGORIES.forEach((category) => {
      const group = document.createElement("section");
      group.className = "recommendation-category-group";
      group.dataset.category = category;
      group.setAttribute("aria-label", categoryLabels[category]);
      const row = document.createElement("div");
      row.className = "recommendation-row";
      catalog[category].forEach((item) => appendItem(item, row));
      group.append(row);
      productShelf.append(group);
    });
  }
  productShelf.scrollLeft = sectionChanged ? 0 : preservedScrollLeft;
  updateMakeupCategorySpy();
}

function resetContentSelections() {
  Object.keys(selectedByCategory).forEach((category) => { selectedByCategory[category] = null; });
  selectedSingle = null;
  activeSection = "look";
  activeMakeupCategory = "lip";
  currentMode = null;
  renderRecommendationChooser();
  renderMultiPicker();
}

function renderSingleApplied() {
  makeupModeTabs.innerHTML = "";
  makeupTabs.innerHTML = "";
  productShelf.innerHTML = "";
  productShelf.append(createProductButton(selectedSingle, true, () => showApplied(selectedSingle.name, `${categoryLabels[selectedSingle.type]} APPLIED`)));
}

function configureVtoPicker(mode) {
  lookPicker.classList.remove("multi-picker", "single-picker");
  cameraView.classList.remove("picker-multi", "picker-makeup");
  if ((mode === "live" && uxFlow === "single") || (mode === "photo" && uxFlow === "multi-launcher")) {
    lookPicker.hidden = true;
    return;
  }
  lookPicker.hidden = false;
  if (uxFlow !== "single") {
    if (uxFlow !== "multi-launcher") {
      activeSection = "look";
      activeMakeupCategory = "lip";
    }
    lookPicker.classList.add("multi-picker");
    cameraView.classList.add("picker-multi");
    renderMultiPicker();
  } else {
    lookPicker.classList.add("single-picker");
    renderSingleApplied();
  }
}

function showApplied(name, label = "LOOK APPLIED") {
  appliedLabel.textContent = label;
  appliedName.textContent = name;
  applyBanner.classList.remove("show");
  window.clearTimeout(bannerTimer);
  requestAnimationFrame(() => requestAnimationFrame(() => applyBanner.classList.add("show")));
  bannerTimer = window.setTimeout(() => applyBanner.classList.remove("show"), 1800);
}

function showExperienceView(view) {
  [experienceChooser, openingCameraView, modelChooser, uploadChooser, uploadingView, creatingPhotoView].forEach((panel) => {
    panel.hidden = panel !== view;
  });
}

function setLiveOnlyLayout(enabled) {
  experienceCard.classList.toggle("live-only-flow", enabled);
  chooserHeading.hidden = enabled;
  secondaryExperiences.hidden = enabled;
  experiencePowered.hidden = enabled;
  liveOptionTitle.textContent = enabled ? "Try Live Makeup" : "Live Makeup";
}

function showExperienceForSingle() {
  setLiveOnlyLayout(false);
  recommendationCard.hidden = true;
  experienceCard.hidden = false;
  experienceFlowBack.hidden = false;
  showExperienceView(experienceChooser);
  experienceCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

function openTryOn(mode, preserveLauncher = false) {
  currentMode = mode;
  const isLive = mode === "live";
  toolFrame.classList.toggle("live-mode", isLive);
  portrait.src = isLive ? portraitSources.live : portraitSources.photo;
  portrait.alt = isLive ? "Live camera preview demonstration" : "Uploaded or selected portrait preview";
  clearMakeupButton.hidden = !isLive;
  const isSingle = uxFlow === "single";
  vtoBack.classList.toggle("with-label", isLive || isSingle);
  vtoBackLabel.hidden = !(isLive || isSingle);
  vtoBackLabel.textContent = "Back to list";
  vtoBack.setAttribute("aria-label", isSingle ? "Back to list" : uxFlow === "multi-launcher" ? "Back to recommendations" : "Back to try-on experience");
  experienceCard.hidden = true;
  if (!preserveLauncher) recommendationCard.hidden = true;
  toolStatus.hidden = true;
  toolFrame.hidden = false;
  document.body.classList.add("vto-open");
  configureVtoPicker(mode);
  window.setTimeout(() => {
    const targetTop = window.scrollY + toolFrame.getBoundingClientRect().top - 70;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  }, 70);
  const selectedItems = getSelectedItems();
  const item = isSingle ? selectedSingle : selectedItems[0];
  const appliedTitle = mode === "photo" && selectedItems.length > 1 ? formatItemList(selectedItems) : item?.name;
  const appliedLabelText = mode === "photo" && selectedItems.length > 1 ? `${selectedItems.length} ITEMS APPLIED` : item ? `${categoryLabels[item.type]} APPLIED` : "PREVIEW READY";
  showApplied(appliedTitle || "Original preview", appliedLabelText);
}

function expandTool() {
  document.body.appendChild(toolFrame);
  toolFrame.classList.add("expanded");
  toolFrame.setAttribute("role", "dialog");
  toolFrame.setAttribute("aria-modal", "true");
  toolFrame.setAttribute("aria-label", "YouCam Virtual Try-On expanded view");
  chatShell.inert = true;
  backdrop.classList.add("show");
  document.body.classList.add("overlay-open");
  document.body.style.overflow = "hidden";
  document.getElementById("closeFullscreen").focus();
}

function collapseTool(restoreFocus = true) {
  toolFrame.classList.remove("expanded");
  toolFrame.removeAttribute("role");
  toolFrame.removeAttribute("aria-modal");
  toolFrame.setAttribute("aria-label", "YouCam Virtual Try-On interactive UI");
  toolAnchor.after(toolFrame);
  chatShell.inert = false;
  backdrop.classList.remove("show");
  document.body.classList.remove("overlay-open");
  document.body.style.overflow = "";
  if (restoreFocus) document.getElementById("expandTool").focus();
}

function backFromVto() {
  if (toolFrame.classList.contains("expanded")) collapseTool(false);
  toolFrame.hidden = true;
  toolStatus.hidden = true;
  document.body.classList.remove("vto-open");
  if (uxFlow === "multi-launcher") {
    recommendationCard.hidden = false;
    recommendationCard.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (uxFlow === "single") {
    experienceCard.hidden = true;
    recommendationCard.hidden = false;
    recommendationCard.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    setLiveOnlyLayout(false);
    recommendationCard.hidden = true;
    experienceCard.hidden = false;
    experienceFlowBack.hidden = true;
    showExperienceView(experienceChooser);
    experienceCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function prepareFlow() {
  window.clearTimeout(transitionTimer);
  if (toolFrame.classList.contains("expanded")) collapseTool(false);
  toolFrame.hidden = true;
  toolStatus.hidden = true;
  document.body.classList.remove("vto-open");
  resetFollowupConversation();
  showExperienceView(experienceChooser);
  if (uxFlow === "single") {
    setLiveOnlyLayout(false);
    assistantCopy.textContent = "I found complete Looks and individual makeup options for a fresh outdoor-wedding style. Choose one item to try on.";
    recommendationTitle.textContent = "Choose one to try on";
    recommendationHint.textContent = "Pick a complete Look or one makeup item.";
    experienceCard.hidden = true;
    recommendationCard.hidden = false;
    experienceFlowBack.hidden = false;
  } else if (uxFlow === "multi-live") {
    assistantCopy.textContent = "I found a fresh outdoor-wedding makeup direction for you. Try it instantly with Live Makeup.";
    recommendationCard.hidden = true;
    experienceCard.hidden = false;
    setLiveOnlyLayout(true);
    experienceFlowBack.hidden = true;
  } else {
    setLiveOnlyLayout(false);
    assistantCopy.textContent = "Based on your photo, you have a softly oval face, a clear neutral-warm complexion, almond-shaped eyes, softly straight brows, and dark hair. For an outdoor wedding, fresh peach and rose tones will keep everything light while softly defining your features. I picked a few complete Looks and individual makeup options for you below. I recommend Coral Dew, Sweet Bloom, and Candy Beat as complete Looks, plus peach and rose lip and blush shades with soft-to-defined eyeliner options.";
    recommendationTitle.textContent = "Choose what to try";
    recommendationHint.textContent = "Choose a Look or build a makeup combination.";
    recommendationCard.hidden = false;
    experienceCard.hidden = true;
    experienceFlowBack.hidden = true;
  }
  renderRecommendationChooser();
}

function replayConversation() {
  window.clearTimeout(conversationTimer);
  prepareFlow();
  assistantTurn.hidden = true;
  assistantTurn.classList.remove("revealed");
  userTurn.classList.remove("replaying");
  void userTurn.offsetWidth;
  userTurn.classList.add("replaying");
  userTurn.scrollIntoView({ behavior: "smooth", block: "center" });
  conversationTimer = window.setTimeout(() => {
    assistantTurn.hidden = false;
    assistantTurn.classList.add("revealed");
    assistantTurn.scrollIntoView({ behavior: "smooth", block: "center" });
    recommendationViewMaxHeight = 0;
    renderRecommendationChooser();
  }, 1000);
}

document.getElementById("expandTool").addEventListener("click", expandTool);
document.getElementById("closeFullscreen").addEventListener("click", () => collapseTool());
document.getElementById("vtoBack").addEventListener("click", backFromVto);
backdrop.addEventListener("click", () => collapseTool());
experienceFlowBack.addEventListener("click", () => {
  experienceCard.hidden = true;
  recommendationCard.hidden = false;
  recommendationCard.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.addEventListener("keydown", (event) => {
  if (!toolFrame.classList.contains("expanded")) return;
  if (event.key === "Escape") collapseTool();
  if (event.key === "Tab") {
    const focusable = [...toolFrame.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((element) => element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

document.querySelector(".camera-toolbar").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "clear-makeup") {
    Object.keys(selectedByCategory).forEach((category) => { selectedByCategory[category] = null; });
    if (uxFlow !== "single") renderMultiPicker();
    showApplied("Original preview", "ALL MAKEUP REMOVED");
  }
  if (action === "zoom-in") { zoom = Math.min(ZOOM_MAX, zoom + ZOOM_STEP); document.documentElement.style.setProperty("--zoom", zoom); updateZoomButtons(); }
  if (action === "zoom-out") { zoom = Math.max(ZOOM_MIN, zoom - ZOOM_STEP); document.documentElement.style.setProperty("--zoom", zoom); updateZoomButtons(); }
  if (action === "compare") {
    const compare = document.getElementById("compareDemo");
    compare.hidden = !compare.hidden;
    if (!compare.hidden) compare.style.setProperty("--compare-pos", "50%");
  }
  if (action === "download") {
    const flash = document.getElementById("flash");
    flash.classList.remove("fire");
    requestAnimationFrame(() => flash.classList.add("fire"));
  }
});

const compareDemo = document.getElementById("compareDemo");
const compareHandle = document.getElementById("compareHandle");
function setComparePos(clientX) {
  const bounds = compareDemo.getBoundingClientRect();
  const percent = ((clientX - bounds.left) / bounds.width) * 100;
  compareDemo.style.setProperty("--compare-pos", `${Math.min(92, Math.max(8, percent))}%`);
}
compareHandle.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  compareHandle.setPointerCapture(event.pointerId);
  compareDemo.classList.add("dragging");
  setComparePos(event.clientX);
});
compareHandle.addEventListener("pointermove", (event) => {
  if (!compareHandle.hasPointerCapture(event.pointerId)) return;
  setComparePos(event.clientX);
});
compareHandle.addEventListener("pointerup", (event) => {
  compareHandle.releasePointerCapture(event.pointerId);
  compareDemo.classList.remove("dragging");
});
compareHandle.addEventListener("keydown", (event) => {
  const bounds = compareDemo.getBoundingClientRect();
  const current = parseFloat(compareDemo.style.getPropertyValue("--compare-pos")) || 50;
  if (event.key === "ArrowLeft") { event.preventDefault(); setComparePos(bounds.left + (bounds.width * Math.max(0, current - 4)) / 100); }
  if (event.key === "ArrowRight") { event.preventDefault(); setComparePos(bounds.left + (bounds.width * Math.min(100, current + 4)) / 100); }
});

const intensitySlider = document.getElementById("intensitySlider");
const intensityHandle = document.getElementById("intensityHandle");
function setIntensity(percent) {
  const clamped = Math.min(100, Math.max(0, Math.round(percent)));
  intensitySlider.style.setProperty("--intensity", `${clamped}%`);
  intensityHandle.setAttribute("aria-valuenow", String(clamped));
}
function setIntensityFromClientY(clientY) {
  const bounds = intensitySlider.querySelector(".intensity-track").getBoundingClientRect();
  const percent = ((bounds.bottom - clientY) / bounds.height) * 100;
  setIntensity(percent);
}
intensityHandle.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  intensityHandle.setPointerCapture(event.pointerId);
  intensitySlider.classList.add("dragging");
  setIntensityFromClientY(event.clientY);
});
intensityHandle.addEventListener("pointermove", (event) => {
  if (!intensityHandle.hasPointerCapture(event.pointerId)) return;
  setIntensityFromClientY(event.clientY);
});
intensityHandle.addEventListener("pointerup", (event) => {
  intensityHandle.releasePointerCapture(event.pointerId);
  intensitySlider.classList.remove("dragging");
});
intensityHandle.addEventListener("keydown", (event) => {
  const current = parseFloat(intensityHandle.getAttribute("aria-valuenow")) || 0;
  if (event.key === "ArrowUp" || event.key === "ArrowRight") { event.preventDefault(); setIntensity(current + 4); }
  if (event.key === "ArrowDown" || event.key === "ArrowLeft") { event.preventDefault(); setIntensity(current - 4); }
  if (event.key === "Home") { event.preventDefault(); setIntensity(0); }
  if (event.key === "End") { event.preventDefault(); setIntensity(100); }
});
setIntensity(70);

tryPhotoButton.addEventListener("click", () => {
  const items = getSelectedItems();
  if (items.length) {
    setComposerDraft(`Apply ${formatItemList(items)} to my uploaded photo. I understand that generating the output will cost 3 credits.`, "photo", items);
  }
});
tryLiveButton.addEventListener("click", () => {
  window.clearTimeout(transitionTimer);
  recommendationCard.hidden = true;
  experienceCard.hidden = false;
  setLiveOnlyLayout(false);
  showExperienceView(openingCameraView);
  transitionTimer = window.setTimeout(() => openTryOn("live"), 1000);
});
sendButton.addEventListener("click", submitComposerDraft);

document.querySelectorAll("[data-experience]").forEach((button) => {
  button.addEventListener("click", () => {
    const experience = button.dataset.experience;
    if (experience === "live") {
      showExperienceView(openingCameraView);
      transitionTimer = window.setTimeout(() => openTryOn("live"), 1000);
    }
    if (experience === "model") showExperienceView(modelChooser);
    if (experience === "photo") showExperienceView(uploadChooser);
  });
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => showExperienceView(experienceChooser));
});

document.getElementById("modelGrid").addEventListener("click", (event) => {
  if (event.target.closest("button")) openTryOn("photo");
});

document.getElementById("uploadPhoto").addEventListener("click", () => {
  showExperienceView(uploadingView);
  transitionTimer = window.setTimeout(() => openTryOn("photo"), 1400);
});

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "light";
  document.documentElement.dataset.theme = isDark ? "light" : "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to dark mode" : "Switch to light mode");
  themeToggleLabel.textContent = isDark ? "Light mode" : "Dark mode";
});

renderRecommendationChooser();
renderMultiPicker();
updateZoomButtons();
replayConversation();
