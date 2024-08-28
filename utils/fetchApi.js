const fetchApi = async (url, callback = console.log) => {
  try {
    const res = await fetch(url);

    if (!Boolean(res.ok)) {
      throw new Error('Error peticion de recurso');
    }
    const data = await res.json();
    callback(data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = fetchApi;
