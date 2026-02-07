
import { ApiResponse, Department, Category, Magazine, Podcast, User, Designation, City, States, Banner, ReportedLead, PropertyType, PropertyVariant, PropertyAmenities, RewardPoints, Specification, VerificationStatus, AdminUser, Broker, Lead, PropertyAmenitiesMulti, Subscription, PushNotification, AdsRequest, Blog, Project, PressRelease, Faq, ContactUs, Status } from "@/src/types/admin/types";
import instance from "@/src/utils/axios-instance";
import { AxiosResponse } from "axios";

type ModelName = string | number;
type ItemId = string | number;

export const deleteItem = (model: ModelName, id: ItemId): Promise<AxiosResponse> => {
  return instance.delete(`/delete/${model}/${id}`);
};

export const activateItem = (model: ModelName, id: ItemId): Promise<AxiosResponse> => {
  return instance.put(`/active/${model}/${id}`);
};

export const deactivateItem = (model: ModelName, id: ItemId): Promise<AxiosResponse> => {
  return instance.put(`/inactive/${model}/${id}`);
};

export const signInUser = (data: { email: string; password: string; rememberMe?: boolean }): Promise<AxiosResponse> => {
  return instance.post("/auth/login", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const getAllCategorys = (): Promise<
  AxiosResponse<ApiResponse<Category[]>>
> => instance.get("/category/category-list");

export const addCategory = (data: { category_name: string }): Promise<AxiosResponse> => {
  return instance.post("/category/add-category", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getCategoryById = (id: number): Promise<AxiosResponse<ApiResponse<Category>>> => {
  return instance.get(`/category/get-category/${id}`);
}


export const submitCategory = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/category/add-category/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/category/add-category", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueCategory = (category_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { category_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/category/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};





export const getAllMagazines = (): Promise<
  AxiosResponse<ApiResponse<Magazine[]>>
> => instance.get("/magazine/magazine-list");

export const addMagazine = (data: FormData): Promise<AxiosResponse> => {
  return instance.post("/magazine/add-magazine", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getMagazineById = (id: number): Promise<AxiosResponse<ApiResponse<Magazine>>> => {
  return instance.get(`/magazine/get-magazine/${id}`);
}


export const submitMagazine = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/magazine/add-magazine/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "PUT",
    });
  }
  return instance.post("/magazine/add-magazine", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
  });
};

export const uniqueMagazine = (magazine_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { magazine_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/magazine/check-unique/`,
    {
      params,
      headers: {
        "Content-Type": "application/json",
      }
    }
  );
};




export const getAllPodcasts = (): Promise<
  AxiosResponse<ApiResponse<Podcast[]>>
> => instance.get("/podcast/podcast-list");

export const addPodcast = (data: FormData): Promise<AxiosResponse> => {
  return instance.post("/podcast/add-podcast", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPodcastById = (id: number): Promise<AxiosResponse<ApiResponse<Podcast>>> => {
  return instance.get(`/podcast/get-podcast/${id}`);
}


export const submitPodcast = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/podcast/add-podcast/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "PUT",
    });
  }
  return instance.post("/podcast/add-podcast", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
  });
};

export const uniquePodcast = (podcast_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { podcast_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/podcast/check-unique/`, {
    params,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
  });
};


// ------------------------------------------------------------------Master--------------------------------------------------------------------------------------------------

export const getAllDesignations = (): Promise<
  AxiosResponse<ApiResponse<Designation[]>>
> => instance.get("/designation/designation-list");

export const addDesignation = (data: { designation_name: string }): Promise<AxiosResponse> => {
  return instance.post("/designation/add-designation", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getDesignationById = (id: number): Promise<AxiosResponse<ApiResponse<Designation>>> => {
  return instance.get(`/designation/get-designation/${id}`);
}


export const submitDesignation = (id: number | undefined, data: { designation_name: string }): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/designation/add-designation/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return instance.post("/designation/add-designation", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const uniqueDesignation = (designation_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { designation_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/designation/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
// ---------------------------------------------status master----------------------------------------

/**
 * Get all status
 */
export const getAllStatus = (): Promise<
  AxiosResponse<ApiResponse<Status[]>>
> => instance.get("/status/status-list");

/**
 * Add status
 */
export const addStatus = (data: {
  service_name: string;
  status_name: string;
}): Promise<AxiosResponse> => {
  return instance.post("/status/add-status", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * Get status by ID
 */
export const getStatusById = (  id: number): Promise<AxiosResponse<ApiResponse<Status>>> => {
  return instance.get(`/status/get-status/${id}`);
};

/**
 * Add / Update status (submit pattern)
 */
export const submitStatus = (  id: number | undefined,
  data: {
    service_name: string;
    status_name: string;
    status?: number;
  }
): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/status/update/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return instance.post("/status/add-status", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * Ajax status list (DataTable)
 */
export const getAjaxStatus = (data: any): Promise<AxiosResponse> => {
  return instance.post("/status/ajax/status-list", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * Unique status check
 */
export const uniqueStatus = (
  payload: {
    service_name: string;
    status_name: string;
  },
  currentId?: number
): Promise<AxiosResponse> => {
  const params: any = { ...payload };

  if (currentId !== undefined) {
    params.currentId = Number(currentId);
  }

  return instance.get("/status/check-unique", {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};


// ---------------------------------------------Department master----------------------------------------

export const getAllDepartments = (): Promise<
  AxiosResponse<ApiResponse<Department[]>>
> => instance.get("/department/department-list");

export const addDepartment = (data: { department_name: string }): Promise<AxiosResponse> => {
  return instance.post("/department/add-department", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getDepartmentById = (id: number): Promise<AxiosResponse<ApiResponse<Department>>> => {
  return instance.get(`/department/get-department/${id}`);
}


export const submitDepartment = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/department/add-department/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/department/add-department", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueDepartment = (department_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { department_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/department/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};



export const getAllCity = (): Promise<
  AxiosResponse<ApiResponse<City[]>>
> => instance.get("/city/city-list");

export const addCity = (data: { city_name: string }): Promise<AxiosResponse> => {
  return instance.post("/city/add-city", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getCityById = (id: number): Promise<AxiosResponse<ApiResponse<City>>> => {
  return instance.get(`/city/get-city/${id}`);
}


export const submitCity = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/city/add-city/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/city/add-city", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueCity = (
  state_id: number,
  city_name: string,
  currentId?: number
): Promise<AxiosResponse<{ isUnique: boolean }>> => {
  const params: Record<string, any> = { city_name, state_id: Number(state_id) };
  if (currentId !== undefined) {
    params.currentId = Number(currentId);
  }
  return instance.get(`/city/check-unique/`, {
    params,
    headers: { "Content-Type": "application/json" },
  });
};


export const getAllStates = (): Promise<
  AxiosResponse<ApiResponse<States[]>>
> => instance.get("/states/state-list");

export const getAllCitiesByStateID = (id: number): Promise<AxiosResponse<ApiResponse<City>>> => {
  return instance.get(`/states/city-by-state`, {
    params: { state_id: id },
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export const getAllLocationByCityID = (id: number): Promise<AxiosResponse<ApiResponse<Location>>> => {
  return instance.get(`/states/location-by-city`, {
    params: { city_id: id },
    headers: {
      "Content-Type": "application/json",
    },
  });
}


export const getAllLocations = (): Promise<
  AxiosResponse<ApiResponse<Location[]>>
> => instance.get("/location/location-list");

export const addLocation = (data: { location_name: string }): Promise<AxiosResponse> => {
  return instance.post("/location/add-location", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getLocationById = (id: number): Promise<AxiosResponse<ApiResponse<Location>>> => {
  return instance.get(`/location/get-location/${id}`);
}


export const submitLocation = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/location/add-location/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/location/add-location", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueLocation = (
  state_id: number,
  city_id: number,
  location_name: string,
  currentId?: number
): Promise<AxiosResponse<{ isUnique: boolean }>> => {
  const params: Record<string, any> = { location_name, state_id: Number(state_id), city_id: Number(city_id) };
  if (currentId !== undefined) {
    params.currentId = Number(currentId);
  }
  return instance.get(`/location/check-unique/`, {
    params,
    headers: { "Content-Type": "application/json" },
  });
};



export const getAllBanners = (): Promise<
  AxiosResponse<ApiResponse<Banner[]>>
> => instance.get("/banner/banner-list");

export const addBanner = (data: { banner_name: string }): Promise<AxiosResponse> => {
  return instance.post("/banner/add-banner", JSON.stringify(data), {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getBannerById = (id: number): Promise<AxiosResponse<ApiResponse<Banner>>> => {
  return instance.get(`/banner/get-banner/${id}`);
}


export const submitBanner = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/banner/add-banner/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "PUT",
    });
  }
  return instance.post("/banner/add-banner", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
  });
};

export const uniqueBanner = (banner_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { banner_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/banner/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const getAllReportedLeads = (): Promise<
  AxiosResponse<ApiResponse<ReportedLead[]>>
> => instance.get("/designation/reported-lead-list");

export const addReportedLead = (data: { reported_lead_name: string }): Promise<AxiosResponse> => {
  return instance.post("/reported-lead/add-reported-lead", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getReportedLeadById = (id: number): Promise<AxiosResponse<ApiResponse<ReportedLead>>> => {
  return instance.get(`/reported-lead/get-reported-lead/${id}`);
}


export const submitReportedLead = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/reported-lead/add-reported-lead/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/reported-lead/add-reported-lead", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueReportedLead = (reported_lead_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { reported_lead_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/reported-lead/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const getAllPropertyTypes = (): Promise<
  AxiosResponse<ApiResponse<PropertyType[]>>
> => instance.get("/property-type/property-type-list");

export const addPropertyType = (data: { property_type_name: string }): Promise<AxiosResponse> => {
  return instance.post("/property-type/add-property-type", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPropertyTypeById = (id: number): Promise<AxiosResponse<ApiResponse<PropertyType>>> => {
  return instance.get(`/property-type/get-property-type/${id}`);
}


export const submitPropertyType = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/property-type/add-property-type/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/property-type/add-property-type", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniquePropertyType = (property_type: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { property_type };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/property-type/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};




export const getAllPropertyVariants = (): Promise<
  AxiosResponse<ApiResponse<PropertyVariant[]>>
> => instance.get("/property-variant/property-variant-list");

export const addPropertyVariant = (data: { property_variant: string }): Promise<AxiosResponse> => {
  return instance.post("/property-variant/add-property-variant", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPropertyVariantById = (id: number): Promise<AxiosResponse<ApiResponse<PropertyVariant>>> => {
  return instance.get(`/property-variant/get-property-variant/${id}`);
}


export const submitPropertyVariant = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/property-variant/add-property-variant/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/property-variant/add-property-variant", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniquePropertyVariant = (property_variant: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { property_variant };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/property-variant/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};




export const getAllPropertyAmenities = (): Promise<
  AxiosResponse<ApiResponse<PropertyAmenities[]>>
> => instance.get("/property-amenities/property-amenities-list");

export const addPropertyAmenitie = (data: { property_amenitie: string }): Promise<AxiosResponse> => {
  return instance.post("/property-amenities/add-property-amenitie", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPropertyAmenitieById = (id: number): Promise<AxiosResponse<ApiResponse<PropertyAmenities>>> => {
  return instance.get(`/property-amenities/get-property-amenitie/${id}`);
}


export const submitPropertyAmenitie = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/property-amenities/add-property-amenitie/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/property-amenities/add-property-amenitie", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniquePropertyAmenitie = (property_amenitie: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { property_amenitie };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/property-amenities/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};







export const getAllRewardPoint = (): Promise<
  AxiosResponse<ApiResponse<PropertyAmenities[]>>
> => instance.get("/reward-points/reward-point-list");

export const addRewardPoint = (data: { no_of_leads: string, credit_points: string }): Promise<AxiosResponse> => {
  return instance.post("/reward-points/add-reward-point", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getRewardPointById = (id: number): Promise<AxiosResponse<ApiResponse<RewardPoints>>> => {
  return instance.get(`/reward-points/get-reward-point/${id}`);
}


export const submitRewardPoint = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/reward-points/add-reward-point/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/reward-points/add-reward-point", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueRewardPoint = (no_of_leads: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { no_of_leads };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/reward-points/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const getAllSpecifications = (): Promise<
  AxiosResponse<ApiResponse<Specification[]>>
> => instance.get("/specification/specification-list");

export const addSpecification = (data: { specification_name: string }): Promise<AxiosResponse> => {
  return instance.post("/specification/add-specification", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getSpecificationById = (id: number): Promise<AxiosResponse<ApiResponse<Specification>>> => {
  return instance.get(`/specification/get-specification/${id}`);
}


export const submitSpecification = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/specification/add-specification/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/specification/add-specification", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueSpecification = (specification_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { specification_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/specification/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};



export const getAllVerificationStatus = (): Promise<
  AxiosResponse<ApiResponse<VerificationStatus[]>>
> => instance.get("/verification-status/verification-status-list");


export const addVerificationStatus = (data: { status_name: string }): Promise<AxiosResponse> => {
  return instance.post("/verification-status/add-verification-status", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getVerificationStatusById = (id: number): Promise<AxiosResponse<ApiResponse<VerificationStatus>>> => {
  return instance.get(`/verification-status/get-verification-status/${id}`);
}


export const submitVerificationStatus = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/verification-status/add-verification-status/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/verification-status/add-verification-status", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueVerificationStatus = (status_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { status_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/verification-status/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};



export const getAllAdminUsers = (): Promise<
  AxiosResponse<ApiResponse<AdminUser[]>>
> => instance.get("/admin-user/admin-user-list");


export const getAdminUserById = (id: number): Promise<AxiosResponse<ApiResponse<AdminUser>>> => {
  return instance.get(`/admin-user/get-admin-user/${id}`);
}


export const submitAdminUser = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/admin-user/add-admin-user/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/admin-user/add-admin-user", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueAdminUser = (email: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { email };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/admin-user/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};




export const getAllBrokers = (): Promise<
  AxiosResponse<ApiResponse<Broker[]>>
> => instance.get("/broker/broker-list");


export const getBrokerById = (id: number): Promise<AxiosResponse<ApiResponse<Broker>>> => {
  return instance.get(`/broker/get-broker/${id}`);
}


export const submitBroker = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/broker/add-broker/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/broker/add-broker", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueBroker = (broker_email: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { broker_email };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/broker/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};



export const getAllAmenities = (): Promise<
  AxiosResponse<ApiResponse<PropertyAmenities[]>>
> => instance.get("/property-amenities/property-amenities-list");


export const getAllLeads = (): Promise<
  AxiosResponse<ApiResponse<Lead[]>>
> => instance.get("/leads/lead-list");


export const getLeadById = (id: number): Promise<AxiosResponse<ApiResponse<Lead>>> => {
  return instance.get(`/leads/get-lead/${id}`);
}


export const submitLead = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {
  if (id) {
    return instance.put(`/leads/add-lead/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }
  return instance.post("/leads/add-lead", data, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export const uniqueLead = (property_code: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { property_code };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/leads/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};




export const getAllSubscriptions = (): Promise<
  AxiosResponse<ApiResponse<Subscription[]>>
> => instance.get("/subscription/subscription-list");


export const getSubscriptionById = (id: number): Promise<AxiosResponse<ApiResponse<Subscription>>> => {
  return instance.get(`/subscription/get-subscription/${id}`);
}


export const submitSubscription = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {

  if (id) {
    return instance.put(`/subscription/add-subscription/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "PUT",
    });
  }
  return instance.post("/subscription/add-subscription", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
  });
};

export const uniqueSubscription = (package_name: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { package_name };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/subscription/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const UploadLeadsFile = (data: FormData): Promise<AxiosResponse> => {
  return instance.post("/upload-leads/upload-lead", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}



export const getAllPushNotifications = (): Promise<
  AxiosResponse<ApiResponse<PushNotification[]>>
> => instance.get("/push-notification/push-notification-list");


export const getPushNotificationById = (id: number): Promise<AxiosResponse<ApiResponse<PushNotification>>> => {
  return instance.get(`/push-notification/get-push-notification/${id}`);
}


export const submitPushNotification = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {

  if (id) {
    return instance.put(`/push-notification/add-push-notification/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "PUT",
    });
  }
  return instance.post("/push-notification/add-push-notification", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
  });
};

export const uniquePushNotification = (title: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { title };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/push-notification/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};





export const getAllProjects = (): Promise<
  AxiosResponse<ApiResponse<Project[]>>
> => instance.get("/project-management/project-list");


export const getProjectById = (id: number): Promise<AxiosResponse<ApiResponse<Project>>> => {
  return instance.get(`/project-management/get-project/${id}`);
}


export const submitProject = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {

  if (id) {
    return instance.put(`/project-management/add-project/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "PUT",
    });
  }
  return instance.post("/project-management/add-project", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
  });
};

export const uniqueProject = (project_title: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { project_title };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/project-management/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};




export const getAllAdsRequests = (): Promise<
  AxiosResponse<ApiResponse<AdsRequest[]>>
> => instance.get("/ads-request/ads-request-list");


export const getAdsRequestById = (id: number): Promise<AxiosResponse<ApiResponse<AdsRequest>>> => {
  return instance.get(`/ads-request/get-ads-request/${id}`);
}


export const submitAdsRequest = (id: number | undefined, data: FormData): Promise<AxiosResponse> => {

  if (id) {
    return instance.put(`/ads-request/add-ads-request/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "PUT",
    });
  }
  return instance.post("/ads-request/add-ads-request", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
  });
};

export const uniqueAdsRequest = (broker_email: string, currentId?: number): Promise<AxiosResponse> => {
  const params = { broker_email };
  if (currentId !== undefined) {
    (params as any).currentId = Number(currentId);
  }
  return instance.get(`/ads-request/check-unique/`, {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};


// ================================ BLOG CATEGORY ================================

/**
 * Get all active blog categories
 */
export const getAllBlogCategories = (): Promise<AxiosResponse<ApiResponse<Category[]>>> => {
  return instance.get("/blog-category/list-category");
};

/**
 * Add a new blog category
 */
export const addBlogCategory = (data: { name: string }): Promise<AxiosResponse<ApiResponse<Category>>> => {
  return instance.post("/blog-category/add-category", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getBlogCategoryById = (
  id: number
): Promise<AxiosResponse<ApiResponse<Category>>> => {
  return instance.get(`/blog-category/get-category/${id}`);
};


/**
 * Submit blog category (add or update)
 */
export const submitBlogCategory = (
  id: number | undefined,
  data: { name: string }
): Promise<AxiosResponse<ApiResponse<Category>>> => {
  if (id) {
    return instance.put(
      `/blog-category/update/${id}`, // <-- corrected endpoint for update
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  return instance.post(
    "/blog-category/add-category",
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } }
  );
};


/**
 * Check if category name is unique
 */
export const uniqueBlogCategory = (
  name: string,
  currentId?: number
): Promise<AxiosResponse> => {
  const params: any = { name };

  if (currentId !== undefined) {
    params.currentId = Number(currentId);
  }

  return instance.get("/blog-category/check-unique", {
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/* =========================
   BLOG SERVICES
========================= */

// ADD / UPDATE BLOG (same function like submitBanner)
export const submitBlog = (
  id: number | undefined,
  data: FormData
): Promise<AxiosResponse<ApiResponse>> => {

  console.log(id);
  if (id) {
    return instance.put(`/blog/update-blog/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  return instance.post(`/blog/add-blog`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// GET BLOG BY ID (EDIT MODE)
export const getBlogById = (
  id: number
): Promise<AxiosResponse<ApiResponse>> => {
  return instance.get(`/blog/get-blog/${id}`);
};

// SIMPLE BLOG LIST
export const getAllBlogs = (): Promise<
  AxiosResponse<ApiResponse<Blog[]>>
> => {
  return instance.get(`/blog/blog-list`);
};

// AJAX DATATABLE
export const getAjaxBlogs = (payload: any): Promise<AxiosResponse> => {
  return instance.post(`/blog/ajax/blog-list`, payload);
};

/* =========================
   PRESS RELEASE SERVICES
========================= */


// / ADD / UPDATE PRESS RELEASE
export const submitPressRelease = (
  id: number | undefined,
  data: FormData
): Promise<AxiosResponse<ApiResponse>> => {

  if (id) {
    return instance.put(
      `/press-release/update-press-release/${id}`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  }

  return instance.post(
    `/press-release/add-press-release`,
    data,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

// GET PRESS RELEASE BY ID (EDIT MODE)
export const getPressReleaseById = (
  id: number
): Promise<AxiosResponse<ApiResponse<PressRelease>>> => {
  return instance.get(`/press-release/get-press-release/${id}`);
};

// SIMPLE PRESS RELEASE LIST
export const getAllPressReleases = (): Promise<
  AxiosResponse<ApiResponse<PressRelease[]>>
> => {
  return instance.get(`/press-release/press-release-list`);
};

// AJAX DATATABLE (same payload as blog)
export const getAjaxPressReleases = (
  payload: {
    draw: number;
    start: number;
    length: number;
  }
): Promise<AxiosResponse> => {
  return instance.post(`/blog/ajax/blog-list`, payload);
};



/* =========================
   FAQ SERVICES
========================= */

// ADD / UPDATE FAQ
export const submitFaq = (
  id: number | undefined,
  data: {
    question: string;
    answer: string;
    status?: number;
  }
): Promise<AxiosResponse<ApiResponse>> => {

  if (id) {
    return instance.put(
      `/faq/update-faq/${id}`,
      data
    );
  }

  return instance.post(
    `/faq/add-faq`,
    data
  );
};

// GET FAQ BY ID (EDIT MODE)
export const getFaqById = (
  id: number
): Promise<AxiosResponse<ApiResponse<Faq>>> => {
  return instance.get(`/faq/get-faq/${id}`);
};

// SIMPLE FAQ LIST
export const getAllFaqs = (): Promise<
  AxiosResponse<ApiResponse<Faq[]>>
> => {
  return instance.get(`/faq/faq-list`);
};

// AJAX DATATABLE (same payload as blog)
export const getAjaxFaqs = (
  payload: {
    draw: number;
    start: number;
    length: number;
  }
): Promise<AxiosResponse> => {
  return instance.post(`/faq/ajax/faq-list`, payload);
};


/* =========================
   CONTACT US SERVICES
========================= */

// VIEW CONTACT MESSAGE BY ID
export const getContactById = (
  id: number
): Promise<AxiosResponse<any>> => {
  return instance.get(`/contact-us/view/${id}`);
};

// UPDATE CONTACT STATUS (Viewed / Resolved)
export const updateContactStatus = (
  id: number,
  status: number
): Promise<AxiosResponse<any>> => {
  return instance.put(`/contact-us/status/${id}`, { status });
};





/* =========================
   ADD / UPDATE TEAM MEMBER
========================= */
export const submitTeamMember = (
  id: number | undefined,
  data: FormData
): Promise<AxiosResponse<ApiResponse>> => {
  if (id) {
    return instance.put(
      `/our-team/update-team-member/${id}`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  }

  return instance.post(
    `/our-team/add-team-member`,
    data,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

/* =========================
   GET TEAM MEMBER BY ID
========================= */
export const getTeamMemberById = (
  id: number
): Promise<AxiosResponse<ApiResponse<any>>> => {
  return instance.get(`/our-team/get-team-member/${id}`);
};

/* =========================
   SIMPLE TEAM MEMBER LIST
========================= */
export const getAllTeamMembers = (): Promise<
  AxiosResponse<ApiResponse<any[]>>
> => {
  return instance.get(`/our-team/team-member-list`);
};

/* =========================
   AJAX DATATABLE
========================= */
export const getAjaxTeamMembers = (
  payload: {
    draw: number;
    start: number;
    length: number;
    search?: { value: string };
    order?: { column: number; dir: "asc" | "desc" }[];
  }
): Promise<AxiosResponse> => {
  return instance.post(`/our-team/ajax/team-member-list`, payload);
};



/* =========================
   ADD / UPDATE SUCCESS STORY
========================= */
export const submitSuccessStory = (
  id: number | undefined,
  data: FormData
): Promise<AxiosResponse<ApiResponse>> => {
  if (id) {
    // Update existing success story
    return instance.put(`/success-story/update-success-story/${id}`, data);
  }

  // Add new success story
  return instance.post(`/success-story/add-success-story`, data);
};

/* =========================
   GET SUCCESS STORY BY ID
========================= */
export const getSuccessStoryById = (
  id: number
): Promise<AxiosResponse<ApiResponse<any>>> => {
  return instance.get(`/success-story/get-success-story/${id}`);
};

/* =========================
   SIMPLE SUCCESS STORY LIST
========================= */
export const getAllSuccessStories = (): Promise<
  AxiosResponse<ApiResponse<any[]>>
> => {
  return instance.get(`/success-story/success-story-list`);
};

/* =========================
   AJAX DATATABLE
========================= */
export const getAjaxSuccessStories = (
  payload: {
    draw: number;
    start: number;
    length: number;
    search?: { value: string };
    order?: { column: number; dir: "asc" | "desc" }[];
  }
): Promise<AxiosResponse> => {
  return instance.post(
    `/success-story/ajax/success-story-list`,
    payload
  );
};
