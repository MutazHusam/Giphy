import React, { useCallback, useEffect, useState } from "react";
import CRUDRequests from "../API";
import SearchAppBar from "../NavBar";
import { FlexBox } from "../Global.Styles";

const Home = () => {
  const [gif, setGif] = useState([]);

  const [search, setSearch] = useState("");

  const fetchData = useCallback(async () => {
    const response = await CRUDRequests.get(
      `gifs/search?api_key=K31dRjLwOjY4j6huR9laaNDMJxXHfTE1&q=${
        search || "realmadrid"
      }`
    );
    setGif([...response.data.data]);
  });
  useEffect(() => {
    setTimeout(function () {
      fetchData();
    }, 3000);
  }, [search]);
  const onChangHandler = (e) => {
    setSearch(e);
  };

  return (
    <div>
      <SearchAppBar
        handle_Change={onChangHandler}
        value={search}
        setValue={setSearch}
      />
      <FlexBox>
        {gif.map((item) => {
          return (
            <img
              key={item.images.downsized.url}
              style={{ margin: "1rem 0", maxHeight: "10rem" }}
              src={item.images.downsized.url}
              alt="s"
            />
          );
        })}
      </FlexBox>
    </div>
  );
};

export default Home;
