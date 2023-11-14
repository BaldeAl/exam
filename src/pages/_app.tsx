import { AuthProvider } from '@/components/AuthContext';
import PrincipalSection from '@/components/PrincipalSection';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PrincipalSection>
        <Component {...pageProps} />
      </PrincipalSection>
    </AuthProvider>
  );
}
