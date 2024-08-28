import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadWhereInput = {
  agent?: AgentWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  interestedIn?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
