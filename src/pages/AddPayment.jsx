import "./addpayment.css";
import logo from "../svgs/logo.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../components/UsersInfo.jsx";

function AddPayment() {
  const storedUserData = JSON.parse(localStorage.getItem("UserData"));

  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/c340/6080/502aa13bd224ab3d9fde2b1e45a0eec9?Expires=1684713600&Signature=iBRYhXnBJTuMlQsdSSeFGzYmV4~KBRMC2BHgfLQTVtLZsZQlw~TCiEDg4NqFOL~eUHHlEMJicx-KQT-fHYsKMpk0q3HHxz3~46-XxNknPi9iCT8WCHyGY67ODLrH-9xqAZVAPRlfywCvNF6trPF3DaHh5ppbqoFcmarEZf5Vmpg8lGtjDCGckeu4jXAITPSoYdq3hhZY~OQvqtbst-VmGsNfuqtQRSZnIlLg-65UMHffZfhEZEzJ1cm3ywsPor6FtaJbNDB2nZTZ60~SkR2y2qlXtfsl2lse9RN-f5I8IFJ6XTDrGnfRc2A33vtrWzMR9zlPL7ql66mOvOcrp1bgQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/0629/da0f/736762a1b63e564588a75ef07ab10d25?Expires=1684713600&Signature=Hl9uCqUY-0m8iBHaCPWVyFdYy07niZCT0ihvqe4CCs7t6ECBkDDXbiQeXPMJ9uho5uTmSpKThzMYuPdja-uR-CGKQqzvfwsBXZmGQIbMpaGoaGuhx1YRqlNmqo43O--pg0thOk141b1QSnitATv1EU-~LuhwZQ3Q3k0vIdflCMr9pGGOGxNgG2ozcLvag57H2GIA1-p8vFhBG~OzcnLz10xJj~6QUcpzc~7GneE8dP2gyLiQmmwP~m255mCw2zl0Q988xAUPf9~M3BVqhNXQEBJclv9BCKzbHiT1AMCv4kWSJbUv~vYiGSIG6I9TNJo9BNZG6gkn306k9wYTxP1~ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8&w=1000&q=80",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const inputType = isPasswordVisible ? "text" : "password";

  const [formData, setFormData] = useState(UserData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (formData.firstName.length < 3 || formData.firstName.length > 16) {
      validationErrors.firstName = "Please input your name correctly";
    }

    if (formData.lastName.length < 3 || formData.lastName.length > 16) {
      validationErrors.lastName = "Please input your last name correctly";
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.email.endsWith("@gmail.com")) {
      validationErrors.email = "Email must end with @gmail.com";
    }

    if (formData.phoneNumber.length < 8) {
      validationErrors.phoneNumber = "Phone number must be at least 9 digits";
    }

    if (formData.password.length < 8 || formData.password.length > 32) {
      validationErrors.password =
        "Password must be between 8 and 32 characters";
    }

    setErrors(validationErrors);
    setIsSubmitted(true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(true);
      return;
    } else {
      setIsProcessing(true);
      UserData.firstName = formData.firstName;
      UserData.lastName = formData.lastName;
      UserData.email = formData.email;
      UserData.phoneNumber = formData.phoneNumber;
      UserData.password = formData.password;
      UserData.confirmPassword = formData.confirmPassword;
      UserData.signedUp = true;

      localStorage.setItem("UserData", JSON.stringify(UserData));

      setTimeout(() => {
        setIsProcessing(false);
        window.location.href = "/SignUp/AddPayment";
      }, 2000);
    }
  };

  if (storedUserData.signedUp == false) {
    return <p>you are not signed in</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="SignupBox">
            <div className="SignupColl">
              <div className="SignupRead">
                <div className="slider">
                  <div className="cards-wrapper">
                    {cards.map((card, index) => (
                      <div
                        key={card.id}
                        className={`card ${
                          currentIndex === index ? "active" : ""
                        }`}
                        style={{
                          transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                      >
                        <img src={card.image} />
                      </div>
                    ))}
                  </div>
                  <div className="dots-wrapper">
                    {cards.map((card, index) => (
                      <div
                        key={card.id}
                        className={`dot ${
                          currentIndex === index ? "active" : ""
                        }`}
                        onClick={() => handleDotClick(index)}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="SignupColl1">
              <div className="SignupRead1">
                <img className="jkl" src={logo}></img>
                <h1>Add a payment method</h1>
                <p className="zxc">
                  Let’s get you all st up so you can access your personal
                  account.
                </p>

                <div className="payInputsWrap">

                  <div className="payInputs">
                    <input type="text"></input>
                    <span>Card Number</span>
                  </div>

                  <div className="payInputs smallerones jit">
                    <input type="text"></input>
                    <span>Exp. Date</span>
                  </div>

                  <div className="payInputs smallerones">
                    <input type="text"></input>
                    <span>CVC</span>
                  </div>

                  <div className="payInputs">
                    <input type="text"></input>
                    <span>Name on Card</span>
                  </div>

                  <div className="payInputs">
                    <select>
                      <option>United States</option>
                      <option>United kingdom</option>
                      <option>state ohio</option>
                      <option>oklahoma</option>
                    </select>
                    <span>Country or Region</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPayment;
