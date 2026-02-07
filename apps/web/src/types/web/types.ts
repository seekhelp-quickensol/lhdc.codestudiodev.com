// export interface Blog {
//   id: number;
//   title: string;
//   meta_url: string;
//   meta_description: string;
//   blog_image: string | null;
// }


export interface Blog {
  id: number;
  title: string;
  meta_url: string;
  author?: string;
  meta_keyword?: string;
  tag?: string[] | string; 
  
  meta_description?: string;
  short_description?: string;
  blog_content?: string;
  blog_image: string | null;
  createdAt?: string;
  updatedAt?: string;
  category?: {
    id: number;
    name: string;
  };
}




export interface PressRelease {
  id: number;
  title: string;
  author: string;
  short_description: string;
  press_release_content: string;
    tag?: string[] | string;
  press_release_image: string | null;
  meta_url: string;
  createdAt: string;
}



export interface Faq {
  id: number;
  question: string;
  answer?: string;
  status: number;
}


export interface ContactUs {
  id :number;
  name: string;
  email: string;
  phone:string;
  message:string;
  created_on:string;
}

export interface OurTeam {
  id: number;                // Team member ID
  name: string;              // Member name
  designation_id: number;    // ID of the designation
  designation_name?: string; // Optional: name of the designation
  status: number;            // Status (1 = active, 0 = inactive)
  our_team_image?: string;   // Image URL
  created_at?: string;       // Creation date
  updated_at?: string;       // Updated date
}