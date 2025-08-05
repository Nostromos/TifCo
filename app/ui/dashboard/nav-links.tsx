'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

/**
 * Array of navigation links displayed in the side navigation.
 * Each link includes a name, href (URL path), and an icon component.
 */
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

/**
 * `NavLinks` Component
 *
 * Renders a list of navigation links with icons for the dashboard sidebar.
 * Highlights the active link based on the current pathname.
 *
 * @returns {JSX.Element} Navigation links as a list of `<Link>` elements.
 */
export default function NavLinks(): JSX.Element {
  // Get the current pathname from Next.js navigation
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        // Extract the icon component for the link
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              // Base styles for the link appearance
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-pink-50 p-3 text-sm font-medium hover:bg-purple-100 hover:text-emerald-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                // Apply active styles if the link matches the current pathname
                'bg-sky-100 text-purple-600': pathname === link.href,
              },
            )}
          >
            {/* Render the link icon */}
            <LinkIcon className="w-6" />
            {/* Display link text only on medium+ screen sizes */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}