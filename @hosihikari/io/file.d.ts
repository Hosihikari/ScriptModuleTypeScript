export const file: {
  exists: (path: string) => boolean;
  readAllText: (path: string) => Promise<string>;
  writeAllText: (path: string, content: string) => Promise<void>;
};
