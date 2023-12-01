import PageCar from "@/components/page-cars";
import { data } from "@/utils/data";

export default function Covertt() {
	const dataCar = data[0];

	return <PageCar dataCar={dataCar} />;
}