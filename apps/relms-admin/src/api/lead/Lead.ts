import { Agent } from "../agent/Agent";

export type Lead = {
  agent?: Agent | null;
  createdAt: Date;
  email: string | null;
  id: string;
  interestedIn: string | null;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
