import wsuLogo from "../../../images/wsu-logo.jpg";
import westinghouseLogo from "../../../images/westinghouse-logo.jpg";
import gtLogo from "../../../images/gt-logo.jpg";
import chaseLogo from "../../../images/chase-logo.png";

const enemyData = [
	{
		name: "Wright State",
		level: "2017",
		isIn: false,
		health: 100,
		img: wsuLogo,
		userLevel: "Student",
		learned: "Java"
	},
	{
		name: "Westinghouse",
		level: "2014",
		isIn: false,
		health: 100,
		img: westinghouseLogo,
		userLevel: "Engineer Intern",
		learned: "C++"
	},
	{
		name: "G.T.R.I.",
		level: "2015",
		isIn: false,
		health: 100,
		img: gtLogo,
		userLevel: "Student Engineer",
		learned: "JavaScript"
	},
	{
		name: "JPMorgan Chase",
		level: "2017",
		isIn: false,
		health: 100,
		img: chaseLogo,
		userLevel: "Software Engineer",
		learned: "React"
	}
];

export default enemyData;