import React, { useState } from "react";

import BarsLoader from "react-loaders-kit/lib/bars/BarsLoader";

const MyWonderfulComponent = () => {
  const [loading, setLoading] = useState(true);

  const loaderProps = {
    loading,
    size: 35,
    duration: 1,
    colors: ["#5e22f0", "#f6b93b"],
  };

  return <BarsLoader {...loaderProps} />;
};
