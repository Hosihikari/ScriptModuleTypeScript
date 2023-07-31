export const directory: {
  exists: (path: string) => boolean;
  getFiles: (path: string) => Promise<string[]>;
  getDirectorys: (path: string) => Promise<string[]>;
};
