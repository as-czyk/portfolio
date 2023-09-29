export type Experience = {
  startYear: number;
  endYear?: number;
  title: string;
  description: string;
  company: string;
  link?: string;
  tags?: Array<string>;
  isAnchor?: boolean;
};
