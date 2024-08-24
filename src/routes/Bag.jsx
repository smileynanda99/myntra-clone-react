import BagItem from "../componets/BagItem";
import { useSelector } from "react-redux";
import Bill from "../componets/Bill";

const Bag = () => {
  const bag = useSelector((store) => store.bag);
  console.log('bag Bag: ', bag);
    return <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bag.map(ele=> {
              return  <BagItem key={ele.id} item={ele}/>
            })
          }
        </div>
        <div className="bag-summary">
           <Bill/>
        </div>

      </div>
    </main>
    </>
}

export default Bag;