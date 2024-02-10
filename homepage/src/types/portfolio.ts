export type PortfolioData = {
  id: string;
  name: string;
  date: string;
  path: string;
  content: string;
  github: string;
  homepage: string;
  stack: string[];
};

export type StackContentProps = {
  selected: TeckStackData | null;
};

export type TeckStackData = {
  id: string;
  name: string;
  description: string;
};

export type Icons = {
  [key: string]: string;
};

export type TextAnimationConfig = {
  initialValue: string;
  nextText: string;
  styleText?: string;
};

export type InteractiveIcon = {
  name: string;
  width: number;
  height: number;
  onClick?: () => void;
  type?: string;
};
