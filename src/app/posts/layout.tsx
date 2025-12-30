import type { ReactNode } from 'react';

import PostModal from '@/pages/posts/ui/post-modal';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <PostModal />
    </>
  );
}
