import SideBar from "../components/sitebar";

import { Layout } from "antd";

const { Content } = Layout;

const DefaultLayout = ({ children }: { children: any }) => {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
