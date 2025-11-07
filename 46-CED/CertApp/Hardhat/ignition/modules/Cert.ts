import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Cert", (m) => {
  const certi = m.contract("Cert");

  return { certi };
});
