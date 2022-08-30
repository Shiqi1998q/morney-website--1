import React from "react"
import styled from "styled-components"
const Label = styled.label`
   
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 44px;
      background: none;
      border: none;

  }
`

type Props = {
    label: string;
} & React.InputHTMLAttributes<any>;
const Input: React.FC<Props> = (props) => {
    const { label, children, ...rest } = props;
    return (<Label>
        <span>{props.label}</span>
        <input {...rest} />
        {/* //把除了label和children之外的其他属性都拷贝到input上 */}

    </Label>
    )
}

export { Input }
