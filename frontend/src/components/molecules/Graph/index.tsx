import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { theme } from '../../../theme';
import { BaseStyle, ChangeDataContainer, MainContainer } from './style';
import IconComponent from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import { CustomLegend } from '../../../utils/functions';

interface IGraphProps {
  data: object[];
  multiple: boolean;
  baseDataKey: string;
  firstDataKey: string;
  secondDataKey?: string;
  firstColor: string;
  secondColor?: string;
  sx?: object;
  src?: string;
  alt?: string;
  changeData?: string;
  height: number;
}

const Graph = ({
  data,
  multiple,
  baseDataKey,
  firstDataKey,
  secondDataKey,
  firstColor,
  secondColor,
  sx,
  src,
  alt,
  changeData,
  height
}: IGraphProps) => {
  return (
    <MainContainer>
      {!multiple && (
        <ChangeDataContainer container>
          <IconComponent src={src} alt={alt} />
          <TypographyComponent variant={'caption2'} color={firstColor}>
            {changeData}
          </TypographyComponent>
        </ChangeDataContainer>
      )}

      <ResponsiveContainer width={'100%'} height={height}>
        <AreaChart {...sx} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={firstColor} stopOpacity={0.1} />
              <stop offset="95%" stopColor={firstColor} stopOpacity={0} />
            </linearGradient>
            {multiple && (
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={secondColor} stopOpacity={0.1} />
                <stop offset="95%" stopColor={secondColor} stopOpacity={0.1} />
              </linearGradient>
            )}
          </defs>

          {multiple && (
            <>
              <CartesianGrid vertical={false} stroke={theme.palette.gray[300]} />
              <XAxis
                dataKey={baseDataKey}
                style={BaseStyle}
                color={theme.palette.textColor.lowEmp}
              />
              <Legend content={<CustomLegend />} verticalAlign="top" height={36} align="right" />
            </>
          )}
          <Tooltip />
          <Area
            type="monotone"
            dataKey={firstDataKey}
            stroke={firstColor}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          {secondDataKey && (
            <Area
              type="monotone"
              dataKey={secondDataKey}
              stroke={secondColor}
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </MainContainer>
  );
};

export default Graph;
