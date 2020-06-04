import React from "react";
import { Chart } from "react-google-charts";

import data from "./sankey/sankey-data"

export default function Skills() {
  const colors = ['#86aec3', '#92bf6a', '#db7a79', '#dd9f4f',
                  '#aa92b6', '#dfdf79', '#005894', '#13800c'];
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
        width: 10
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
          height={'29.625rem'}
          chartType="Sankey"
          loader={<div>Loading Chart...</div>}
          options={options}
          data={data}
          onMouseOver={(data) => console.log(data)}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
}
