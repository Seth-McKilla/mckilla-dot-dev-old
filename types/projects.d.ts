export type Project = {
  image: string;
  name: string;
  started: string;
  description: string;
  revenueType: "MRR" | "Presales";
  revenueAmount: number;
  status: "current" | "past";
};
