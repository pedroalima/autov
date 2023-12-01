import PageCar from "@/components/page-cars";
import { data } from "@/utils/data";

export default function Mustang() {
	const dataCar = data[2];

	return <PageCar dataCar={dataCar} />;
}