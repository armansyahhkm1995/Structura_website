import { useState } from "react";

export default function useFAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return { openId, toggleFAQ };
}
