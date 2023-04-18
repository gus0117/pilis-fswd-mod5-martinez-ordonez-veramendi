const SERVER_DOMAIN= 'https://643866984660f26eb19be700.mockapi.io/api/v1';

export const getEvents = async () => {
    try {
      const response = await fetch(`${SERVER_DOMAIN}/evento_festival`);
      return response.json();
    } catch {
      throw new Error('could not fetch');
    }
  };
  