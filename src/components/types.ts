// 共通の型やインターフェースをここにまとめる
export interface TaskProps {
    id: number;
    task: string;
    date: Date;
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