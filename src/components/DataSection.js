import { useState, useEffect } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

const initialState = {
  adminStatus: false,
};

const DataSection = ({
  id,
  title,
  description,
  category,
  imgUrl,
  userId,
  author,
  timestamp,
  user,
  handleDelete,
  tags,
}) => {
  const [state, setState] = useState(initialState);
  const [adminStatus, setisAdmin] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        // Create a reference to the document with the specified user ID
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        // Check state of the user
        if (userDocSnapshot.data().role === "admin") {
          setisAdmin(true);
          console.log("Admin confirmed");
        } else {
          setisAdmin(false);
          console.log("Not Admin");
        }
      } catch (error) {
        console.error("Error retrieving user status: ", error);
      }
    };

    getUser();
  }, [userId]);

  return (
    <div>
      <div className="row pb-4" key={id}>
        <div className="col-md-5">
          <div className="hover-Datas-img">
            <div className="Datas-img">
              <img src={imgUrl} alt={title} />
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="text-start">
            <h6 className="category catg-color">{category}</h6>
            <span className="title py-2">{title}</span>
            <span className="meta-info">
              <p className="author">{author}</p> -&nbsp;
              {timestamp.toDate().toDateString()}
            </span>
          </div>
          <div className="short-description text-start">
            {excerpt(description, 120)}
          </div>
          <div className="tags text-start">
            {tags?.map((tag, index) => (
              <p className="tag" key={index}>
                <Link
                  to={`/tag/${tag}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {tag}
                </Link>
              </p>
            ))}
          </div>
          <Link to={`/detail/${id}`}>
            <button className="btn btn-read">Read More</button>
          </Link>

          <div>
            {/* Your other component code */}
            {(user && user.uid === userId) || adminStatus ? (
              <div style={{ float: "right" }}>
                <FontAwesome
                  name="trash"
                  style={{ margin: "15px", cursor: "pointer" }}
                  size="2x"
                  onClick={() => handleDelete(id)}
                />
                <Link to={`/update/${id}`}>
                  <FontAwesome
                    name="edit"
                    style={{ cursor: "pointer" }}
                    size="2x"
                  />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSection;
