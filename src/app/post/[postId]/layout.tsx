import { PostStoreProvider } from '@/providers/post-store-provider';

export default function PostIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PostStoreProvider>{children}</PostStoreProvider>;
}
