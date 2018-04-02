export interface GameItem {
	id: number;
    title: string;
    price: number;
    count: number;
    isActive: boolean;

    itemWidth: number;
	itemHeight: number;
	offsetTop: number;
	offsetBottom: number;
	offsetLeft: number;
	offsetRight: number;
}
