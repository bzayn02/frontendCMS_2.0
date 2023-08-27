import React from 'react';
import { Card } from 'react-bootstrap';
import {
  AiFillBank,
  AiFillCreditCard,
  AiFillDollarCircle,
} from 'react-icons/ai';
import { BiLogoPaypal } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const PaymentCard = ({ title }) => {
  const { paymentOptions } = useSelector((state) => state.paymentInfo);
  return (
    <div>
      <div className="fs-5">{title}</div>
      <Card style={{ width: '18rem' }} bg="dark" className="text-white">
        <div className="fs-1 d-flex justify-content-between">
          <AiFillCreditCard /> <AiFillDollarCircle /> <BiLogoPaypal />
          <AiFillBank />
        </div>
        <Card.Body>
          {paymentOptions.map((payments, i) => (
            <Card.Text key={i}>{payments.title}</Card.Text>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PaymentCard;
