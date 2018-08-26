export default function ({ $axios, app }) {
  const token = app.$cookies.get('token');
  if (token) {
    $axios.setHeader('Authorization', `name=${process.env.clientName}, apiKey=${process.env.clientApiKey}, token=${token}`);
  } else {
    $axios.setHeader('Authorization', `name=${process.env.clientName}, apiKey=${process.env.clientApiKey}`);
  }
}