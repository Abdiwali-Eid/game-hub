import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bf8c3935dba64b61a980cec564ce1f1c',
  },
});
