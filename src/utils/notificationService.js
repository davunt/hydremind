/* eslint-disable class-methods-use-this */
import PushNotification from 'react-native-push-notification';
import NotificationHandler from './notificationHandler';

export default class NotificationService {
  constructor(onRegister, onNotification) {
    this.createChannels();

    NotificationHandler.attachNotification(onNotification);

    // Clear badge number at start
    PushNotification.getApplicationIconBadgeNumber((number) => {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });

    PushNotification.getChannels((channels) => {
      console.log(channels);
    });
  }

  createChannels() {
    PushNotification.createChannel(
      {
        channelId: 'defaultChannel',
        channelName: 'Default channel',
      },
      (created) => console.log(`defaultChannel: '${created}'`),
    );
  }

  scheduleNotification(
    scheduledDate = new Date(Date.now() + 30 * 1000),
    title = 'Scheduled Notification',
    message = 'My Notification Message',
  ) {
    PushNotification.localNotificationSchedule({
      date: scheduledDate,

      /* Android Only Properties */
      channelId: 'defaultChannel',

      /* iOS and Android properties */
      title,
      message,
    });
  }

  checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk);
  }

  requestPermissions() {
    return PushNotification.requestPermissions();
  }

  cancelNotification(id) {
    PushNotification.cancelLocalNotifications({ id });
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }

  abandonPermissions() {
    PushNotification.abandonPermissions();
  }

  getScheduledLocalNotifications(callback) {
    PushNotification.getScheduledLocalNotifications(callback);
  }

  getDeliveredNotifications(callback) {
    PushNotification.getDeliveredNotifications(callback);
  }
}
