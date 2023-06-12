import DetailPageStyled from "./DetailPageStyled";

const DetailPage = (): React.ReactElement => {
  // const {
  //   selectedExtinguisher: { brand, model, img, class: fireClasses },
  // } = useAppSelector((state) => state.extinguishersState);

  const {
    brand,
    class: fireClasses,
    description,
    disadvantages,
    fireExtinguishingAgent,
    img,
    model,
    strengths,
    usefulLife,
  } = {
    brand: "Buckeye",
    model: "13315",
    class: ["A", "B"],
    img: "https://cdn.discordapp.com/attachments/1115063176153804870/1115063327295553586/5-EXT2.5ABC_8.webp",
    description:
      "El extintor Buckeye 13315 es adecuado para incendios de Clase A y B. Es una opción versátil para hogares, oficinas y entornos comerciales.",
    disadvantages:
      "El polvo químico seco puede causar contaminación y requerir limpieza adicional después de su uso. Además, el extintor puede ser pesado y voluminoso para algunas personas.",
    strengths:
      "El extintor Buckeye 13315 tiene una capacidad de extinción efectiva para incendios comunes en hogares y oficinas. Su diseño robusto y duradero garantiza un rendimiento confiable durante su vida útil.",
    fireExtinguishingAgent: "Polvo químico seco",
    usefulLife: "12 años",
  };

  return (
    <DetailPageStyled>
      <h2 className="page-title">Detalle</h2>
      <img
        alt={`${brand} ${model} extinguisher`}
        src={img}
        width={150}
        height={300}
        className="image"
      />
      <h3>{brand}</h3>
      <h3>{model}</h3>
      <div className="fire-class-container">
        {fireClasses.map((fireClass) => (
          <span key={fireClass} className="fire-class">
            {fireClass}
          </span>
        ))}
      </div>
      <div className="info">
        <span className="info-title">Description:</span>
        <span>{description}</span>
      </div>
      <div className="info">
        <span className="info-title">Desventajas:</span>
        <span>{disadvantages}</span>
      </div>
      <div className="info">
        <span className="info-title">Fortalezas:</span>
        <span>{strengths}</span>
      </div>
      <div className="info">
        <span className="info-title">Agente extintor:</span>
        <span>{fireExtinguishingAgent}</span>
      </div>
      <div className="info">
        <span className="info-title">Vida útil:</span>
        <span>{usefulLife}</span>
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
