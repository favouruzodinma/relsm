import { LeadUpdateManyWithoutAgentsInput } from "./LeadUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  agency?: string | null;
  email?: string | null;
  leads?: LeadUpdateManyWithoutAgentsInput;
  name?: string | null;
  phone?: string | null;
};
