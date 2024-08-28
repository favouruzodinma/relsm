import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";

export type AgentWhereInput = {
  agency?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  leads?: LeadListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
