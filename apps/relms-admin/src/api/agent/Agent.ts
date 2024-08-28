import { Lead } from "../lead/Lead";

export type Agent = {
  agency: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  leads?: Array<Lead>;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
