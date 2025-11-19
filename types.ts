
export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface SubSection {
  title: string;
  content: (string | TableData)[];
}

export interface MainSection {
  id: string;
  title: string;
  subsections: SubSection[];
}
