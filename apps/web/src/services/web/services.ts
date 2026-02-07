import { AxiosResponse } from "axios";
import instance from "@/src/utils/axios-instance";
import { Blog, ContactUs } from "@/src/types/web/types";

interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}



// ── Get all blogs ─────────────────────────────
export const getAllBlogs = (params?: { preview?: string }) => {
  return instance.get("/web/blogs/get-all-blogs", { params });
};

// ── Get single blog by ID ─────────────────────
export const getBlogById = (
  id: number
): Promise<AxiosResponse<ApiResponse<Blog>>> => {
  return instance.get(`blog/${id}`);
};

// ── Get paginated blogs ───────────────────────
export const getPaginatedBlogs = (page: number, limit: number) => {
  return instance.post(`/web/blogs/paginated?page=${page}&limit=${limit}`);
};

  

// ── Get blog by slug ──────────────────────────
export const getBlogBySlug = (slug: string, preview?: boolean) => {
  return instance.get(`/web/blogs/slug/${slug}`, {
    params: preview ? { preview: "admin" } : undefined,
  });
};
// 











// ── Get paginated Pree Release ───────────────────────
export const getPaginatedPressRelease = (page: number, limit: number) => {
  return instance.post(`/web/press-release/paginated?page=${page}&limit=${limit}`);
};



// ── Get Press Release By Slug ───────────────────────
export const getPressReleaseBySlug = (slug: string) => {
  return instance.get(`/web/press-release/slug/${slug}`);
};



// ── Get all Faqs ─────────────────────────────
export const getAllFaqs = (params?: { preview?: string }) => {
  return instance.get("/web/faq/get-all-faqs", { params });
};



//---- submit contact form -----------------------------

export const submitContactUs=(data: ContactUs):Promise<AxiosResponse<ApiResponse>>=>{
  return instance.post("/web/contact-us/submit-form",data,{
    headers:{
      "Content-Type":"application/json"
    }
  })
}




// ── Get all Team members ─────────────────────────────
export const getAllTeamMembers = (params?: { preview?: string }) => {
  return instance.get("/web/our-team/get-all-team-member", { params });
};



// ── Get all success stories ─────────────────────────────
export const getAllSucessStory = (params?: { preview?: string }) => {
  return instance.get("/web/success-story/get-all-success-story", { params });
};





// ── Save / Update Home Improvement Application ─────────
export const saveHomeImprovementApplication = (
  data: any
): Promise<AxiosResponse<ApiResponse<{ applicationId: number }>>> => {
  return instance.post("/web/home-improvement/save", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};


// ── Get Home Improvement Application by ID ────────────
export const getHomeImprovementApplicationById = (
  id: number
): Promise<AxiosResponse<ApiResponse<any>>> => {
  return instance.get(`/web/home-improvement/${id}`);
};

