import Link from 'next/link';
import { NavLinkRenderer } from '@/widgets/Sidebar/model/types';

export const NextLinkView: NavLinkRenderer = (item, children) =>
  item.href ? <Link href={item.href}>{children}</Link> : children;
