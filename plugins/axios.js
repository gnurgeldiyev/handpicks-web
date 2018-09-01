export default function ({ $axios, app, route, error, redirect }) {
  const token = app.$cookies.get('token');
  if (token) {
    $axios.setHeader('Authorization', `name=${process.env.clientName}, apiKey=${process.env.clientApiKey}, token=${token}`);
  } else {
    $axios.setHeader('Authorization', `name=${process.env.clientName}, apiKey=${process.env.clientApiKey}`);
  }

  $axios.onResponseError((err) => {
    if (route.path.indexOf("/p/") > -1) {
      const code = parseInt(err.response && err.response.status, 10);
      if (code) {
        error({ statusCode: 404, message: err.response });
      }
    }
  })
}