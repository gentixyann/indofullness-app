export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <hr />
      <div>{children}</div>
      <hr />
    </>
  );
}
