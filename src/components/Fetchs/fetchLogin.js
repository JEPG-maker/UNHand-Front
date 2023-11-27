// Función para obtener un nuevo JWT usando el token de actualización
export default async function obtenerNuevoJWT(refreshToken) {
    const response = await fetch('URL_DEL_ENDPOINT_DE_ACTUALIZACIÓN', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });
  
    if (!response.ok) {
      throw new Error('No se pudo obtener un nuevo JWT');
    }
  
    const data = await response.json();
    return data.accessToken;
  }
  
