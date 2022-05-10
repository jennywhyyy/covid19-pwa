import styled from 'styled-components';
import { CardContent, Typography } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
  color: #8FA3F9;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
  color: #8095EE;
`

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
  justify-content: center;
  color: #1441B4;
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: center;
  padding: 25px;
  color: #6F88EF;
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: center;
  min-width: 150px;
  color: #5B77DB;
`