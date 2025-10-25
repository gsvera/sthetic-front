type badgeProviderProds = {
  label: string;
};

export const BadgeProvider = ({ label }: badgeProviderProds) => {
  return <div className="badge-type">{label}</div>;
};

export default BadgeProvider;
