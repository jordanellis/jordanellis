import React from "react";
import { Chart } from "react-google-charts";

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

  const columns = [
      { type: 'string', label: 'Company' },
      { type: 'string', label: 'Skill' },
      { type: 'number', label: 'Years Used' },
      { type: 'string', role: 'tooltip', 'p': {'html': true} }
    ]

  const rows = [
            ['JP Morgan Chase & Co. - CTO', 'Java', 1, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'JavaScript', 1, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'TypeScript', 1, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'React', 2, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'Angular', 1, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'SQL', 1, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'AWS Cloud Formation', 1, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'Pivotal Cloud Foundry', 1, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'Git', 1, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'Node.js', 1, 'test'],
            ['JP Morgan Chase & Co. - CTO', 'Spring', 1, 'test'],
            ['JP Morgan Chase & Co. - CIB', 'Java', 2, 'test'],
            ['JP Morgan Chase & Co. - CIB', 'JavaScript', 2, 'test'],
            ['JP Morgan Chase & Co. - CIB', 'SQL', 2, 'test'],
            ['JP Morgan Chase & Co. - CIB', 'EmberJS', 2, 'test'],
            ['JP Morgan Chase & Co. - CIB', 'Git', 2, 'test'],
            ['JP Morgan Chase & Co. - CIB', 'Node.js', 2, 'test'],
            ['JP Morgan Chase & Co. - CIB', 'Spring', 2, 'test'],
            ['Georgia Tech Research Institute', 'Java', 1, 'test'],
            ['Georgia Tech Research Institute', 'MATLAB', 1, 'test'],
            ['Georgia Tech Research Institute', 'Git', 1, 'test'],
            ['Georgia Tech Research Institute', 'Python', 1, 'test'],
            ['Westinghouse Electric Company', 'C++', 1, 'test'],
            ['Westinghouse Electric Company', 'Git', 1, 'test'],
            ['Wright State University', 'Java', 2, 'test'],
            ['Wright State University', 'Python', 1, 'test'],
            ['Wright State University', 'SQL', 1, 'test'],
            ['Wright State University', 'JavaScript', 1, 'test'],
            ['Wright State University', 'C++', 1, 'test']
          ];
  const data = [columns, ...rows];
  console.log(data);

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
