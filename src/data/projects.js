import one from '../assets/one.png';
import three from '../assets/three.png';

const projects = [
	{
		id: 1,
		title: 'RARA Hotel Website ',
		description:
			'A full-fledged Hotel website where you can book hotel rooms if available, send message, compare prices, etc.',
		repoLink: 'https://github.com/cshyam1892/RARAHOTEL',
		deployLink: '',
		image: one,
		role: 'Side Project',
		weekDuration: 'Ongoing 2',
		technologies1: ['Laravel'],
		technologies2: ['MySQL']
	},
	{
		id: 2,
		title: 'TimeLog',
		description: 'A simple web application to store and calculate working hours. ',
		repoLink: 'https://github.com/cshyam1892/timelog',
		deployLink: 'https://timelogst101.herokuapp.com/',
		image: three,
		role: 'Side Project',
		weekDuration: 'Finished Working Prototype',
		technologies1: ['Laravel','jQuery', 'Tailwind CSS'],
		technologies2: ['MySQL']
	}

];

export default projects;
