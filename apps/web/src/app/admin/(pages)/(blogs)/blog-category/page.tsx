import CategoryPage from './category-page';

export const metadata = {
  title: 'Blog Category | Admin Panel',
  description: 'Create new user with roles, credentials, and profile details.',
  keywords: ['Next.js', 'Blog Category Management', 'Admin Panel', 'React Form'],
  authors: [{ name: 'Aditya' }],
  openGraph: {
    title: 'Blog Category',
    description: 'Securely onboard new user with role-based access.',
    url: 'https://yourdomain.com/blog-category',
    siteName: 'Your App Name',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blog Category Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return (
    <CategoryPage />
  )
 ;
}