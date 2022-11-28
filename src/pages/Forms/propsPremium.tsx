import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IDisabled {
  ritualFit: boolean;
  doutorPass: boolean;
  sexyHot: boolean;
  hbomax: boolean;
}

function App() {
  const [selectedAppsPremium, setSelectedApps] = useState<string[]>([]);
  
  const [ritualFitDisabled, setRitualFitDisabled] = useState(false);
  const [doutorPassDisabled, setDoutorPassDisabled] = useState(false);
  const [sexyHotDisabled, setSexyHotDisabled] = useState(false);
  const [hbomaxDisabled, setHboMaxDisabled] = useState(false);

  const premiumApps = ["ritualFit", "doutorPass", "sexyHot", "hbomax"];
  
  const { register} = useForm();

  const handleSelectApps = ({target}: any) => {
    if (target.checked === true) {
      setSelectedApps([...selectedAppsPremium, target.name]);
    } else {
      const removeApp = selectedAppsPremium.filter((app) => app !== target.name);
      setSelectedApps(removeApp);
    }
  };

  const handlePremiumAppsDisabled = (app: string) => {
    switch (app) {
      case "ritualFit":
        setRitualFitDisabled(true);
        break;
      case "doutorPass":
        setDoutorPassDisabled(true);
        break;
      case "sexyHot":
        setSexyHotDisabled(true);
        break;
      case "hbomax":
        setHboMaxDisabled(true);
        break;
    }
  }

  const clearDisabled = () => {
    setRitualFitDisabled(false);
    setDoutorPassDisabled(false);
    setSexyHotDisabled(false);
    setHboMaxDisabled(false);
  }


  useEffect(() => {
    if (selectedAppsPremium.length === 3) {
      let [notSelectPlan] = premiumApps.filter((app) => !selectedAppsPremium.includes(app));
      handlePremiumAppsDisabled(notSelectPlan);
    } else {
      clearDisabled()
    }
  }, [selectedAppsPremium]);

  return (
    <>
      <h1>Monte seu pacote</h1>
      <p>Apps selecionados: {selectedAppsPremium.length}</p>
      <input
        {...register("ritualFit")}
        type="checkbox"
        onChange={handleSelectApps}
        disabled={ritualFitDisabled}
      />{" "}
      ritualFit
      <input
        {...register("doutorPass")}
        type="checkbox"
        onChange={handleSelectApps}
        disabled={doutorPassDisabled}
      />{" "}
      doutorPass
      <input
        {...register("sexyHot")}
        type="checkbox"
        onChange={handleSelectApps}
        disabled={sexyHotDisabled}
      />{" "}
      sexyHot
      <input
        {...register("hbomax")}
        type="checkbox"
        onChange={handleSelectApps}
        disabled={hbomaxDisabled}
      />{" "}
      hbomax
    </>
  );
}

export default App;