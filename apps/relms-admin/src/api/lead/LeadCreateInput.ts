import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type LeadCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  email?: string | null;
  interestedIn?: string | null;
  name?: string | null;
  phone?: string | null;
};
