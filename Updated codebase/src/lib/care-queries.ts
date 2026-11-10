import { queryOptions } from "@tanstack/react-query";
import { listCareServices } from "./care.functions";
export const careServicesQuery = queryOptions({ queryKey: ["care-services"], queryFn: () => listCareServices(), staleTime: 0 });