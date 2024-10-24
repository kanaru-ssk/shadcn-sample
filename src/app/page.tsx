import { ButtonDemo } from "./button-demo";
import { TableDemo } from "./table-demo";
import { TableWithButtonDemo } from "./table-with-button-demo";

export default function Home() {
  return (
    <main className="p-5 space-y-4">
      <ButtonDemo />
      <TableDemo />
      <TableWithButtonDemo />
    </main>
  );
}
