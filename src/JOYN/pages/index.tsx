import { useRouter } from "next/router";
import { useEffect } from "react";

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  }, [router]);
  return null;
};

export default Redirect;
