import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import UnstyledButton from "../../helper/UnstyledButton";
import { getCompanyName } from "../../helper/utils";
import { removeItemFromCart, incrementItemQuantityBy1, decrementItemQuantityBy1 } from "../../action";

export default function Cart({item}) {
    const companies = useSelector(state => state.auth.companies);
    const dispatch = useDispatch();

    return(
        <ItemSection>
            <SingleItemWrapper>
                <ItemImg src={item.imageSrc} alt="Item from your selected cart"/>
                <ItemInfo>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <p>{item.name}</p>
                        <p>By {getCompanyName(item.companyId, companies)}</p>
                    </div>
                    <p>Selected Quantity: {item.quantity} <PlusMinusBtn onClick={() => dispatch(incrementItemQuantityBy1(item.id))} style={{display: "inline-block"}}>+</PlusMinusBtn> <PlusMinusBtn onClick={() => dispatch(decrementItemQuantityBy1(item.id))} style={{display: "inline-block"}}>-</PlusMinusBtn></p>
                    <p>Number of item in stock: {item.numInStock}</p>
                    <span><RemoveBtn onClick={() => dispatch(removeItemFromCart(item.id))}>Remove all</RemoveBtn></span>
                    <p style={{marginTop: "auto", marginLeft: "auto"}}>{item.price}</p>
                </ItemInfo>
            </SingleItemWrapper>
        </ItemSection>
  );
}

const ItemSection = styled.div`
    border-bottom: 1px solid lightgray;
`;

const SingleItemWrapper = styled.div`
    display: flex;
    margin: 20px 0;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 15px;

    p {
        margin: 5px 0;
    }
`;

const ItemImg = styled.img`
    width: 20%;
`;

const RemoveBtn = styled(UnstyledButton)`
    font-size: 0.8em;
    color: red;
`;

const PlusMinusBtn = styled(UnstyledButton)`
    padding: 0 5px;
    border: 1px solid black;
    border-radius: 50%;
`;