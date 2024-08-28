import { LeadCreateNestedManyWithoutAgentsInput } from "./LeadCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  agency?: string | null;
  email?: string | null;
  leads?: LeadCreateNestedManyWithoutAgentsInput;
  name?: string | null;
  phone?: string | null;
};
