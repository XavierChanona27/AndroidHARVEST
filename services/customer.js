export const getActivePublications = async (offset, limit, search) => {
  try {
    if (!search) {
      const response = await fetch(
        `${process.env.API_URL}/publications/active?offset=${offset}&limit=${limit}`
      );
      const data = await response.json();
      return data;
    }

    const response = await fetch(
      `${process.env.API_URL}/publications/active?q=${search}&offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getActiveStores = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/store`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export const getPorductsByStore = async (storeId) => {
  try {
    const response = await fetch(`${process.env.API_URL}/store/inventory/batch/all/distinct/${storeId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}