import { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState(0);

  const handleAdd = () => {
    setView(view + 1);
    const trending = data.filter((item) => item.trending === true);
    if (view == trending.length - 1) {
      setView(0);
    }
  };
  const handleMinus = () => {
    setView(view - 1);
    const trending = data.filter((item) => item.trending === true);
    if (view == 0) {
      setView(trending.length - 1);
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products?populate=*`,
          {
            headers: {
              Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
            },
          },
        );

        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {loading && <span>loading...</span>}
      <div className="trending">
        <div className="trendText">
          <span>TRENDING</span>
        </div>

        {data
          .filter((item) => item.trending === true)
          .map((item) => (
            <div>
              <img
                style={{ transform: `translateX(-${view * 100}%)` }}
                src={import.meta.env.VITE_UPLOAD_URL + item.img.url}
                alt={item.title}
              />
            </div>
          ))}
        <div className="buttons">
          <button className="minus" onClick={handleMinus}>
            -
          </button>{" "}
          <button className="add" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>

      <div className="main">
        <div style={{ marginLeft: "10px" }}>
          {!loading && <h3>Catalogue</h3>}
        </div>
        <div className="productsCardItems">
          {data.map((item, index) => (
            <Card key={index} items={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
