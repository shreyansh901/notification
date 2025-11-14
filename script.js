document.addEventListener('DOMContentLoaded', () => {
  const markAllBtn = document.querySelector('.mark-all-button');
  const counter = document.querySelector('.notifications-counter');
  const notifications = document.querySelectorAll('.notification.new-notification');
  const privateMessageNotifications = document.querySelectorAll('.has-private-message');

  // Mark all as read
  markAllBtn.addEventListener('click', () => {
    notifications.forEach(notif => {
      notif.classList.remove('new-notification');
    });
    document.querySelectorAll('.notification-dot').forEach(dot => {
      dot.style.display = 'none';
    });
    counter.textContent = '0';
  });

  // Toggle private message on click
  privateMessageNotifications.forEach(notif => {
    notif.addEventListener('click', () => {
      const message = notif.querySelector('.notification-text-private-message');
      if (message) {
        message.style.display = message.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  // Optional: Click anywhere else to close private message
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-private-message')) {
      document.querySelectorAll('.notification-text-private-message').forEach(msg => {
        msg.style.display = 'none';
      });
    }
  });
});