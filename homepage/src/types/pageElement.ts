export type pageObj = {
  pageNum: number;
  component: React.FC;
  name: string;
};

export type PageCategory = {
  pageArray: pageObj[];
  onClick: (pageNum: number) => void;
  currentPageNum: number;
};

export interface pageMenu extends PageCategory {
  type: string;
}

export type SectionProps = {
  pageNum: number;
  component: React.FC;
  window: Window;
  pageRefs: React.MutableRefObject<HTMLDivElement[]>;
};
