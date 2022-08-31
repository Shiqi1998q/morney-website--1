import React from 'react';
import { useTags } from 'hooks/useTags';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import { Button } from 'components/Button';
import Icon from 'components/Icon';
import styled from 'styled-components';
import { Input } from 'components/Input';
import { Center } from 'components/Center';
import { Space } from 'components/Space';
type Params = {
    id: string
}
const Topbar = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    line-height:20px;
    padding:14px;
    background: #3eb477;

`
const InputWrapper = styled.div`
    background:white;
    padding:0 16px;
    margin-top:8px;
    
    box-shadow: 10px 10px 5px #888888;
border-radius:25px;
`

const Tag: React.FC = (props) => {
    const { findTag, updateTag, deleteTag } = useTags();
    let { id: idString } = useParams<Params>();
    //TODO：bug
    let tag = {
        id: 56,
        name: "123"
    }
    if (typeof idString === "string") {
        tag = findTag(parseInt(idString));
    }
    const tagContent = (tag: { id: number; name: string; }) => (
        <div>
            <InputWrapper>
                <Input label='标签名' type="text" placeholder='标签名' value={tag.name} onChange={(e) => {
                    updateTag(tag.id, { name: e.target.value })
                }} />
            </InputWrapper>
            <Center>
                <Space />
                <Space />
                <Space />
                <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
            </Center>
        </div>
    )
    const navigate = useNavigate()
    return (
        <Layout>
            <Topbar>
                <Icon name='left' onClick={() => navigate(-1)} />
                <span>编辑标签</span>
                <Icon />
            </Topbar>
            {tag ? tagContent(tag) : <Center>tag不存在</Center>}
        </Layout>
    )
}



export { Tag };

function updateTag(id: any, arg1: { name: any; }) {
    throw new Error('Function not implemented.');
}
