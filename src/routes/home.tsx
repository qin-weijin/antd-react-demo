import React from 'react';
import { Typography, Image, Card, Flex } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const features = [
  {
    key: "work",
    image: "src/assets/images/work.svg",
    title: "工作",
    detail: "记录工作中的一些技术实施过程、以及遇到的 bug，方便日后回顾。"
  },
  {
    key: "learn",
    image: "src/assets/images/learn.svg",
    title: "学习",
    detail: "工作之余，学习一些对工作有帮助或者个人感兴趣的知识。"
  },
  {
    key: "life",
    image: "src/assets/images/life.svg",
    title: "生活",
    detail: "Work Life Balance. 偶尔也需要放空一下自己..."
  }
];
const featureCards: React.FC = features.map(feature => (
  <Card key={feature.key} title={feature.title} style={{ width: 300 }}>
    <Image
        style={{ width: 48, height: 48 }}
        src={ feature.image }
    ></Image>
    <p>{feature.detail}</p>      
  </Card>
));


const Home: React.FC = () => (
<div className="Home">
  <Flex className="hero">
    <Typography>    
      <Title>Jin Blog</Title>
      <Paragraph>工作&学习&生活</Paragraph>
      <Text>My Blog, 主要记录一些个人碎片化的技术知识内容。</Text>
      <Link>随笔看看</Link>
    </Typography>

    <Image 
      width={200}
      src="src/assets/images/learn.svg"
    ></Image>
  </Flex>
  <Flex className="features">
    {featureCards}
  </Flex>
</div>
);
export default Home;