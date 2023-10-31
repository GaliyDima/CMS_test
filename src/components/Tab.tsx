import React from "react";

interface TabProps {
  component: string;
}

const Tab: React.FC<TabProps> = ({ component }) => {
  const Component = React.lazy(() => import(`../${component}`));

  return (
    <React.Suspense fallback={<div>123</div>}>
      <Component />
    </React.Suspense>
  );
};

export default Tab;
