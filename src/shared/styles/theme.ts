export const borderSizes = {
  thin: "1px",
  md: "2px",
};

export const theme = {
  colors: {
    black: "#181C25",
    black200: "#272727",
    purewhite: "#FAFAFA",
    blue: "#2669D7",
    blue800: "#2E51FA",
    gray300: "#ebf0f0",
  },
  space: ["0", "2px", "4px", "8px", "12px", "16px", "24px", "32px"],
  fontSizes: {
    "0": 0,
    "12": 12,
    "14": 14,
    "16": 16,
    "20": 20,
    "21": 21,
    "24": 24,
    "27": 27,
    "36": 36,
    "44": 44,
    "54": 54,
  },
  fonts: { montserrat: "Montserrat, sans-serif" },
  fontWeights: {
    medium: 500,
    bold: 600,
    extraBold: 800,
  },
  borderRadius: "12px",
  lineHeights: {
    body: 1.5,
    title: 1.1,
  },
  borders: {
    none: "none",
    thin: `${borderSizes.thin} solid`,
    md: `${borderSizes.md} solid`,
  },
};
