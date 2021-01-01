const success = (req, res, data={}) => {
  // get method and url
  res.status(200).json({ data });
};

const error = (req, res, e) => {
  if (e.status) {
    res.status(e.status).json({ error: e.error.message });
  } else {
    res.status(500).json({ error: 'An unknown error occured' });
  }
};

export default {
  success,
  error,
};
