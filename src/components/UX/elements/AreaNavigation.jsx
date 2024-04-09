import styled from "styled-components";
import { useCameraControls } from "../../../hooks/useCameraControls";

const AreaNavigation = () => {
  const areas = useCameraControls((s) => s.areas);
  const areaKeys = useCameraControls((s) => s.areaKeys);
  const BtnGoToArea = useCameraControls((s) => s.BtnGoToArea);
  return (
    <StyledNav>
      <ul className="BtnHolder">
        {areaKeys.map((key, i) => (
          <li key={`nav_${i}`} onClick={BtnGoToArea(key)}>
            {areas[key].name}
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default AreaNavigation;

const StyledNav = styled.nav`
align-self: end;
  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 0.5rem;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.5);

    & li {

      border: 2px solid black;
      padding: 0.5rem;
      background-color: rgba(255, 255, 255, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      pointer-events: auto;

    }

    & li:hover {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`;
