import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getPriceTotalOfItemsInCart } from "../helper/utils";
import { postPurchaseData } from "../helper/apiHelper";
import { clearAllItemsInCart } from "../action";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export default function FormDialog({ handleClose, open, cart, purchasePayload }) {
    const [cardNumber, setCardNumber] = React.useState("");
    const [cardNumberExpiration, setCardNumberExpiration] = React.useState("");
    const dispatch = useDispatch();
    let history = useHistory();
  
    return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <p style={{fontSize: "2em", padding: "16px 24px"}}>Your purchases</p>
        <DialogContent>
          <div>
            {
                cart.map(item => {
                    return(
                        <p key={item.id} style={{fontStyle: "italic", margin: "8px"}}>{item.name} x {item.quantity}</p>
                    )
                })
            }
          </div>
          <p style={{fontWeight: "bold", color: "green", marginTop: "10px", fontSize: "1.2em"}}>Total: ${(getPriceTotalOfItemsInCart(cart) * 1.15).toFixed(2)} tax included</p>
          <form autoComplete="off">
            <TextField
                margin="dense"
                id="card-number"
                label="Card Info"
                type="card-numbers"
                fullWidth
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                inputProps={{ maxLength: 16 }}
                required
            />
            <TextField
                margin="dense"
                id="card-expiration"
                label="Expiration date"
                type="expiration"
                value={cardNumberExpiration}
                onChange={(e) => setCardNumberExpiration(e.target.value)}
                inputProps={{ maxLength: 5 }}
                required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          {
            cardNumber.length > 0 && cardNumberExpiration.length > 0 ?
            <Button onClick={() => {
                console.log(purchasePayload)
                postPurchaseData(purchasePayload)
                .then(() => {
                  history.push('/');
                  dispatch(clearAllItemsInCart());
                  window.location.reload();
                })
                .catch(err => console.log("Err: ", err));

            }} variant="contained" color="primary">
                Purchase
            </Button>
            :
            <Button disabled variant="contained" color="primary">
                Purchase
            </Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}
