export default eventHandler(async () => {
  return await useDB().select().from(tables.leagues).all();
});
