

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
    
      {children}
    


    </>
  );
}


export const dynamic = "force-dynamic";