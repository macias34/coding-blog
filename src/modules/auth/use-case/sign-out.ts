import { toast } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import { signOut as nextAuthSignOut } from "next-auth/react";

export const useSignOut = () => {
  return useMutation({
    mutationFn: () => nextAuthSignOut({ callbackUrl: "/dashboard/auth" }),
    onSuccess: () => {
      toast.success({ message: "You have been signed out" });
    },
    onError: () => {
      toast.error({ message: "You haven't been signed out" });
    },
  });
};
