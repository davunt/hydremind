#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

//RN push notifications
#import <UserNotifications/UNUserNotificationCenter.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate> //RN push notifications

@property (nonatomic, strong) UIWindow *window;

@end
