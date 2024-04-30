import { influencers } from "@/constatnts/examples";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useInfluencer = () => {
  const { influencerId } = useParams();
  const [influencer, setInfluencer] = useState(false);

  useEffect(() => {
    const result = influencers.find((el) => el.id === Number(influencerId));
    setInfluencer(result);

  }, [influencerId]);

  return {
    influencer,
  };
};

export default useInfluencer;
