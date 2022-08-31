import Layout from 'components/Layout';
import { useTags } from 'hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { Center } from 'components/Center';
import { Space } from 'components/Space';
const TagList = styled.ol`
  font-size: 16px; 
  background:white;
  > li{
    border-radius:10px;
    box-shadow: 10px 10px 5px #e3dddd;
    //#e5e5e7
   
    line-height: 20px;
    margin-left: 16px;
    padding-left:12px;
    padding-top:15px;
    margin-right:12px;
    > a{
      padding: 12px 16px 12px 0;
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;




function Tags() {
  const { tags, addTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id} >
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}
export default Tags;