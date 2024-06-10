import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default function Page() {
  return <p data-cy="main header">Customers Page</p>;
}
