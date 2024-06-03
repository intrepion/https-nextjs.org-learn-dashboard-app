import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    dataCy: "side nav link home",
    href: "/dashboard",
    icon: HomeIcon,
    name: "Home",
  },
  {
    dataCy: "side nav link invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
    name: "Invoices",
  },
  {
    dataCy: "side nav link customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
    name: "Customers",
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            data-cy={link.dataCy}
            href={link.href}
            key={link.name}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
