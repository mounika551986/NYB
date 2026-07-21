import { useEffect } from "react";

function TimeCleaner() {

  useEffect(() => {

    console.log("Timer Started");

    const timer = setInterval(() => {
      console.log("Running...");
    },1000);

    return () => {
      clearInterval(timer);
      console.log("Timer Stopped");
    };

  }, []);

  return <h2>Timer Component</h2>;
}

export default TimeCleaner;