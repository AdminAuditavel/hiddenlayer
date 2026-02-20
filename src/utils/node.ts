export const generateNodeId = () => {
  const part = () =>
    Math.random().toString(16).substring(2, 6).toUpperCase();

  return `HL-${part()}-${part()}`;
};

export const getNodeId = () => {
  const existing = localStorage.getItem("hl-node");

  if (existing) return existing;

  const id = generateNodeId();
  localStorage.setItem("hl-node", id);

  return id;
};
