/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      button: {},
      colors: {
        "blue-0": "#bbeafe",
        "blue-1": "#98ddfc",
        "blue-2": "#1392d3",
      },
      backgroundImage: {
        "gradient-180-blue":
          "linear-gradient(180deg, rgba(47,152,244,1) 0%, rgba(101,183,255,1) 71%);",
      },

      width: {
        0: "0px",
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        72: "72px",
        80: "80px",
        88: "88px",
        96: "96px",
        104: "104px",
        112: "112px",
        120: "120px",
        128: "128px",
        136: "136px",
        144: "144px",
        152: "152px",
        160: "160px",
        168: "168px",
        176: "176px",
        184: "184px",
        192: "192px",
        200: "200px",
        208: "208px",
        216: "216px",
        224: "224px",
        232: "232px",
        240: "240px",
        248: "248px",
        256: "256px",
        264: "264px",
        272: "272px",
        280: "280px",
        288: "288px",
        296: "296px",
        304: "304px",
        312: "312px",
        320: "320px",
        328: "328px",
        336: "336px",
        344: "344px",
        352: "352px",
        360: "360px",
        368: "368px",
        376: "376px",
        384: "384px",
        392: "392px",
        400: "400px",
      },
      height: {
        0: "0px",
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        72: "72px",
        80: "80px",
        88: "88px",
        96: "96px",
        104: "104px",
        112: "112px",
        120: "120px",
        128: "128px",
        136: "136px",
        144: "144px",
        152: "152px",
        160: "160px",
        168: "168px",
        176: "176px",
        184: "184px",
        192: "192px",
        200: "200px",
        208: "208px",
        216: "216px",
        224: "224px",
        232: "232px",
        240: "240px",
        248: "248px",
        256: "256px",
        264: "264px",
        272: "272px",
        280: "280px",
        288: "288px",
        296: "296px",
        304: "304px",
        312: "312px",
        320: "320px",
        328: "328px",
        336: "336px",
        344: "344px",
        352: "352px",
        360: "360px",
        368: "368px",
        376: "376px",
        384: "384px",
        392: "392px",
        400: "400px",
      },
      spacing: {
        0: "0px",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
        34: "34px",
        36: "36px",
        38: "38px",
        40: "40px",
      },
      keyframes: {
        bgGradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        modal: {
          "0%": {
            transform: "translateY(100vh)",
          },
          "100%": {
            transform: "translateY(0vh)",
          },
        },
        drawer: {
          "0%": {
            transform: "translateX(-90vw)",
          },
          "100%": {
            transform: "translateX(0vh)",
          },
        },
        shake: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(6px)",
          },
        },
        fadeUp: {
          "0%": {
            transform: "translateY(10px)",
            opacity: 0.8,
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
        lightningAnimation: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20%)",
          },
          "50%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-20%)",
          },
        },
        victor: {
          "0%,100%": {
            transform: "translateY(-3px)",
          },
          "50%": {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        bgGradient: "bgGradient 4s ease infinite",
        modal: "modal 0.4s ease",
        drawer: "drawer 0.4s ease",
        shake: "shake 1s ease infinite",
        fadeUp: "fadeUp 1s ease",
        lightning: "lightningAnimation 1s ease-in-out infinite",
        victor: "victor 2s ease infinite",
      },
      backgroundSize: {
        bgGradientAnimate: "400%",
      },
      boxShadow: {
        cardItem:
          "rgba(0, 0, 0, 0.19) 0px10px20px, rgba(0, 0, 0, 0.23) 0px6px6px",
        header: "rgba(0, 0, 0, 0.04) 0px3px5px;",
        common: "rgba(0, 0, 0, 0.24) 0px3px8px;",
        sank: "rgba(0, 0, 0, 0.06) 0px2px4px0pxinset;",
      },
      backgroundImage: {
        mainGradient: "linear-gradient(90.57deg, #3E65FE 0%, #D23CFF 100%)",
        "mainGradient-disabled":
          "linear-gradient(90deg, rgba(27,73,254,0.5) 15%, rgba(199,11,255,0.5) 100%)",
        secondaryGradient:
          "linear-gradient(90deg, rgba(255,127,206,1) 0%, rgba(252,149,110,1) 100%)",
      },
    },
  },
  plugins: [],
};
