import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { $HomeApp } from "../..";

import Card from "../../../../shared/components/Card";

const CardContainer = ({ id, hidden = false }) => {
  const assets = $HomeApp.useSlice("assets");
  const asset = assets?.[id];
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    // router.push("/asset/" + id);
    navigate("/asset/" + id);
    console.log("asset clicked");
  }, [id]);

  if (!asset) return null;

  return <Card hidden={hidden} asset={asset} onClick={handleClick} />;
};

export default React.memo(CardContainer);
