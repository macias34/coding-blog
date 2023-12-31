import { type NotificationData, notifications } from "@mantine/notifications";

export const toast = {
  success: (props: NotificationData) =>
    notifications.show({
      ...props,
      title: "Success",
    }),
  error: (props: NotificationData) =>
    notifications.show({
      ...props,
      title: "Something went wrong",
      color: "red",
    }),
};
