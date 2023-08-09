const capitalize = (str: string) => (str || '').replace(/^([a-z])/, (w) => w.toUpperCase());

export {
  capitalize,
};
