const axios = require('axios').default;
const querystring = require('querystring');

const client_id = 'db65e1e95ff44022b4e819fc3a98d5f6';
const client_secret = 'dad50b18f041492abc2062b4914a69eb';

const DEBUG = false;

let access_token;

export const RequestSpotifyAccessToken = () => {
  //https://stackoverflow.com/questions/63417948/grant-type-parameter-is-missing-spotify-api-pkce-oauth-flow-troubles

  const headers = {
    Authorization:
      'Basic ' + (client_id + ':' + client_secret).toString('base64'),
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  let data = {
    grant_type: 'client_credentials',
    // code: data.code,
    client_id: client_id,
    client_secret: client_secret,
  };

  return axios.post(
    'https://accounts.spotify.com/api/token',
    querystring.stringify(data),
    headers
  );
};

export const SpotifySearchItem = async (query) => {
  if (!access_token) {
    var response = await RequestSpotifyAccessToken();

    if (DEBUG) {
      console.log(response);
    }
    access_token = response.data.access_token;
  }

  const headers = {
    Authorization: 'Bearer ' + access_token.toString('base64'),
    'Content-Type': 'application/json',
  };

  let data = {
    q: query,
    type: 'track,artist,album',
    include_external: 'audio',
    limit: 10,
  };

  return axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/search',
    params: data,
    headers: headers,
  });

  // axios({
  //   method: 'get',
  //   url: 'https://api.spotify.com/v1/search',
  //   params: data,
  //   headers: headers,
  // })
  //   .then((response) => {
  //     console.log(response);
  //     return response;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};
