// 共通の型やインターフェースをここにまとめる
export interface TaskProps {
    id: number;
    task: string;
    date: Date;
    style?: React.CSSProperties; // スタイルを受け取るプロパティを追加
}
export interface TaskListProps {
    taskDataList: TaskProps[];
    startDate: Date;
}

export interface ThemeData {
    index: number;
    theme: string;
    taskList: TaskProps[];
}

export interface ThemeProps {
    themeData: ThemeData;
}

export interface ThemeListProps {
    themeLists: ThemeProps[];
}