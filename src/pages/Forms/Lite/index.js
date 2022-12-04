import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// @ts-ignore
import emailjs from "@emailjs/browser";

// import "./FunctionFormPremium";
import premium1 from "../../../Img/iconApps/premium1.png";
import premium2 from "../../../Img/iconApps/premium2.png";
import premium3 from "../../../Img/iconApps/premium3.png";
import premium4 from "../../../Img/iconApps/premium4.png";
import standard1 from "../../../Img/iconApps/standard1.png";
import standard2 from "../../../Img/iconApps/standard2.png";
import standard3 from "../../../Img/iconApps/standard3.jpg";
import standard4 from "../../../Img/iconApps/standard4.png";
import standard5 from "../../../Img/iconApps/standard5.png";
import standard6 from "../../../Img/iconApps/standard6.jpg";
import standard7 from "../../../Img/iconApps/standard7.png";
import standard8 from "../../../Img/iconApps/standard8.png";
import standard9 from "../../../Img/iconApps/standard9.png";
import standard10 from "../../../Img/iconApps/standard10.png";
import standard11 from "../../../Img/iconApps/standard11.png";
import standard12 from "../../../Img/iconApps/standard12.png";
import standard13 from "../../../Img/iconApps/standard13.png";
import standard14 from "../../../Img/iconApps/standard14.png";
import standard15 from "../../../Img/iconApps/standard15.png";
import standard16 from "../../../Img/iconApps/standard16.png";

const premiumApps = ["ritualFit", "doutorPass", "sexyHot", "hbomax"];
const standardApps = ['Estadio TNT','Hube','Fluid','Deezer','Super Comics','Maia','Ubook','Looke','Playkids','Clube de Ciências','Fuze Forge','Galinha Pintadinha','Pocoyo','Tap Lingo','Tô aqui','Reforça']

export default function Lite() {
  // Apps Premium
  const [selectedAppsPremium, setSelectedAppsPremium] = useState([]);
  const [ritualFitDisabled, setRitualFitDisabled] = useState(false);
  const [doutorPassDisabled, setDoutorPassDisabled] = useState(false);
  const [sexyHotDisabled, setSexyHotDisabled] = useState(false);
  const [hbomaxDisabled, setHboMaxDisabled] = useState(false);

  // Apps Standars
  const [selectedAppsStandard, setSelectedAppsStandard] = useState([]);
  const [estadioTNT, setEstadioTnt] = useState(false);
  const [hube, setHube] = useState(false);
  const [fluid, setFluid] = useState(false);
  const [deezer, setDeezer] = useState(false);
  const [superComics, setSuperComics] = useState(false);
  const [maia, setMaia] = useState(false);
  const [ubook, setUbook] = useState(false);
  const [looke, setLooke] = useState(false);
  const [playkids, setPlaykids] = useState(false);
  const [clubeDeCiencias, setClubeDeCiencias] = useState(false);
  const [fuzeForge, setFuzeForge] = useState(false);
  const [galinhaPintadinha, setGalinhaPintadinha] = useState(false);
  const [pocoyo, setPocoyo] = useState(false);
  const [tapLingo, setTapLingo] = useState(false);
  const [toAqui, setToAqui] = useState(false);
  const [reforca, setReforca] = useState(false);

  const { register, handleSubmit, getValues } = useForm();

  const handleSelectApps = (e) => {
    if (e.target.checked === true) {
      // @ts-ignore
      setSelectedAppsPremium([...selectedAppsPremium, e.target.name]);
    } else {
      const removeApp = selectedAppsPremium.filter(
        // @ts-ignore
        (app) => app !== e.target.name
      );
      // @ts-ignore
      setSelectedAppsPremium(removeApp);
    }
  };

  const handleSelectAppsStandard = (e) => {
    if (e.target.checked === true) {
      // @ts-ignore
      setSelectedAppsStandard([...selectedAppsStandard, e.target.name]);
    } else {
      const removeApp = selectedAppsStandard.filter(
        // @ts-ignore
        (app) => app !== e.target.name
      );
      // @ts-ignore
      setSelectedAppsStandard(removeApp);
    }
  };

  const handlePremiumAppsDisabled = (app) => {
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
      default:
        return "";
    }
  };

   const handleStandardAppsDisabled = (apps) => {
     switch (apps) {
       case "estadioTNT":
         setEstadioTnt(true);
         break;
       case "Hube":
         setHube(true);
         break;
       case "Fluid":
         setFluid(true);
         break;
       case apps.includes("Deezer"):
         setDeezer(true);
         break;
       case "Super Comics":
         setSuperComics(true);
         break;
       case "Maia":
         setMaia(true);
         break;
       case "Ubook":
         setUbook(true);
         break;
       case "Looke":
         setLooke(true);
         break;
       case "Playkids":
         setPlaykids(true);
         break;
       case "Clube de Ciências":
         setClubeDeCiencias(true);
         break;
       case "Fuze Forge":
         setFuzeForge(true);
         break;
       case "Galinha Pintadinha":
         setGalinhaPintadinha(true);
         break;
       case "Pocoyo":
         setPocoyo(true);
         break;
       case "Lingo":
         setTapLingo(true);
         break;
       case "Tô aqui":
         setToAqui(true);
         break;
       case "Reforça":
         setReforca(true);
         break;
       default:
         return "";
     }
   };

  const clearDisabled = () => {
    setRitualFitDisabled(false);
    setDoutorPassDisabled(false);
    setSexyHotDisabled(false);
    setHboMaxDisabled(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    const formValues = getValues();
    const userData = `
        Dados para o cadastro:
        Nome Completo: ${formValues.NOME},
        CPF: ${formValues.CPF},
        RG: ${formValues.RG},
        Data de Nascimento: ${formValues.NASCIMENTO},
        Cep: ${formValues.CEP},
        Bairro: ${formValues.Bairro},
        Endereço Completo: ${formValues.Endereco},
        Moradia: ${formValues.Moradia},
        Whatsapp01: ${formValues.Whatsapp01},
        Whatsapp02: ${formValues.Whatsapp02},
        Email: ${formValues.Email},
        Plano Contratado: ${formValues.PLANO},
        Telefone Fixo Netsim: ${formValues.Fixo},
        Data de Vencimento: ${formValues.Vencimento},
        Nome Completo da Indicação: ${formValues.Indicacao},
        AppStandards: ${formValues.AppStandards},
        Confirmação: ${formValues.Confirmação},
        Apps Premium: ${selectedAppsPremium},
        Apps Standard: ${selectedAppsStandard},
    `;

    console.log(userData);

    const templateParams = {
      from_name: "NATANAEL TESTE",
      message: userData,
    };

    console.log(templateParams);

    // emailjs
    //   .send(
    //     "service_au350rb",
    //     "template_oh38moq",
    //     templateParams,
    //     "lTUpdEC1irtwxkpEq"
    //   )
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     function (error) {
    //       console.log("FAILED...", error);
    //     }
    //   );
  }

  let url =
    "https://api.whatsapp.com/send?phone=556120993434&text=Eu %0A" +
    getValues("NOME") +
    "%0A de CPF %0A" +
    getValues("CPF") +
    "%0A já enviei os dados para assinatura do %0A" +
    getValues("PLANO") +
    ". %0A Declaro que li e concordo com os termos e condições de serviços da contratada NETSIM PROVEDOR DE SISTEMA DE INTEGRAÇÃO A MIDIA - LTDA de CNPJ 18.156.287/0001-09. %0A";

  const sendWhatsapp = () => {
    window.open(url);
  };

  useEffect(() => {
    if (selectedAppsPremium.length === 3) {
      let [notSelectPlan] = premiumApps.filter(
        // @ts-ignore
        (app) => !selectedAppsPremium.includes(app)
      );
      handlePremiumAppsDisabled(notSelectPlan);
    } else {
      clearDisabled();
    }
  }, [selectedAppsPremium]);

  useEffect(() => {
    if (selectedAppsStandard.length === 3) {
      let notSelectPlan = standardApps.filter(
        // @ts-ignore
        (app) => !selectedAppsStandard.includes(app)
      );

      console.log('notSelectPlan', notSelectPlan);
      handleStandardAppsDisabled(notSelectPlan);
    } else {
      clearDisabled();
    }
  }, [selectedAppsStandard]);
  return (
    <div className="container">
      <h1>
        Preencha com os dados necessarios para finalização da sua assinatura de
        internet
      </h1>
      <form
        className="row g-3 mt-5"
        id="formDados"
        onSubmit={sendEmail}
        onSubmitCapture={handleSubmit(sendWhatsapp)}
      >
        {/* ################### Etapa 01 ################################### */}

        <h4>Dados pessoais - 1 Etapa</h4>
        <span className="divider-orange mb-3" />

        <div className="mb-3 form-floating">
          <input type="text" className="form-control" {...register("NOME")} />
          <label className="fw-bold">Nome completo:</label>
        </div>
        <div className="col-md-4 mb-3 form-floating">
          <input type="cpf" className="form-control" {...register("CPF")} />
          <label className="fw-bold">CPF:</label>
        </div>
        <div className="col-md-4 mb-3 form-floating">
          <input type="RG" className="form-control" {...register("RG")} />
          <label className="fw-bold">RG:</label>
        </div>
        <div className="col-md-4 mb-3 form-floating">
          <input
            type="date"
            id="date"
            className="form-control"
            {...register("NASCIMENTO")}
          />
          <label className="fw-bold">Data de Nascimento:</label>
        </div>
        <div className="col-md-4 mb-3 form-floating">
          <input
            type="text"
            id="date"
            className="form-control"
            {...register("CEP")}
          />
          <label className="fw-bold">CEP:</label>
        </div>
        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            {...register("Bairro", { required: true })}
          >
            <option value="" selected>
              Escolha seu bairro...
            </option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
        </div>
        <div className="col-md-4 mb-3 form-floating">
          <input
            type="text"
            id="date"
            className="form-control"
            {...register("Endereco")}
          />
          <label className="fw-bold">Endereço completo:</label>
        </div>

        <div className="container my-3">
          <label className="d-flex fw-bold mb-2">Moradia:</label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio1"
              value="Casa Própria"
              {...register("Moradia")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Casa Própria
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio2"
              value="Casa Alugada"
              {...register("Moradia")}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Casa Alugada
            </label>
          </div>
        </div>

        <div className="col-md-6 mb-3 form-floating">
          <input
            type="tel"
            id="zap02"
            className="form-control"
            {...register("Whatsapp01")}
          />
          <label className="fw-bold">Whatsapp 01:</label>
        </div>
        <div className="col-md-6 mb-3 form-floating">
          <input
            type="tel"
            id="zap01"
            className="form-control"
            min="11"
            max="11"
            {...register("Whatsapp02")}
          />
          <label className="fw-bold">Whatsapp 02:</label>
        </div>
        <div className="col mb-3 form-floating">
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("Email")}
          />
          <label className="fw-bold">E-mail:</label>
          <div className="form-text">
            Esse email será utilizado para acessar todos os paineis do cliente e
            acessar os aplicativos escolhidos.{" "}
          </div>
        </div>

        {/* ################### Etapa 02 ################################### */}

        <h4>Dados do Plano - 2 Etapa</h4>
        <span className="divider-orange mb-3" />

        <div className="mb-3">
          <label className="form-label fw-bold">Plano Contratado:</label>
          <input
            type="text"
            className="form-control"
            value="Plano Lite R$ 99,90"
            {...register("PLANO")}
            readOnly
          />
        </div>

        <div className="container">
          <label className="d-flex fw-bold mb-2">
            Telefone Fixo Netsim (Opcional):
          </label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio1"
              value="Sim"
              {...register("Fixo")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Sim
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio2"
              value="Não"
              {...register("Fixo")}
              checked
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Não
            </label>
          </div>
        </div>

        <div className="container">
          <label className="d-flex fw-bold mb-2">Data de Vencimento:</label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio1"
              value="Dia 10"
              {...register("Vencimento")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Dia 10
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio2"
              value="Dia 15"
              {...register("Vencimento")}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Dia 15
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input p-2"
              type="radio"
              id="inlineRadio3"
              value="Dia 25"
              {...register("Vencimento")}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Dia 25
            </label>
          </div>
        </div>

        <div className="col mb-3 form-floating">
          <input
            type="text"
            id="date"
            className="form-control"
            {...register("Indicacao")}
          />
          <label className="fw-bold">Nome completo da Indicação:</label>
          <div className="form-text">
            O cliente que fez a indicação ganhará na sua próxima fatura de
            internet um desconto de R$ 50 reais.
          </div>
        </div>

        <div className="form-group mb-3">
          <h5 className="mb-0">Monte seu pacote de aplicativos:</h5>
          <div className="row">
            <div className="col-sm-1 form-text">Stantadar: 03</div>
            <div className="col-sm-1 form-text mb-3">Premium: 03</div>
          </div>

          {/* ################### Aplicativos Premium ################################### */}
          <div className="container shadow p-3">
            <label className="form-label fw-bold ">Aplicativos Premium</label>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
              <div className="col my-1">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value="Ritual fit"
                    role="switch"
                    id="CheckRitualfit"
                    {...register("ritualFit")}
                    onChange={handleSelectApps}
                    disabled={ritualFitDisabled}
                  />
                  <label className="form-check-label" htmlFor="CheckRitualfit">
                    <img
                      src={premium1}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt="/"
                    />{" "}
                    Ritual Fit
                  </label>
                </div>
              </div>
              <div className="col my-1">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Doutor pass"
                    role="switch"
                    id="CheckDoutorPass"
                    {...register("doutorPass")}
                    onChange={handleSelectApps}
                    disabled={doutorPassDisabled}
                  />
                  <label className="form-check-label" htmlFor="CheckDoutorPass">
                    <img
                      src={premium2}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt="/"
                    />{" "}
                    Doutor pass
                  </label>
                </div>
              </div>
              <div className="col my-1">
                <div className=" form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Sex Hot"
                    role="switch"
                    id="CheckSexHot"
                    {...register("sexyHot")}
                    onChange={handleSelectApps}
                    disabled={sexyHotDisabled}
                  />
                  <label className="form-check-label" htmlFor="CheckSexHot">
                    <img
                      src={premium3}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />{" "}
                    Sex Hot
                  </label>
                </div>
              </div>
              <div className="col my-1">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="HBO Max"
                    role="switch"
                    id="CheckHboMax"
                    {...register("hbomax")}
                    onChange={handleSelectApps}
                    disabled={hbomaxDisabled}
                  />
                  <label className="form-check-label" htmlFor="CheckHboMax">
                    <img
                      src={premium4}
                      height={36}
                      width={36}
                      className="ms-2"
                      alt=""
                    />{" "}
                    HBO Max
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* ################### Aplicativos Standarda ################################### */}

          <div className="container shadow p-3">
            <label className="form-label fw-bold ">Aplicativos Premium</label>
            <div className="row  row-cols-2 row-cols-sm-3 row-cols-md-4">
              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard1}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="CheckEstadioTnt"
                    {...register("Estadio TNT")}
                    onChange={handleSelectAppsStandard}
                    disabled={estadioTNT}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckEstadioTnt"
                  >
                    {" "}
                    Estádio TNT
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard2}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Hube"
                    role="switch"
                    id="CheckHube"
                    {...register("Hube")}
                    onChange={handleSelectAppsStandard}
                    disabled={hube}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckHube"
                  >
                    {" "}
                    Hube
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className=" form-check form-switch">
                  <img
                    src={standard3}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="fluid"
                    role="switch"
                    id="CheckFluid"
                    {...register("Fluid")}
                    onChange={handleSelectAppsStandard}
                    disabled={fluid}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckFluid"
                  >
                    {" "}
                    fluid
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard4}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Deezer"
                    role="switch"
                    id="CheckDeezer"
                    {...register("Deezer")}
                    onChange={handleSelectAppsStandard}
                    disabled={deezer}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckDeezer"
                  >
                    {" "}
                    Deezer
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard5}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Super Comics"
                    role="switch"
                    id="CheckSuperComics"
                    {...register("Super Comics")}
                    onChange={handleSelectAppsStandard}
                    disabled={superComics}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckSuperComics"
                  >
                    {" "}
                    Super Comics
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard6}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Maia"
                    role="switch"
                    id="CheckMaia"
                    {...register("Maia")}
                    onChange={handleSelectAppsStandard}
                    disabled={maia}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckMaia"
                  >
                    {" "}
                    Maia
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard7}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Ubook"
                    role="switch"
                    id="CheckUbook"
                    {...register("Ubook")}
                    onChange={handleSelectAppsStandard}
                    disabled={ubook}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckUbook"
                  >
                    {" "}
                    Ubook
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard8}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Looke"
                    role="switch"
                    id="CheckLooke"
                    {...register("Looke")}
                    onChange={handleSelectAppsStandard}
                    disabled={looke}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckLooke"
                  >
                    {" "}
                    Looke
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard9}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Playkids"
                    role="switch"
                    id="CheckPlaykids"
                    {...register("Playkids")}
                    onChange={handleSelectAppsStandard}
                    disabled={playkids}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckPlaykids"
                  >
                    {" "}
                    Playkids
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Clube de Ciências"
                    role="switch"
                    id="CheckCluberDeCiencias"
                    {...register("Clube de Ciências")}
                    onChange={handleSelectAppsStandard}
                    disabled={clubeDeCiencias}
                  />
                  <img
                    src={standard10}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckCluberDeCiencias"
                  >
                    Clube de Ciências
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard11}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Fuze Forge"
                    role="switch"
                    id="CheckFuzeForge"
                    {...register("Fuze Forge")}
                    onChange={handleSelectAppsStandard}
                    disabled={fuzeForge}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckFuzeForge"
                  >
                    {" "}
                    Fuze Forge
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard12}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Galinha Pintadinha"
                    role="switch"
                    id="CheckGalinhaPintadinha"
                    {...register("Galinha Pintadinha")}
                    onChange={handleSelectAppsStandard}
                    disabled={galinhaPintadinha}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckGalinhaPintadinha"
                  >
                    {" "}
                    Galinha Pintadinha
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard13}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Pocoyo"
                    role="switch"
                    id="CheckPocoyo"
                    {...register("Pocoyo")}
                    onChange={handleSelectAppsStandard}
                    disabled={pocoyo}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckPocoyo"
                  >
                    {" "}
                    Pocoyo
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard14}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Tap Lingo"
                    role="switch"
                    id="CheckTapLingo"
                    {...register("Tap Lingo")}
                    onChange={handleSelectAppsStandard}
                    disabled={tapLingo}
                  />
                  <label className="form-check-label" htmlFor="CheckTapLingo">
                    Tap Lingo
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard15}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt=""
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Tô aqui"
                    role="switch"
                    id="CheckToAqui"
                    {...register("Tô aqui")}
                    onChange={handleSelectAppsStandard}
                    disabled={toAqui}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckToAqui"
                  >
                    {" "}
                    Tô aqui
                  </label>
                </div>
              </div>

              <div className="col my-1">
                <div className="form-check form-switch">
                  <img
                    src={standard16}
                    height={36}
                    width={36}
                    className="ms-2"
                    alt="/"
                  />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Reforça"
                    role="switch"
                    id="CheckRefoca"
                    {...register("Reforça")}
                    onChange={handleSelectAppsStandard}
                    disabled={reforca}
                  />
                  <label
                    className="form-check-label text-wrap"
                    htmlFor="CheckRefoca"
                  >
                    {" "}
                    Reforça
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="fs-4 mt-5 mb-3 fw-bold">Termos e condições</h4>
            <div className="card bg-light p-3">
              {" "}
              CONFIRMO esta etapa de contratação dos serviços da contratada
              NETSIM PROVEDOR DE SISTEMA DE INTEGRAÇÃO A MIDIA - LTDA de CNPJ
              18.156.287/0001-09 e tenho total ciência do contrato de fidelidade
              de 12 meses deixando a taxa de adesão de R$ 500,00 isenta mediante
              a fidelidade. Estou ciente que a empresa tem um prazo para
              instalação de até 48H. Meu CPF poderá passar por uma análise antes
              da aprovação do contrato. Todos os dados fornecidos estão seguros
              e são de inteira responsabilidade da Netsim Telecom.
            </div>
            <div className="form-check">
              <label
                className="form-check-label mt-1 ms-2"
                htmlFor="defaultCheck1"
              >
                <input
                  className="form-check-input p-2"
                  type="checkbox"
                  value="Declaro que li e concordo com os termos e serviços."
                  id="defaultCheck1"
                  {...register("Confirmação", { required: true })}
                />
                <b>
                  Declaro que li e concordo com os termos e condições de
                  serviços em{" "}
                  <a href="https://netsimtelecom.com.br">
                    https://netsimtelecom.com.br.
                  </a>
                </b>
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-lg btn-success mb-4">
          Assinar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-whatsapp ms-2"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
