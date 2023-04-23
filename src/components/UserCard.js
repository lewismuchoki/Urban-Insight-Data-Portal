import React from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const UserCard = ({ name, id }) => {
  const approveButtonStyle = {
    borderRadius: "20px", // Set the border-radius to 20 pixels to create round edges
    backgroundColor: "#00FF00", // Set the background color to green
    color: "#000000", // Set the text color to white
    padding: "10px 20px", // Add padding to the left and right sides of the button text
    marginRight: "20px", // Add margin
    border: "none", // Remove the border around the button
    fontWeight: "bold", // Make the text inside the button bold
  };

  const declineButtonStyle = {
    borderRadius: "20px", // Set the border-radius to 20 pixels to create round edges
    backgroundColor: "#FF0000", // Set the background color to red
    color: "#fff", // Set the text color to white
    padding: "10px 20px", // Add padding to the left and right sides of the button text
    marginRight: "20px", // Add margin
    border: "none", // Remove the border around the button
    fontWeight: "bold", // Make the text inside the button bold
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleApprove = (isApproved) => {
    if (isApproved) {
      console.log("Account has been approved.");

      updateDoc(doc(db, "users", id), {
        approved: isApproved,
      });

      toast.success("User request has been approved!");
    } else {
      console.log("Account has been rejected.");

      updateDoc(doc(db, "users", id), {
        approved: isApproved,
      });

      toast.error("User request has been rejected!");
    }

    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  return (
    <div style={containerStyle} className="col-sm-2 col-lg-3 mb-5">
      <div className="related-content card text-decoration-none overflow-hidden h-100">
        <div className="related-body card-body p-4">
          <h5 className="title text-start py-2">{name}</h5>
          <div className="d-flex justify-content-between">
            <div>
              <button
                type="button"
                style={approveButtonStyle}
                onClick={() => handleApprove(true)}
              >
                Approve
              </button>

              <button
                type="button"
                style={declineButtonStyle}
                onClick={() => handleApprove(false)}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
