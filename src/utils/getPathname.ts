import { usePathname } from 'next/navigation';

export default function useGetPathname() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const section = pathSegments[1];
  return section;
}
