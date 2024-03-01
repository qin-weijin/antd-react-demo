import { Flex, Menu, Avatar, Switch, AutoComplete } from 'antd'
import type { MenuProps } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

// Navigtion Menu Item

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('书签'),
  getItem('随笔'), 
  getItem('分类', null, null, [
    getItem('HTML'),
    getItem('CSS'),
    getItem('JavaScript'),
  ]),
  getItem('标签'),
  getItem('归档'),
  getItem('关于', null, null ,[
    getItem('About Blog'),
    getItem('About Me'),
  ]),
];

export const AppHeader = () => (
<Flex className="app-header" wrap="nowrap" justify="space-between" align="center">
  <Flex justify="start" align="center" gap="">
    <div className="logo">
      <Avatar src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
      <a href="/">qin-weijin</a>
    </div>
    <AutoComplete placeholder="输入关键字搜索..."></AutoComplete>
  </Flex>
  <Flex justify="end" align="center" gap="">          
    <Menu
      mode="horizontal"
      items={items}
      style={{}}
      theme="dark"
    />
    <Switch defaultChecked />
    <GithubOutlined />
    <GithubOutlined />
  </Flex>
</Flex>
);
