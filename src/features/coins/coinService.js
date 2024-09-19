import axios from "axios";

const fetchCoins = async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  return res.data.coins;
};

const fetchCoin = async (id) => {
  const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return res.data;
};

const coinService = {
  fetchCoins,
  fetchCoin,
};

export default coinService;
