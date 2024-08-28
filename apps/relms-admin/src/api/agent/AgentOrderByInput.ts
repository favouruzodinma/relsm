import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  agency?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
