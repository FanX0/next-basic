import SideBarAbout from "./SidebarAbout";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout ">
      <SideBarAbout />
      <main className="dashboard-content">{children}</main>
    </div>
  );
}
