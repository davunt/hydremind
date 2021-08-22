/* eslint-disable class-methods-use-this */
import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

class NotificationHandler {
  onNotification(notification) {
    console.log('onNotification:', notification);

    if (typeof this.onNotification === 'function') {
      this.onNotification(notification);
    }
  }

  attachNotification(handler) {
    this.onNotification = handler;
  }
}

const handler = new NotificationHandler();

PushNotification.configure({
  onNotification: handler.onNotification.bind(handler),
  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   */
  requestPermissions: Platform.OS === 'ios',
});

export default handler;
