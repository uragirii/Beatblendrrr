// utils
export const createSeprateLine = (lyricsBody: string): string[] => {
  return lyricsBody.split("\n");
};

export const debounce = (fn: any, ms = 100) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
