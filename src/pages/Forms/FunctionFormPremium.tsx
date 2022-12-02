import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IDisabled {
  ritualFit: boolean;
  doutorPass: boolean;
  sexyHot: boolean;
  hbomax: boolean;
}

export default function FunctionFormPremium() {
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

};
 