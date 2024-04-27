import Image from "next/image";

export default function FoodCard({foodImage, foodName, foodPrice} : Readonly<{foodImage: string, foodName: string, foodPrice: number}>){
    return (
        <div className="flex flex-col bg-white rounded-xl h-[15rem] hover:cursor-pointer hover:opacity-35 transition duration-300 ease-in-out">
            <div className="flex w-full h-fit bg-gray-600 items-center justify-center rounded-t-xl">
                <Image src={foodImage} alt="음식 이미지" width={1000} height={0} className="rounded-t-xl w-full"/>
            </div>
            <div className="flex flex-col space-y-5 p-3 h-40">
                <h1>{foodName}</h1>
                <p className="text-xl font-bold">{foodPrice.toLocaleString()}원</p>
            </div>
        </div>
    )
}