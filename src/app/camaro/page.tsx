import PageCar from "@/components/page-cars";
import { data } from "@/utils/data";

export default function Camaro() {
	const dataCar = data[1];

	return <PageCar dataCar={dataCar} />;
}