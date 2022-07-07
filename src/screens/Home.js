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
    fetchData();
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
      {gif.length > 0 ? (
        <FlexBox>
          {gif.map((ele) => {
            return (
              <img
                style={{ margin: "1rem 0", maxHeight: "10rem" }}
                src={ele.images.downsized.url}
                alt= "s"
              />
            );
          })}
        </FlexBox>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
