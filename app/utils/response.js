export const respond =
  ({ status, title, message }) =>
  (entity) =>
  (res) =>
    res.status(status).send({ status, title, message, entity });

export const returnResult = (type, data) => ({ type, ...data });
