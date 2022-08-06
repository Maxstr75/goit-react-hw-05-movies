import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1024px) {
    width: 1024px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Heading = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: navy;

  text-align: left;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
  }
  @media (min-width: 1280px) {
    font-size: 34px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 700;

  text-align: left;
  margin-bottom: 20px;

  @media (min-width: 768) {
    font-size: 18px;

    margin-bottom: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 22px;

    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 80px;
  }
`;

// export const Grid = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   grid-gap: ${props => props.theme.spacing.step * 5}px;
// `;

// export const GridItem = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: ${props => props.color};

//   border: 4px solid ${({ color }) => color ?? '#fff'};
//   border-radius: ${props => props.theme.spacing.step * 4}px;
//   transition: transform 0.5s ${props => props.theme.animations.cubicBezier};

//   overflow: hidden;
//   cursor: zoom-in;

//   &:hover,
//   &:focus {
//     transform: scale(1.05);
//     box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
//   }
// `;
