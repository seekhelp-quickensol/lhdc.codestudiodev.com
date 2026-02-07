
import { z } from "zod";


 const requiredImages = z.any()
  .refine((files) => files?.length >= 3, "Upload at least 3 images")
  .refine((files) => files?.length <= 20, "Maximum 20 images allowed")
  .refine(
    (files) => Array.from(files || {}).every((f) => (f as File).size <= 5 * 1024 * 1024),
    "Each image must be under 5MB"
  )

const optionalImages = z.any()

const requiredImage = z
  .any()
  .refine((files) => files?.length > 0, { message: "Image is required" })
  .refine((files) => files?.[0]?.size <= 5 * 1024 * 1024, {
    message: "Image must be less than 5MB",
  })
  .refine(
    (files) =>
      ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
        files?.[0]?.type
      ),
    { message: "Only JPG, PNG, or WebP images are allowed" }
  );

// Optional image validation (for edit mode - allows no new image)
const optionalImage = z
  .any()
  .optional()
  .refine(
    (files) => {
      if (!files || files.length === 0) return true; // No new image provided
      if (typeof files === 'string') return true; // existing image paths
      return files[0].size <= 5 * 1024 * 1024;
    }
  )
  .refine(
    (files) => {
      if (!files || files.length === 0) return true; // No new image provided
      if (typeof files === 'string') return true; // existing image paths
      return ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
        files[0].type
      );
    }
  );

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(2, "Password must be at least 2 characters"),
});
export type LoginFormData = z.infer<typeof loginSchema>;


export const categorySchema = z.object({
  category_name: z.string().min(1, "Category name is required"),
});
export type CategoryFormData = z.infer<typeof categorySchema>;

export const magazineSchema = (id?: number) =>
  z.object({
    magazine_name: z.string().min(1, "Magazine name is required"),
    category_id: z
      .number()
      .int()
      .min(1, "Please select a valid category"),

    publish_date: z.string().min(1, "Publish date is required"),
    duration: z.string().min(1, "Duration is required"),
    image: id
      ? z.any().optional() // when editing, image is optional
      : z
        .any()
        .refine((file) => file?.length === 1, "Please upload an image"), // when creating, image required
    short_description: z.string().min(5, "Short description is required"),
    description: z.string().min(10, "Content must be at least 10 characters"),
  });

export type MagazineFormData = z.infer<ReturnType<typeof magazineSchema>>;


export const podcastSchema = (id?: number) =>
  z.object({
    podcast_name: z.string().min(1, "Podcast name is required"),
    publish_date: z.string().min(1, "Publish date is required"),
    duration: z.string().min(1, "Duration is required"),
    image: id
      ? z.any().optional() // when editing, image is optional
      : z
        .any()
        .refine((file) => file?.length === 1, "Please upload an image"), // when creating, image required
    description: z.string().min(10, "Content must be at least 10 characters"),
  });

export type PodcastFormData = z.infer<ReturnType<typeof podcastSchema>>;





// Master Schema




export const designationSchema = z.object({
  designation_name: z
    .string()
    .min(2, "Designation name must contain at least two characters")
    .regex(/^[A-Za-z\s]+$/, "Designation name must only contain letters and spaces"),

});
export type DesignationFormData = z.infer<typeof designationSchema>;

export const statusSchema = z.object({
  service_name: z
    .string()
    .min(2, "Service name must contain at least two characters"),

  status_name: z
    .string()
    .min(2, "Status name must contain at least two characters")
    .regex(/^[A-Za-z\s]+$/, "Status name must only contain letters and spaces"),
});

export type StatusFormData = z.infer<typeof statusSchema>;

export const departmentSchema = z.object({
  department_name: z
    .string()
    .min(2, "Department name must contain at least two characters")
    .regex(/^[A-Za-z\s]+$/, "Department name must only contain letters and spaces"),

});
export type DepartmentFormData = z.infer<typeof departmentSchema>;


export const citySchema = z.object({
  city_name: z.string().min(2, "City name is required").regex(/^[A-Za-z\s]+$/, "City name must only contain letters and spaces"),
  state_id: z
    .number()
    .min(1, "Please select a city"),
});
export type CityFormData = z.infer<typeof citySchema>;


export const locationSchema = z.object({
  state_id: z.number().min(1, "Please select a state"),
  city_id: z.number().min(1, "Please select a city"),
  location_name: z
    .string()
    .min(2, "Location name must be at least 2 characters")
    .regex(/^[A-Za-z\s]+$/, "Location name must only contain letters and spaces")
    .max(100),
});

export type LocationFormData = z.infer<typeof locationSchema>;



export const basebannerSchema = z.object({
  banner_name: z
    .string()
    .min(3, "Banner name must be at least 3 characters")
    .max(100, "Banner name too long"),
});

export const getBannerSchema = (isEdit: boolean = false) =>
  basebannerSchema.extend({
    image: isEdit ? optionalImage : requiredImage,
  });

export type BannerFormData = z.infer<
  ReturnType<typeof getBannerSchema>
>;

export const reportedLeadSchema = z.object({
  reported_lead_name: z
    .string()
    .min(3, "Reported lead name must be at least 3 characters")
    .max(100, "Name is too long")
    .regex(/^[A-Za-z\s]+$/, "Reported lead name must only contain letters and spaces"),
});

export type ReportedLeadFormData = z.infer<typeof reportedLeadSchema>;


// Validation
export const propertyTypeSchema = z.object({
  property_type: z
    .string()
    .min(2, "Property type must be at least 2 characters")
    .max(100, "Too long")
    .regex(/^[A-Za-z\s]+$/, "Property type must only contain letters and spaces"),
});


export type PropertyTypeFormData = z.infer<typeof propertyTypeSchema>;

export const propertyVariantSchema = z.object({
  property_variant: z
    .string()
    .min(2, "Property variant must be at least 2 characters")
    .max(100, "Too long")
    .regex(/^[A-Za-z0-9\s]+$/, "Property variant must only contain letters, numbers and spaces"),
});

export type PropertyVariantFormData = z.infer<typeof propertyVariantSchema>;



export const propertyAmenitiesSchema = z.object({
  property_amenitie: z
    .string()
    .min(2, "Property amenities must be at least 2 characters")
    .max(100, "Too long")
    .regex(/^[A-Za-z\s]+$/, "Property amenities must only contain letters and spaces"),

});

export type PropertyAmenitiesFormData = z.infer<typeof propertyAmenitiesSchema>;



export const rewardSchema = z.object({
  credit_points: z
    .number("Credit points must be a number")
    .int()
    .min(1, "Credit points must be at least 1")
  ,
  no_of_leads: z
    .number("No. of leads must be a number")
    .int()
    .min(1, "At least 1 lead required")

});

export type RewardFormData = z.infer<typeof rewardSchema>;



export const specificationSchema = z.object({
  specification_name: z
    .string()
    .min(2, "Specification name must be at least 2 characters")
    .max(100, "Too long")
    .regex(/^[A-Za-z\s]+$/, "Specification name must only contain letters and spaces"),
});

export type specificationFormData = z.infer<typeof specificationSchema>;


export const verificationStatusSchema = z.object({
  status_name: z
    .string()
    .min(3, "Verification Status name must be at least 3 characters")
    .max(50, "Too long")
    .regex(/^[A-Za-z\s]+$/, "Verification Status name must only contain letters and spaces"),
});

export type VerificationStatusFormData = z.infer<typeof verificationStatusSchema>;


// Validation Schema
export const baseAdminUserSchema = z.object({
  name: z.string().min(3, "Full name must be at least 3 characters"),
  designation_id: z.number().min(1, "Please select a designation"),
  contact: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid Indian mobile number (10 digits)"),
  email: z.string().email("Invalid email address"),
  department_id: z.number().min(1, "Please select a department"),
 
});



export const getAdminUserSchema = (isEdit: boolean = false) =>
  baseAdminUserSchema.extend({
    password: isEdit
      ? z.string().optional()
      : z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain uppercase, lowercase, number & special char"
      ),
    
     
  });
export type AdminUserFormData = z.infer<
  ReturnType<typeof getAdminUserSchema>
>;
 
 

export const baseBlogSchema = z.object({
  title: z
    .string()
    .min(3, "Please enter a valid blog title (minimum 3 characters)."),

    meta_url: z
    .string()
    .min(1, "Meta URL is required"),

    meta_keyword: z
    .string()
    .min(3, "Please enter relevant meta keywords."),

    meta_description: z
    .string()
    .min(10, "Please write a professional meta description with at least 10 characters."),
    author: z
    .string()
    .min(1, "Please enter author name"),
    tag: z.array(z.string())
    .min(1, "Please add at least one relevant tag.")
    ,
    category_id: z
  .number()
  .min(1, "Please select a valid blog category."),

  short_description: z
    .string()
    .min(10, "Please write a short description with at least 10 characters.")
    .max(120, "Short description must be less than 120 characters")
    ,

  blog_content: z
    .string()
    .min(10, "Blog content must be at least 20 characters"),

    status: z.number().default(1),
  is_draft: z.boolean().default(false),

  
});

export const getBlogSchema = (isEdit: boolean = false) =>
  baseBlogSchema.extend({
    image: isEdit ? optionalImage : requiredImage,
  });

export type BlogFormData = z.infer<
  ReturnType<typeof getBlogSchema>
>;



/* =========================
   BASE PRESS RELEASE SCHEMA
========================= */
export const basePressReleaseSchema = z.object({
  title: z.string().min(3, "Please enter a valid press release title (minimum 3 characters)."),

  meta_url: z.string().min(1, "Meta URL is required"),

  meta_keyword: z.string().min(3, "Please enter relevant meta keywords."),

  author: z.string().min(1, "Please enter author name"),

   tag: z.array(z.string())
    .min(1, "Please add at least one relevant tag."),

  short_description: z
    .string()
    .min(10, "Please write a short description with at least 10 characters.")
    .max(120, "Short description must be less than 120 characters"),

  press_release_content: z
    .string()
    .min(10, "Press release content must be at least 10 characters"),

  status: z.number(),
  is_draft: z.boolean(),
});

/* =========================
   EDIT / ADD HANDLER
========================= */
export const getPressReleaseSchema = (isEdit: boolean = false) =>
  basePressReleaseSchema.extend({
    image: isEdit ? optionalImage : requiredImage,
  });

export type PressReleaseFormData = z.infer<
  ReturnType<typeof getPressReleaseSchema>
>;


/* =========================
   BASE FAQ SCHEMA
========================= */
export const baseFaqSchema = z.object({
  question: z
    .string()
    .min(3, "Please enter a clear and meaningful question (minimum 3 characters)."),

  answer: z
    .string()
    .min(5, "Please provide a detailed and helpful answer (minimum 5 characters)."),

  status: z.number(),
   is_draft: z.boolean()
});

/* =========================
   EDIT / ADD HANDLER
========================= */
export const getFaqSchema = (isEdit: boolean = false) =>
  baseFaqSchema;

/* =========================
   FORM DATA TYPE
========================= */
export type FaqFormData = z.infer<ReturnType<typeof getFaqSchema>>;



/* =========================
   BASE CONTACT SCHEMA
========================= */
export const baseContactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Enter a valid email address"),

  phone: z
    .string()
    ,

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});

/* =========================
   SCHEMA HANDLER
========================= */
export const getContactSchema = () => baseContactSchema;

/* =========================
   FORM DATA TYPE
========================= */
export type ContactFormData = z.infer<
  ReturnType<typeof getContactSchema>
>;



/* =========================
   BASE OUR TEAM SCHEMA
========================= */
export const baseOurTeamSchema = z.object({
  name: z
    .string()
    .min(2, "Please Enter Team Member Name")
    .max(100, "Name must be less than 100 characters"),

  designation_id: z
    .number()
    .int()
    .positive("Designation is required"),

  status: z.number()
});

/* =========================
   ADD / EDIT HANDLER
========================= */
export const getOurTeamSchema = (isEdit: boolean = false) =>
  baseOurTeamSchema.extend({
    image: isEdit ? optionalImage : requiredImage,
  });

/* =========================
   FORM DATA TYPE
========================= */
export type OurTeamFormData = z.infer<
  ReturnType<typeof getOurTeamSchema>
>;





export const baseSuccessStorySchema = z.object({
  name: z.string().min(3, "Please Enter  Name"),
  organization: z.string().optional(),
  content: z.string().min(10,"Please Enter valid Content").max(230, "content must be less than 230 characters"),
  status: z.number()
});


export const getSuccessStorySchema = (isEdit: boolean = false) =>
  baseSuccessStorySchema.extend({
    image: isEdit ? optionalImage : requiredImage,
  });

export type SuccessStoryFormData = z.infer<
  ReturnType<typeof getSuccessStorySchema>
>;
