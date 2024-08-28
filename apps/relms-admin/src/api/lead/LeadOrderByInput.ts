import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  agentId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  interestedIn?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
