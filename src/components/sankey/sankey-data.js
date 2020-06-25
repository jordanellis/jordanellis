const columns = [
      { type: 'string', label: 'Company' },
      { type: 'string', label: 'Skill' },
      { type: 'number', label: 'Years Used' },
      { type: 'string', role: 'tooltip', 'p': {'html': true} }
    ]
const rows = [
        ['This Project', 'JavaScript', 1, 'Used JavaScript for 1 yr on this project'],
        ['This Project', 'React', 1, 'Used React for 1 yr on this project'],
        ['JPMorgan Chase & Co - CTO', 'Java', 1, 'Used Java for 1 yr at JPMC'],
        ['JPMorgan Chase & Co - CTO', 'JavaScript', 1, 'Used JavaScript for 1 yr at JPMC'],
        ['JPMorgan Chase & Co - CTO', 'TypeScript', 1, 'Used TypeScript for 1 yr at JPMC'],
        ['JPMorgan Chase & Co - CTO', 'React', 2, 'Used React for 2 yrs at JPMC'],
        ['JPMorgan Chase & Co - CTO', 'Angular', 1, 'Used Angular for 1 yr at JPMC'],
        ['JPMorgan Chase & Co - CTO', 'AWS Cloud Formation', 1, 'Used AWS for 1 yr at JPMC'],
        ['JPMorgan Chase & Co - CTO', 'Pivotal Cloud Foundry', 1, 'Used PCF for 1 yr at JPMC'],
        ['JPMorgan Chase & Co - CTO', 'Git', 1, 'Used Git for 1 yr at JPMC'],
        ['JPMorgan Chase & Co - CTO', 'Node.js', 1, 'Used Node for 1 yr at JPMC'],
        ['JPMorgan Chase & Co - CTO', 'Spring', 1, 'Used Spring for 1 yr at JPMC'],
        ['JPMorgan Chase & Co - CIB', 'Java', 2, 'Used Java for 2 yrs at JPMorgan'],
        ['JPMorgan Chase & Co - CIB', 'JavaScript', 2, 'Used JavaScript for 2 yrs at JPMorgan'],
        ['JPMorgan Chase & Co - CIB', 'SQL', 2, 'Used SQL for 2 yrs at JPMorgan'],
        ['JPMorgan Chase & Co - CIB', 'EmberJS', 2, 'Used EmberJS for 2 yrs at JPMorgan'],
        ['JPMorgan Chase & Co - CIB', 'Git', 2, 'Used Git for 2 yrs at JPMorgan'],
        ['JPMorgan Chase & Co - CIB', 'Node.js', 2, 'Used Node for 2 yrs at JPMorgan'],
        ['JPMorgan Chase & Co - CIB', 'Spring', 2, 'Used Spring for 2 yrs at JPMorgan'],
        ['Georgia Tech Research Institute', 'Java', 1, 'Used Java for 1 yr at GTRI'],
        ['Georgia Tech Research Institute', 'MATLAB', 1, 'Used MATLAB for 1 yr at GTRI'],
        ['Georgia Tech Research Institute', 'Git', 1, 'Used Git for 1 yr at GTRI'],
        ['Georgia Tech Research Institute', 'Python', 1, 'Used Python for 1 yr at GTRI'],
        ['Westinghouse Electric Company', 'C++', 1, 'Used C++ for 1 yr at WEC'],
        ['Westinghouse Electric Company', 'Git', 1, 'Used Git for 1 yr at WEC'],
        ['Wright State University', 'Java', 3, 'Used Java for 3 yrs at WSU'],
        ['Wright State University', 'Python', 1, 'Used Python for 1 yr at WSU'],
        ['Wright State University', 'SQL', 1, 'Used SQL for 1 yr at WSU'],
        ['Wright State University', 'JavaScript', 1, 'Used JavaScript for 1 yr at WSU'],
        ['Wright State University', 'C++', 2, 'Used C++ for 2 yrs at WSU']
      ];
const data = [columns, ...rows];

export default data;