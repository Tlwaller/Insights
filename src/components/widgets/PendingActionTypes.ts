export interface PendingAction {
  id: number | string;
  icon: string;
  color: "red" | "yellow" | "blue";
  count: number;
  name: string;
  description: string;
  cta: string;
  ctaCallback: () => void;
}
