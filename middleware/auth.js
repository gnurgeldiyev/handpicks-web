export default function(context) {
  const token = context.app.$cookies.get('token');
  if (context.store.getters['manager/getToken'] !== token) {
    context.redirect('/@handpicks/login');
  }
}