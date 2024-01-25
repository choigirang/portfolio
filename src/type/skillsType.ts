interface StackList {
  [key: string]: string;
}

export type AllStackType = {
  frontend: StackList;
  backend: StackList;
  tools: StackList;
};
