import { Input } from 'components/Input';
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
  
`;
type Props = {
  value: string;
  onChange: (value: string) => void;
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  }
  return (
    <Wrapper>
      <Input label="备注" type="text" defaultValue={note} onChange={onChange} ></Input>
      {/* <span>备注</span>
        <input type="text" placeholder="在这里添加备注"
          ref={refInput}
          defaultValue={note}
          onBlur={onBlur}
        /> */}

      {/* <input type="text" placeholder="在这里添加备注" value={note}
          onChange={(e) => setNote(e.target.value)}//这是受控组件，实时监听你的变化
        /> */}

    </Wrapper>
  )
}
export { NoteSection }
