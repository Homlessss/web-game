import EditGameForm from "@/components/EditGameForm";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function EditGame({ params }: { params: { id: string } }) {
  const { id } = params;
  return <EditGameForm />;
}
