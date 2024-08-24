import { useState } from "react";
import { useEffect } from "react";
import HomeItem from "../componets/HomeItem";
import Loading from "../componets/Loading";

const Home = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch("https://f4085172-2852-41f4-ba97-280adf335748.mock.pstmn.io/products")
      .then((res) => res.json())
      .then((data) => setItemList(data.items));
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {!itemList.length && <Loading />}
          {itemList.map((ele) => {
            return <HomeItem key={ele.id} item={ele} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
