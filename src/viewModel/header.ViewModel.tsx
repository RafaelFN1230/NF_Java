"use client";
import { useRouter } from "next/navigation";

export default function HeaderViewModel() {
  const router = useRouter();

  const NavigateTo = (route: string) => {
    router.push(route);
  };

  return {
    NavigateTo,
  };
}
