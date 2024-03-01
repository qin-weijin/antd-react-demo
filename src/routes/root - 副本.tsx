import { useState } from 'react';
import { Layout, ConfigProvider, RadioChangeEvent } from 'antd';
import { AppHeader } from '@/components/AppHeader';
import { Outlet } from "react-router-dom"

const { Header, Content } = Layout;

// Theme Type
enum ThemeType { DEFAULT = "default", DARK = "dark" }
// Theme
const [theme, setTheme] = useState<ThemeType>(ThemeType.DEFAULT);
// Theme Switch
const onChange = (e: RadioChangeEvent) => {
  console.log("radio checked", e.target.value);
  setTheme(e.target.value);
};

const Root = () => (

<ConfigProvider>
  <Layout>
    <Header><AppHeader /></Header>
    <Content>

      <div className='App'>
        <Radio.Group onChange={onChange} value={theme}>
          <Radio value={ThemeType.DEFAULT}>default</Radio>
          <Radio value={ThemeType.DARK}>dark</Radio>
        </Radio.Group>
        <div>current theme:{theme}</div>
        {/* 表格 */}
        <DemoTable></DemoTable>
      </div>

    <Outlet />
    </Content>
  </Layout>
</ConfigProvider>
);
export default Root;