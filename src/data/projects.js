import one from '../assets/one.png';
import two from '../assets/two.png';

const projects = [
	{
		id: 1,
		title: 'RARA Hotel Website ',
		description:
			'A full-fledged Hotel website where you can book hotel rooms if available, send message, compare prices, etc.',
		repoLink: 'https://github.com/cshyam1892/RARAHOTEL',
		deployLink: 'https://000webhost.com/',
		image: one,
		role: 'Hobby Project',
		weekDuration: 'Ongoing 2',
		technologies1: ['Laravel'],
		technologies2: ['MySQL']
	},
	{
		id: 2,
		title: 'The Gig Website ',
		description:
			'Created the gig website for Wintec virtual company called "The GiG". This is to showcase what the gig stands for, \
		what gig does. ',
		repoLink: 'https://github.com/cshyam1892/',
		deployLink: 'https://thegigwebsite.web.app/',
		image: two,
		role: 'Project Lead',
		weekDuration: 'Ongoing 5',
		technologies1: ['Bootstrap','jQuery'],
		technologies2: ['PHP'],
	}

];

export default projects;
