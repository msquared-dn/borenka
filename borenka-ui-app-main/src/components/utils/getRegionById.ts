import { data } from "../../region-data";

export const getRegionById = (regionId :string | undefined) => {
    return data.find((region) => region.id === regionId);
  }; 