import { useState } from "react";
import FilterStyled from "./FilterStyled";
import { useDispatch } from "react-redux";
import { changeClassFilterActionCreator } from "../../store/extinguishers/extinguishersSlice";

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const dispatch = useDispatch();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;

    setSelectedValue(selectedOption);

    const changeClassFilterAction =
      changeClassFilterActionCreator(selectedOption);

    dispatch(changeClassFilterAction);
  };

  return (
    <FilterStyled>
      <select
        name="filter"
        id="filter"
        value={selectedValue}
        onChange={handleSelectChange}
        placeholder="Selecciona clase de extintor"
        className="filter"
      >
        <option value="" disabled>
          Selecciona clase de extintor
        </option>
        <option value="">Todas las clases</option>
        <option value="A">Clase A</option>
        <option value="B">Clase B</option>
        <option value="C">Clase C</option>
        <option value="D">Clase D</option>
        <option value="K">Clase K</option>
      </select>
    </FilterStyled>
  );
};

export default Filter;
