export type TableProcessesHeading = {
  id: number;
  heading: string;
};

export type TableProcessesHeadings = TableProcessesHeading[];

export type TableProcessItem = {
  id: number;
  name: string;
  progress: string;
  quantity: string;
  date: string;
};

export type TableProcessItems = TableProcessItem[];

export type ColumnWidths = Array<string>;
