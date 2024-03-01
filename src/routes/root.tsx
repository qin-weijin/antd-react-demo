import { useState } from 'react';
import { Layout, ConfigProvider, RadioChangeEvent, Radio } from 'antd';
import { AppHeader } from '@/components/AppHeader';
import { Outlet } from "react-router-dom"

const { Header, Content } = Layout;

const Root = () => {
// Theme Switch
enum ThemeType { DEFAULT = "default", DARK = "dark" }
const onChange = (e: RadioChangeEvent) => {
  setTheme(e.target.value);
};
const [theme, setTheme] = useState<ThemeType>(ThemeType.DEFAULT);
return (
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
      </div>

    <Outlet />
    </Content>
  </Layout>
</ConfigProvider>
)};
export default Root;