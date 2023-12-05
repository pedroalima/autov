export interface DataElementType {
	name: string;
	horsepower: number;
	accelerationTime: number;
	maxSpeed: number;
	description: string;

}

export type DataType = [
	DataElementType,
	DataElementType,
	DataElementType
]

export const data: DataType = [
	{
		name: "corvett",
		horsepower: 495,
		accelerationTime: 2.9,
		maxSpeed: 312,
		description: "O Chevrolet Corvette é um carro esportivo icônico conhecido por seu design elegante, desempenho poderoso e motores V8. Com uma construção leve e ágil, o Corvette oferece uma experiência de direção emocionante."
	},
	{
		name: "camaro",
		horsepower: 650,
		accelerationTime: 3.5,
		maxSpeed: 250,
		description: "O Chevrolet Camaro é um carro esportivo conhecido por seu estilo distintivo e desempenho robusto. Com um design agressivo, o Camaro oferece opções de motores potentes, incluindo V6 e V8."
	},
	{
		name: "mustang",
		horsepower: 483,
		accelerationTime: 3.5,
		maxSpeed: 250,
		description: "O Ford Mustang é um ícone entre os carros esportivos, conhecido por seu design clássico e desempenho poderoso. Com linhas agressivas e postura musculosa, oferece opções de motores V6 e V8 de alto desempenho, proporcionando uma condução emocionante e ágil."
	}
];