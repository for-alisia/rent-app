const apartsLoaded = (newAparts) => {
  return {
    type: 'APARTS_LOADED',
    payload: newAparts,
  };
};

export { apartsLoaded };
