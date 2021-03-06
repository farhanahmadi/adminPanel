import React, { useState, useEffect, useRef } from "react";
import { MainLink } from "../BaseUrl/BaseUrl";
import { useRouter } from "next/router";

//import styles
import styles from "./orders.module.css";

//import modules
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as shamsi from "shamsi-date-converter";

const EditOrder = ({ id, ordersDetails }) => {
  const redirect = useRouter();
  const [data, setData] = useState({
    id: [],
    ownerId: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    state: "",
    city: "",
    address: "",
    plate: "",
    zipCode: "",
    is_admin: false,
    is_oprator: false,
    payment_date: "",
    payment_status: "",
    total_price: "",
    confirmation: false,
  });

  useEffect(() => {
    setData({
      ...data,
      id: ordersDetails.data_1.products,
      ownerId: ordersDetails.data_1.owner.id,
      username: ordersDetails.data_1.owner.username,
      email: ordersDetails.data_1.owner.email,
      firstName: ordersDetails.data_1.owner.first_name,
      lastName: ordersDetails.data_1.owner.last_name,
      state: ordersDetails.data_1.owner.state,
      city: ordersDetails.data_1.owner.city,
      address: ordersDetails.data_1.owner.address,
      plate: ordersDetails.data_1.owner.plate,
      zipCode: ordersDetails.data_1.owner.zip_code,
      is_admin: ordersDetails.data_1.owner.is_admin,
      is_oprator: ordersDetails.data_1.owner.is_operator,
      payment_date: ordersDetails.data_1.payment_date,
      payment_status: ordersDetails.data_1.payment_status,
      total_price: ordersDetails.data_1.total_price,
      confirmation: ordersDetails.data_1.confirmation,
    });
  }, []);

  const checkboxHandler = (event) => {
    setData({ ...data, confirmation: event.target.checked });
  };
  const statusHandler = (event) => {
    setData({ ...data, payment_status: event.target.value });
  };

  const sendData = () => {
    axios
      .put(`${MainLink}/order/${id}/`, {
        products: data.id,
        confirmation: data.confirmation,
        owner: data.ownerId,
        payment_status: data.payment_status,
      })
      .then((response) => {
        if (response) {
          toast.success("?????????????? ???? ???????????? ?????? ????");
          setTimeout(() => {
            redirect.push("/orders");
          }, 2500);
        }
      })
      .catch((error) => {
        toast.error("?????????? ???????? ?????? ???????? ??????????????");
        // console.log(error.response.data);
      });
  };

  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">?????????? ??????????</h4>
          <div className="forms-sample">
            <div className={styles.container}>
              <div className="form-group">
                <label htmlFor="usernameInput">?????? ????????????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="usernameInput"
                  placeholder="?????? ????????????"
                  value={data.username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">?????????? </label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="emailInput"
                  placeholder="??????????"
                  value={data.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">?????? </label>
                <input
                  disabled
                  type="text"
                  name="firstName"
                  className="form-control form-control-lg"
                  id="nameInput"
                  placeholder="?????? "
                  value={data.firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="familiyNameInput">?????? ????????????????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="familiyNameInput"
                  placeholder="?????? ????????????????"
                  value={data.lastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="stateInput"> ??????????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="stateInput"
                  placeholder=" ??????????"
                  value={data.state}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cityInput"> ??????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="cityInput"
                  placeholder=" ??????"
                  value={data.city}
                />
              </div>
              <div className="form-group">
                <label htmlFor="addressInput"> ????????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="addressInput"
                  placeholder=" ????????"
                  value={data.address}
                />
              </div>
              <div className="form-group">
                <label htmlFor="plateInput"> ????????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="plateInput"
                  placeholder=" ????????"
                  value={data.plate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipCodeInput">???? ????????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="zipCodeInput"
                  placeholder=" ???? ????????"
                  value={data.zipCode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="priceTotalInput">???????? ????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="priceTotalInput"
                  placeholder=" ???? ????????"
                  value={data.total_price}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmationInput">?????????? ????????????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="confirmationInput"
                  placeholder=" ???? ????????"
                  value={data.payment_status == "p" ? "???????????? ??????" : "????????????"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateInput">??????????</label>
                <input
                  disabled
                  type="text"
                  className="form-control form-control-lg"
                  id="dateInput"
                  placeholder=" ???? ????????"
                  value={shamsi
                    .gregorianToJalali(data.payment_date.split("-"))
                    .join("-")}
                />
              </div>
            </div>
            <h4 className="card-title">?????????????? ???????? ??????</h4>
            {ordersDetails.data_2.map((item) => (
              <>
                <div key={item.id} className="form-group">
                  <label htmlFor="nameInput">?????? ??????????</label>
                  <input
                    disabled
                    type="text"
                    className="form-control form-control-lg"
                    id="nameInput"
                    placeholder="?????? ????????????"
                    value={item.product.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priceInput">???????? ?????????? </label>
                  <input
                    disabled
                    type="text"
                    className="form-control form-control-lg"
                    id="priceInput"
                    placeholder="??????????"
                    value={item.product_price}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quantityInput">?????????? ???????????? ?????? </label>
                  <input
                    disabled
                    type="text"
                    className="form-control form-control-lg"
                    id="quantityInput"
                    placeholder="?????? "
                    value={item.quantity}
                  />
                </div>
                <hr />
              </>
            ))}
            <div className="form-group">
              <label htmlFor="exampleInputCategory">???????? ????????</label>
              <select
                name="category"
                id="exampleInputCategory"
                className="form-control form-control-lg"
                onChange={(e) => statusHandler(e)}
              >
                {data.payment_status === "p" ? (
                  <option selected hidden value={"p"}>
                    ???????????? ????????
                  </option>
                ) : (
                  <option selected hidden value={"r"}>
                    ????????????
                  </option>
                )}
                <option value={"p"}>???????????? ????????</option>
                <option value={"r"}>????????????</option>
              </select>
            </div>
            <div className="form-check form-check-flat">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={checkboxHandler}
                  name="confirmation"
                  checked={data.confirmation}
                  value={data.confirmation}
                />{" "}
                ?????????? ?????? ?? <i className="input-helper"></i>
              </label>
            </div>
            <button onClick={sendData} className="btn btn-success mr-2">
              ??????
            </button>
            <button className="btn btn-light">????????????</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditOrder;
