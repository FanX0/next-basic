const Layout = ({
  children,
  product,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) => {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div>{product}</div>
      <div>{analytics}</div>
      <div>{payments}</div>
    </div>
  );
};
export default Layout;
