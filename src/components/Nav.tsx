import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  >ul{
    display:flex;
    line-height:24px;
    box-shadow:0 0 3px rgba(0,0,0,0.25);
    >li{
      width: 33.333333333%;
      text-align: center;
      >a{
 
      padding:16px;
      display:flex;
      flex-direction:column;
      padding:4px 0;
      align-items:center;
      >svg{
        width:24px;
        height:24px;
      }
      &.selected{
        color:red;
        .icon{
          fill:red;
        }
      }
      }
      
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>

          <NavLink to="/Tags" className={({ isActive }) =>
            isActive ? "selected" : undefined
          }><Icon name="tag" />标签页</NavLink>
        </li>
        <li>
          <NavLink to="/Money" className={({ isActive }) =>
            isActive ? "selected" : undefined
          }><Icon name="money" />记账页</NavLink>
        </li>
        <li>

          <NavLink to="/Statistics" className={({ isActive }) =>
            isActive ? "selected" : undefined
          }><Icon name="chart" />统计页</NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav;
