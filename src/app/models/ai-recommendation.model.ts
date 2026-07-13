export interface AIRecommendation {
  id: string;

  message: string;

  type: 'info' | 'warning' | 'success' | 'error';
}
