import { notFound } from "next/navigation";

const LOCALES = ["vi", "en"];

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!LOCALES.includes(lang)) notFound();
  return <div>{children}</div>;
}