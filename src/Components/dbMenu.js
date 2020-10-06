const dbMenu = {
	specials: [
		{
			name: 'Ноги полностью + глубокое бикини + подмышки:',
			id: 1,
			price: 85,
            time: 4800,
		},
		{
			name: 'Голени + глубокое бикини + подмышки:',
			id: 2,
			price: 65,
            time: 3900,
		},
		{
			name: 'Голени + глубокое бикини:',
			id: 3,
            price: 50,
            time: 3600,
		},
		{
			name: 'Ноги полностью + подмышки:',
			id: 9,
            price: 60,
            time: 3000,
		},
		{
			name: 'Голени + линия бикини:',
			id: 5,
            price: 40,
            time: 3000,
		},
	],
	woman: [
		{
			name: 'Верхняя губа и все маленькие зоны:',
			id: 1,
			price: 10,
		},
		{
			name: 'Бикини:',
			id: 2,
			price: '35€-25€-20€',
			choices: ['глубокое', 'среднее', 'линия'],
			choice: [
				{
					name: 'глубокое',
					price: 35,
					time: 30,
					id: '0',
				},
				{
					name: 'среднее',
					price: 25,
					time: 20,
					id: '1',
				},
				{
					name: 'линия',
					price: 20,
					time: 10,
					id: '2',
				}
			],
		},
		{
			name: 'Подмышки',
			id: 3,
			price: 10,
		},
		{
			name: 'Ноги:',
			id: 4,
			price: '45€-25€-25€',
			choices: ['полностью', 'голень', 'бедра'],
			choice: [
				{
					name: 'полностью',
					price: 35,
					time: 30,
					id: '0',
				},
				{
					name: 'голень',
					price: 25,
					time: 20,
					id: '1',
				},
				{
					name: 'бедра',
					price: 20,
					time: 10,
					id: '2',
				}
			],
		},
		{
			name: 'Руки:',
			id: 5,
			price: '20€-35€',
			choices: ['одна часть', 'полностью'],
			choice: [
				{
					name: 'одна часть',
					price: 35,
					time: 30,
					id: '0',
				},
				{
					name: 'полностью',
					price: 25,
					time: 20,
					id: '1',
				},
			],
		},
    ],
    man: [
		{
			name: 'Живот',
			id: 1,
			price: 25,
		},
		{
			name: 'Плечи',
			id: 2,
			price: 20,
		},
		{
			name: 'Ягодицы',
			id: 3,
			price: 30,
		},
		{
			name: 'Глубокое бикини',
			id: 4,
			price: 60,
		},
		{
			name: 'Спина',
			id: 5,
			price: 45,
		},
		{
			name: 'Руки:',
			id: 6,
			price: '20€-35€',
			choices: ['одна часть', 'полностью'],
			choice: [
				{
					name: 'одна часть',
					price: 20,
					time: 30,
					id: '0',
				},
				{
					name: 'полностью',
					price: 35,
					time: 20,
					id: '1',
				},
			],
        },
        {
			name: 'Ноги:',
			id: 7,
			price: '45€-25€-25€',
			choices: ['полностью', 'голень', 'бедра'],
			choice: [
				{
					name: 'полностью',
					price: 45,
					time: 30,
					id: '0',
				},
				{
					name: 'голень',
					price: 35,
					time: 20,
					id: '1',
				},
				{
					name: 'бедра',
					price: 25,
					time: 10,
					id: '2',
				}
			],
		},
	]
};

export default dbMenu;
