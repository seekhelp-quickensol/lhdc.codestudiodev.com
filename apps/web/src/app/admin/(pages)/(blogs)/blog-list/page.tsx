import BlogPage from "./blog";

export const metadata = {
  title: 'Add Blog | Admin Panel',
  description: 'Create new user with roles, credentials, and profile details.',
  keywords: ['Next.js', 'Add Blog', 'Admin Panel', 'React Form'],
  authors: [{ name: 'Aditya' }],
  openGraph: {
    title: 'Add Blog',
    description: 'Securely onboard new user with role-based access.',
    url: 'https://yourdomain.com/add-blog',
    siteName: 'Your App Name',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Add Blog Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return (
    <BlogPage />
  )
 ;
}