'use client'

import {
  BAR_CHART_COL_WIDTH,
  BAR_CHART_FONT_SIZE,
  BAR_CHART_GRID_OFFSET,
  BAR_CHART_HEIGHT,
  BAR_CHART_INNER_HEIGHT,
  BAR_CHART_WIDTH,
  BAR_CHART_X_LABEL_FONT_SIZE,
  BAR_CHART_X_LABEL_OFFSET,
  BAR_CHART_X_LABEL_PADDING,
  BAR_CHART_Y_INTERVAL,
  BAR_CHART_Y_LABEL_FONT_SIZE,
  BAR_CHART_Y_LABEL_OFFSET
} from '@/constants/enums'
import { TDataSet } from '@/constants/types'
import { LabelFormatterCallback } from 'echarts'
import ReactECharts, { EChartsOption } from 'echarts-for-react'

type TBarChartProps = {
  dataset: TDataSet[]
  xName: string
}
function BarChart({ dataset, xName }: TBarChartProps) {
  const option: EChartsOption = {
    /* --------------------------------------- DATA SOURCE ---------------------------------------- */
    dataset,

    /* ------------------------------------------- STYLE ------------------------------------------- */
    height: BAR_CHART_INNER_HEIGHT,
    color: ['#5e8b92'],
    textStyle: {
      fontSize: BAR_CHART_FONT_SIZE,
      fontWeight: 'bold',
      color: '#949494'
    },
    grid: {
      top: BAR_CHART_GRID_OFFSET.top,
      left: BAR_CHART_GRID_OFFSET.left,
      right: BAR_CHART_GRID_OFFSET.right
    },

    /* ------------------------------------------- X AXIS -------------------------------------------*/
    xAxis: {
      type: 'category',
      axisLabel: {
        show: false // hide x axis label, use custom formatter in series instead
      },
      name: xName,
      nameLocation: 'center',
      nameTextStyle: {
        verticalAlign: 'top',
        fontSize: BAR_CHART_X_LABEL_FONT_SIZE,
        padding: BAR_CHART_X_LABEL_PADDING
      }
    },

    /* -------------------------------------------- Y AXIS -------------------------------------------*/
    yAxis: {
      interval: BAR_CHART_Y_INTERVAL,
      type: 'value',
      axisLabel: {
        fontSize: BAR_CHART_Y_LABEL_FONT_SIZE,
        formatter: '{value}%'
      },
      offset: BAR_CHART_Y_LABEL_OFFSET
    },

    /* --------------------------------------------- SERIES ------------------------------------------- */
    series: [
      {
        type: 'bar',
        smooth: true,
        barWidth: BAR_CHART_COL_WIDTH,

        /**
         * X axis label:
         * - use series label as x axis label
         * - position: 'bottom'     => put label at the bottom of the bar's column
         * - offset: [x, y]         => set margin of the label to designated location
         * - formatter: params.name => use name as label instead of default value (log params for more details)
         */
        label: {
          color: '#949494',
          show: true,
          position: 'bottom',
          offset: BAR_CHART_X_LABEL_OFFSET,
          formatter: (params: LabelFormatterCallback) => (params.name === '100' ? '...' : params.name)
        }
      }
    ],

    /* --------------------------------------------- TOOLTIP -------------------------------------------- */
    tooltip: {
      trigger: 'axis'
    }
  }

  return <ReactECharts option={option} style={{ width: BAR_CHART_WIDTH, height: BAR_CHART_HEIGHT }} />
}

export default BarChart
