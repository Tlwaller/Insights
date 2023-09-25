export interface DashboardSummary {
  id: string | number;
  name: string;
  type?: string;
  image?: string;
  totalRaised?: number;
  campaigns?: number;
}