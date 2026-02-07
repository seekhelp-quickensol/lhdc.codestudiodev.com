export interface FilterProps {
  setFilteredUrl: React.Dispatch<React.SetStateAction<string>>;
  filteredUrl: string;
}


export interface Department {
  id: number;
  department_name: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface Category {
  id: number;
  name: string;
  status: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Magazine {
  id: number;
  magazine_name: string;
  category: string;
  image: string;
  publish_date: any;
  duration: string;
  short_description: string;
  description: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}


export interface User {
  name: string | null | undefined;
  id: number;
  full_name: string;
  image: string;
  short_description: string;
  description: string;
  email: string;
  password: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}


export interface Podcast {
  id: number;
  podcast_name: string;
  image: string;
  publish_date: any;
  duration: string;
  description: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

export interface DepartmentRow {
  [0]: number; // id
  [1]: number; // sr_no
  [2]: string; // department_name
  [3]: string | number;  // status (0 or 1)
}

export interface MagazineRow {
  [0]: number; // id
  [1]: number; // sr_no
  [2]: number | string; // status
  [3]: string;  // Magazine Name
}

export interface UserRow {
  [0]: number; // id
  [1]: number; // sr_no
  [2]: number | string; // status
  [3]: string;  // Full Name
}

export interface PodcastRow {
  [0]: number; // id
  [1]: number; // sr_no
  [2]: number | string; // status (0 or 1)
  [3]: string;
}

// Master

export interface Designation {
  id: number;
  designation_name: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}


export interface DesignationRow {
  [0]: number; // id
  [1]: number; // sr_no
  [2]: string; // department_name
  [3]: string | number;  // status (0 or 1)
}
export interface Status{
  id:number;
  service_name:string;
  status_name:string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;



}

export interface States {
  id: number;
  name: string;
  country_id: number;
}

export interface City {
  [x: string]: any;
  id: number;
  city_name: string;
  state_id: number;
  state: {
    id: number;
    name: string;
    country_id: number;
  };
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}

export interface CityRow {
  [0]: number; // id
  [1]: number; // sr_no
  [2]: number; // state_id
  [3]: string; // state_name
  [4]: string; // city_name
  [5]: string | number;  // status (0 or 1)
}


export interface Banner {
  id: number;
  banner_name: string;
  banner_img: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface ReportedLead {
  id: number;
  reported_lead_name: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface PropertyType {
  id: number;
  property_type: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface PropertyVariant {
  id: number;
  property_variant: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface PropertyAmenities {
  id: number;
  property_amenitie: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface PropertyAmenitiesMulti {
  id: number;
  property_amenitie: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
  text: string,
  selected: boolean
}
export interface RewardPoints {
  id: number;
  no_of_leads: number;
  credit_points: number;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface Specification {
  id: number;
  specification_name: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface VerificationStatus {
  id: number;
  status_name: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface AdminUser {
  id: number;
  name: string;
  email: string;
  image: string;
  contact: string;
  role: string;
  emailVerified: string;
  password: string;
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string; // or Date if you're parsing it
  updated_on: string;
}
export interface Broker {
  id: number;
  broker_name: string,
  broker_firm: string,
  state_id: number,
  city_id: number,
  broker_mobile_no: string,
  alternate_no: string,
  broker_email: string,
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string;
  updated_on: string;
}
export interface Lead {
  id: number;
  property_type: number,
  property_code: string,
  date: string,
  amenities: string[],
  possession_status: number,
  owner_agent: number,
  owner_name: string,
  link: string,
  mobile_no: string,
  alternate_no: string,
  state: number,
  city: number,
  sub_location: number,
  actual_address: string,
  portal: number,
  property_variant: number,
  carpet_area: string,
  price_rent: string,
  deposit: string,
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string;
  updated_on: string;
}

export interface Subscription {
  package_name: string,
  reward_points: string,
  no_leads: string,
  amount: string,
  discount_amount: string,
  tags: string[],
  image: string,
  subheading_1: string,
  subheading_2: string,
  subheading_3: string,
  subheading_4: string,
  subheading_5: string,
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string;
  updated_on: string;
}

export interface PushNotification{
  title : string,
  image : string,
  description : string,
  customer_type : string,
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string;
  updated_on: string;
}

export interface Project{
  id: number;
  project_name: string,
  state_id: number,
  city_id: number,
  location_id: number,
  developer_id: number,
  property_type_id: number,
  property_variant_id: number,
  amenities: string[],
  possession_status: number,
  project_status: number,
  price_range: string,
  project_link: string,
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string;
  updated_on: string;
}

export interface AdsRequest{
  id: number;
  broker_name: string,
  mobile: string,
  email: string,
  state_id: number,
  city_id: number,
  location_id: string,
  property_type_id: string,
  property_variant_id: string,
  expected_price_rent: string,
  budget_range: string,
  contact_method: string,
  carpet_area: string,
  description: string,
  platforms: string[],
  additional_notes: string,
  status: "0" | "1";
  is_deleted: "0" | "1";
  created_on: string;
  updated_on: string;
}

export interface Session {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    image: string;
  } | null;
  isLoading: boolean;
}


export interface User{ 
    id: number;
    name: string | null | undefined;
    email: string;
    role: string;
}



export interface Blog {
  id: number;
  title: string;
  status: number;
  meta_url: string;
  author?: string; // ✅ added author field
  meta_keyword?: string;
  tag?: string[] | string; 
  meta_description?: string;
  short_description?: string;
  blog_content?: string;
  blog_image: string | null; // ✅ nullable now
  category: {
    id: number;
    name: string;
  };
}


export interface PressRelease {
  id: number;
  title: string;
  status: number;
  meta_url: string;
  tag?: string[] | string; 
  meta_keyword?: string;
  meta_description?: string;

  short_description?: string;
  blog_content?: string;

  press_release_image?: string | null;

}

export interface Faq {
  id: number;
  question: string;
  answer?: string;
  status: number;
}

export interface ContactUs {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: number; // 1 = new, 0 = resolved
  created_on: string;
  updated_on: string;
}

export interface SuccessStory {
  id: number;
  name: string;
  designation?: string;
  organization?: string;

  short_description?: string;
  story_content?: string;

  success_story_image?: string | null;

  status: number; // 1 = active, 0 = inactive
  created_on?: string;
  updated_on?: string;
}
  



export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
}

