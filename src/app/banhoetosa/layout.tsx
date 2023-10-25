type LayoutProps = {
  children: React.ReactNode;
  recovery: React.ReactNode;
  users: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default Layout;
