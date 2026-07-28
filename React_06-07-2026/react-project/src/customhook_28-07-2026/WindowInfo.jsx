import useWindowResize from "../components/customhook_28-07-2026/useWindowResize";

function WindowInfo() {
  const width = useWindowResize();

  return <h2>Window Width : {width}px</h2>;
}

export default WindowInfo;