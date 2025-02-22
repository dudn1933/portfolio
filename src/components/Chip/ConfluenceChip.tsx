import { styled } from 'styled-components';

const ConfluenceChip = () => {
  return (
    <Chip>
      <SkillIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <linearGradient id="~hhCEjI~ovLo7bTsUTFpDa" x1="2" x2="44" y1="34.5" y2="34.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2684ff" />
            <stop offset=".28" stopColor="#1f7bf6" />
            <stop offset=".742" stopColor="#0c62dd" />
            <stop offset=".994" stopColor="#0052cc" />
          </linearGradient>
          <path
            fill="url(#~hhCEjI~ovLo7bTsUTFpDa)"
            d="M3.589,35.049c-0.453,0.738-0.962,1.595-1.394,2.277c-0.387,0.653-0.179,1.495,0.467,1.894 l9.063,5.572c0.655,0.404,1.514,0.201,1.919-0.453c0.004-0.007,0.008-0.013,0.012-0.02c0.363-0.606,0.83-1.393,1.338-2.236 c3.59-5.92,7.201-5.196,13.713-2.089l8.986,4.269c0.695,0.331,1.527,0.036,1.858-0.659c0.006-0.012,0.012-0.025,0.017-0.037 l4.315-9.75c0.305-0.696-0.005-1.508-0.697-1.825c-1.896-0.891-5.668-2.667-9.063-4.304C21.909,21.76,11.529,22.143,3.589,35.049z"
          />
          <linearGradient id="~hhCEjI~ovLo7bTsUTFpDb" x1="4" x2="46" y1="12.5" y2="12.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0052cc" />
            <stop offset=".044" stopColor="#0255cf" />
            <stop offset=".665" stopColor="#1c77f2" />
            <stop offset="1" stopColor="#2684ff" />
          </linearGradient>
          <path
            fill="url(#~hhCEjI~ovLo7bTsUTFpDb)"
            d="M44.412,11.968c0.453-0.737,0.961-1.593,1.393-2.274c0.387-0.652,0.179-1.494-0.467-1.892 l-9.057-5.564c-0.638-0.429-1.504-0.261-1.934,0.377c-0.018,0.027-0.035,0.054-0.051,0.082c-0.362,0.605-0.829,1.391-1.338,2.233 c-3.588,5.912-7.197,5.189-13.703,2.087l-8.952-4.243c-0.695-0.33-1.526-0.035-1.857,0.658C8.441,3.444,8.435,3.456,8.429,3.469 l-4.312,9.738c-0.305,0.695,0.005,1.506,0.697,1.822c1.895,0.89,5.664,2.664,9.057,4.299C26.104,25.239,36.477,24.843,44.412,11.968 z"
          />
        </svg>
      </SkillIcon>
      <SkillTitle>Confluence</SkillTitle>
    </Chip>
  );
};

export default ConfluenceChip;

const Chip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px 8px 10px;
  gap: 0.3rem;
  background: black;
  border: 1px solid white;
  border-radius: 0.3rem;
`;

const SkillIcon = styled.svg<{ $color?: string }>`
  width: 1.2rem;
  height: 1.2rem;
  fill: none;
  color: ${({ $color }) => $color};
  stroke: ${({ $color }) => $color};
  stroke-width: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  circle {
    fill: ${({ $color }) => $color};
  }

  path {
    fill: ${({ $color }) => $color};
  }

  g {
    ellipse {
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const SkillTitle = styled.span<{ $direction?: string }>`
  font-size: 1rem;

  text-align: ${({ $direction }) => $direction};
`;
