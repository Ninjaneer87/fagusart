import { LinearProgress } from "@mui/material";
import ClientOnlyPortal from "../portals/ClientOnlyPortal";

const LoadingBar = () => (
  <ClientOnlyPortal>
    <LinearProgress className="fixed top-0 left-0 right-0 z-[1000]" />
  </ClientOnlyPortal>
);

export default LoadingBar;
