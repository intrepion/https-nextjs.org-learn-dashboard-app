import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { fetchCardData } from "@/app/lib/data";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Collected" type="collected" value={totalPaidInvoices} />
      <Card title="Pending" type="pending" value={totalPendingInvoices} />
      <Card title="Total Invoices" type="invoices" value={numberOfInvoices} />
      <Card
        title="Total Customers"
        type="customers"
        value={numberOfCustomers}
      />
    </>
  );
}

export function Card({
  title,
  type,
  value,
}: {
  title: string;
  type: "invoices" | "customers" | "pending" | "collected";
  value: number | string;
}) {
  const Icon = iconMap[type];

  return (
    <div
      className="rounded-xl bg-gray-50 p-2 shadow-sm"
      data-cy={type + " card"}
    >
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
