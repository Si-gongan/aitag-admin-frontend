import { PostStoreProvider } from '@/providers/post-store-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PostStoreProvider>{children}</PostStoreProvider>;
}
