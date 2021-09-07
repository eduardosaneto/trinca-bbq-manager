import styled from "styled-components";
import { IoBeer } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export const AddPerson = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  button {
    width: 60px;
    height: 24px;
    border-radius: 10px;
    font-size: 15.976px;
    line-height: 20px;
  }

  button:first-child {
    background: #fff;
    color: #ffd836;
  }

  button:last-child {
    margin-left: 15px;
    background: #ffd836;
    color: #fff;
  }
`;

export const Beer = styled(IoBeer)`
  font-size: 40px;
  margin-top: 10px;

  .check {
    color: #ffd836;
  }
`;

export const Money = styled(RiMoneyDollarCircleLine)`
  font-size: 40px;
  margin-top: 10px;

  .check Money {
    color: #ffd836;
  }
`;