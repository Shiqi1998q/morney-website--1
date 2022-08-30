
import { useEffect, useState } from 'react';
import { createId } from 'lib/createId';
import { useUpdate } from 'hooks/useUpdate';

const defaultTags = [
    { id: createId(), name: '衣' },
    { id: createId(), name: '食' },
    { id: createId(), name: '住' },
    { id: createId(), name: '行' },
];
const useTags = () => { // 封装一个自定义 Hook
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localTags.length === 0) {
            localTags = [
                { id: createId(), name: '衣' },
                { id: createId(), name: '食' },
                { id: createId(), name: '住' },
                { id: createId(), name: '行' },
            ];
        }
        setTags(localTags);

    }, []); // 组件挂载时执行
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags]);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i
                break
            }
        }
        return result
    }
    const updateTag = (id: number, { name }: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? { id, name: name } : tag))
        // //获取你要改的tag的下标
        // const index = findTagIndex(id)
        // //深拷贝tags得到tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags))
        // //把tagsClone的第index删掉，换成{id: id, name: obj.name }
        // tagsClone.splice(index, 1, { id: id, name: obj.name })
        // setTags(tagsClone)
    };
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
        // //获取你要删的tag的下标
        // const index = findTagIndex(id);
        // //深拷贝tags得到tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // //把tagsClone的第index删掉
        // tagsClone.splice(index, 1);
        // setTags(tagsClone);
    };
    const addTag = () => {
        console.log('hi');
        const tagName = window.prompt('新标签的名称为');
        if (tagName !== null && tagName !== '') {
            setTags([...tags, { id: createId(), name: tagName }]);
        }
    };
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
    };

    return { tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag, getName };
};

export { useTags };

// import { useState } from "react";
// //React 规定你必须用useXxxxx，自定义hook(在中使用一个useState,返回一个读写的接口)
// const defaultTags = [

//     { id: 1, name: '衣' },
//     { id: 2, name: '食' },
//     { id: 3, name: '住' },
//     { id: 4, name: '行' }

// ]
// const useTags = () => {
//     const [tags, setTags] = useState<
//         { id: number; name: string }[]>(defaultTags);
//     const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
//     return {
//         tags, setTags, findTag
//         // tags:tags,
//         // setTags:setTagsES6新语法，前后相同可以省略
//     }
// }
// //导出的是对象，如果是数组的话会报错
// export { useTags }