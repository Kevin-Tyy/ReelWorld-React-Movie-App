import React, { useState } from "react";
import Footer from "../components/footer/footer";
import Homes from "../components/home/Homes";
import Trending from "../components/trending/trending";
import Upcoming from "../components/Upcoming/Upcoming";
import { latest, recommended, trending, upcome } from "../DummyData";
const HomePages = () => {
  const [items, setitems] = useState(upcome);
  const [item, setitem] = useState(latest);
  const [rec, setrec] = useState(recommended);
  return (
    <div>
      <Homes />
      <Upcoming items={items} title="Upcoming movies" />
      <Upcoming items={item} title="Latest movies" />
      <Trending />
      <Upcoming items={rec} title="Recommended movies" />
      <Footer />
    </div>
  );
};

export default HomePages;
