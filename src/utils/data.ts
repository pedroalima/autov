export interface DataElementType {
	name: string;
	horsepower: number;
	accelerationTime: number;
	maxSpeed: number;
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
		maxSpeed: 312
	},
	{
		name: "camaro",
		horsepower: 650,
		accelerationTime: 3.5,
		maxSpeed: 250
	},
	{
		name: "mustang",
		horsepower: 483,
		accelerationTime: 3.5,
		maxSpeed: 250
	}
];