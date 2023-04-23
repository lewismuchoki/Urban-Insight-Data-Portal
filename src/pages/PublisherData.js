import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataSection from "../components/DataSection";
import Spinner from "../components/Spinner";
import { db } from "../firebase";

const UserData = ({ setActive }) => {
  const [UserDatas, setUserDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const { author } = useParams();

  const getUserDatas = async () => {
    setLoading(true);
    const DataRef = collection(db, "Datas");
    const UserDataQuery = query(DataRef, where("author", "==", author));
    const docSnapshot = await getDocs(UserDataQuery);
    let UserDatas = [];
    docSnapshot.forEach((doc) => {
      UserDatas.push({ id: doc.id, ...doc.data() });
    });
    setUserDatas(UserDatas);
    setLoading(false);
  };

  useEffect(() => {
    getUserDatas();
    setActive(null);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="Data-heading text-center py-2 mb-4">
            Publisher: <strong>{author.toLocaleUpperCase()}</strong>
          </div>
          {UserDatas?.map((item) => (
            <div className="col-md-6">
              <DataSection key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserData;
