export interface StockAlarm {
  id: string;
  description: string;
  provider?: string;
  warning?: number;
  critical?: number;
  alarmArticle: AlarmArticle[];
}

export interface AlarmArticle {
  articleId: number;
  warning: number;
  critical: number;
}

export interface StockAlarmCreate {
  description: string;
  provider?: string;
  warning?: number;
  critical?: number;
  alarmArticle: AlarmArticle[];
}

