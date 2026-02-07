
import { SidebarProvider } from '@/src/context/admin/SidebarContext';
import { ThemeProvider } from '@/src/context/admin/ThemeContext';
import { Toaster } from 'react-hot-toast';
import { StateProvider } from '@/src/context/admin/StateContext';
import { OptionProvider } from '@/src/context/admin/OptionContext';
import { requireAdmin } from '@/src/lib/auth/actions';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireAdmin();
  return (
<>
        <ThemeProvider>
          <StateProvider> 
          <OptionProvider> 
          <Toaster position="bottom-right" reverseOrder={false} />
          <SidebarProvider>                                  
          {children}
          </SidebarProvider>
          </OptionProvider> 
          </StateProvider>
        </ThemeProvider>


    </>
  );
}


export const dynamic = "force-dynamic";