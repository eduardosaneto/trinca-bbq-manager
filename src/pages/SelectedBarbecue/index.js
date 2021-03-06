import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

import Background from "../../components/Barbecues/Background";
import Title from "../../components/Title";
import { Container } from "../../components/Barbecues/Container";
import BarbecueInfo from "../../components/Barbecues/SelectedBarbecue/BarbecueInfo";
import BarbecueTitle from "../../components/Barbecues/SelectedBarbecue/BarbecueTitle";

import AmountToPayContext from "../../context/AmountToPayContext";

export default function AddBarbecue() {
  const { id } = useParams();
  const [barbecue, setBarbecue] = useState([]);
  const [people, setPeople] = useState([]);
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token.token;
  const { setAmountToPay } = useContext(AmountToPayContext);

  const close = { autoClose: 3000 };

  function getBarbecue(config) {
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/barbecues/${id}`, config);
    request.then(response => {
      setBarbecue(response.data[0]);
      setAmountToPay(response.data[0].foodValue);
    });
    request.catch(() => {
      toast.error("Não foi possível carregar o seu churrasco", close);
    });
  }

  function getBarbecuePeople(config) {
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/barbecues/${id}/participants`, config);
    request.then(response => {
      setPeople(response.data);
    });
    request.catch(() => {
      toast.error("Não foi possível carregar os participantes do churrasco", close);
    });
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    getBarbecue(config);
    getBarbecuePeople(config);
  }, [token]);

  return (
    <>
      <Title />
      <Background>
        <Container>
          <BarbecueTitle
            barbecueId={barbecue.id}
            name={barbecue.name}
            foodValue={barbecue.foodValue}
            drinkValue={barbecue.drinkValue}
          />
          <BarbecueInfo
            barbecueId={barbecue.id}
            date={barbecue.date}
            amount={barbecue.amountCollected}
            totalPeople={barbecue.totalParticipants}
            obs={barbecue.observations}
            description={barbecue.description}
            people={people}
          />
        </Container>
      </Background>
    </>
  );
}
