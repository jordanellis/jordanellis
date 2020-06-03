import React from "react";
import { Chart } from "react-google-charts";

import data from "./sankey/sankey-data"

export default function Skills() {
  const colors = ['#96bed3', '#a2cf7a', '#eb8a89', '#edaf5f',
                  '#baa2c6', '#efef89', '#0f68a4', '#23901c'];
  const options = {
    tooltip: {
      isHtml: true,
      textStyle: {
        fontName: 'Press Start 2P',
        fontSize: 10
      }
    },  
    sankey: {
      node: {
        label: {
          fontName: 'Press Start 2P',
          fontSize: 8
        },
        colors: colors,
        width: 5
      },
      link: {
        colorMode: 'gradient',
        colors: colors
      }
    },
  };

  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Skills</p>
      <div className="sankey-chart">
        <Chart
          width="100%"
          height={'400px'}
          chartType="Sankey"
          loader={<div>Loading Chart...</div>}
          options={options}
          data={data}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
}
