import FoodCard from "@/app/components/FootCard";
import Image from "next/image";

export default function Home() {
    return (<main className="flex">
            <div className="flex flex-col bg-gray-800 pt-2 px-2 items-center space-y-8 w-[80%] h-screen">
                <div className="flex items-center justify-between w-full">
                    <div></div>
                    {/* 원 4개 */}
                    <div className="flex items-center space-x-2">
                        {
                            [...Array(4)].map((_, index) => (
                                <div className={"w-3 h-3 rounded-full " + (index == 0 ? "bg-white" : "bg-gray-400")} key={index}/>
                            ))
                        }
                    </div>
                </div>
                <h1 className="text-yellow-400 text-3xl font-bold">여긴 대충 공지들어오는곳</h1>
                <div
                    className="flex flex-row h-12 space-x-3 px-2 bg-white rounded-3xl items-center w-full justify-between">
                    <span
                        className="flex items-center justify-center w-10 h-10 m-2 bg-gray-800 rounded-full text-2xl text-gray-200 hover:cursor-pointer">&lt;</span>
                    {/* 글씨 줄내림 금지. */}
                    <div
                        className="flex flex-row space-x-8 font-bold text-gray-800 overflow-x-auto whitespace-nowrap w-full">
                        {
                            ["음식", "카페"].map((value, index) => (
                                <span className="text-gray-800" key={index}>{value}</span>
                            ))
                        }
                    </div>
                    <span
                        className="flex items-center justify-center w-10 h-10 m-2 bg-gray-800 rounded-full text-2xl text-gray-200 hover:cursor-pointer">&gt;</span>
                </div>
                <div className="grid grid-cols-5 gap-4 w-full overflow-y-auto p-2">
                    {
                        [...Array(20)].map((_, index) => (
                            <FoodCard foodImage="/foodImg.webp" foodName="콜팝" foodPrice={3500} key={index}/>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col w-[30%] bg-gray-400 h-fit">
                {/* 보라색 => 파란색, 대각선으로 그라데이션. */}
                <div className="flex flex-col bg-gradient-to-br from-purple-600 to-blue-400 w-full h-[32rem] p-3 space-y-2">
                    <div className="flex flex-col space-y-3 p-2">
                        <div className="flex items-center justify-between">
                            <span className="text-yellow-400 font-light">PC No. 93</span>
                            <span
                                className="flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full text-gray-200">X</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-white font-light">고종원</span>
                            {/* 불투명, 삼선 메뉴에 '주문내역 보기' 글자 쓰임. */}
                            <button className="flex items-center bg-opacity-100 font-bold text-white px-3 py-1 rounded-md w-fit border-2 h-6 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                                주문내역 보기
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white w-full h-full rounded justify-between">
                        <div className="h-full p-3">
                            {/* TODO: 음식 내역 */}
                        </div>
                        <div className="flex items-center justify-between h-[15%] bg-gray-200 p-5 rounded-b">
                            <span className="text-gray-500 text-xl font-semibold">총 주문금액</span>
                            <div>
                                <span className="text-gray-700 text-2xl font-extrabold">0</span>
                                <span className="text-gray-500 text-xl font-semibold">원</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={"/banner.png"} alt={"광고배너"} width={2000} height={0} className="h-16 w-full"/>
                <div className="flex flex-col h-full bg-purple-900 w-full">
                    <fieldset className="grid grid-cols-4 gap-2 p-3">
                        {
                            ["현금", "신용카드", "시간차감", "게토앱결제", "카카오페이", "포인트"].map((payment, index) => (
                                <div className="flex items-center justify-center bg-white text-black font-bold rounded-md h-12 hover:cursor-pointer" key={index}>
                                    <input type="radio" id={payment + "payment"} name="payment" className="hidden"/>
                                    <label htmlFor={payment + "payment"} className="hover:cursor-pointer">{payment}</label>
                                </div>
                            ))
                        }
                    </fieldset>
                    <div className="flex flex-col space-y-2 p-4 py-0 pb-20">
                        <fieldset className="flex flex-col space-y-2 bg-black p-2 rounded">
                            <div className="flex items-center justify-between h-7">
                                {
                                    [50000, 10000, 5000, 1000].map((won, index) => (
                                        <div key={index}>
                                            <input type="radio" value={won} id={won + "won"} name="select-price"/>
                                            <label htmlFor={won + "won"} className="text-white pl-2">{won.toLocaleString()}원</label>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex items-center justify-between h-7">
                                <div>
                                    <input type="radio" value="fit" id="fit-price" name="select-price"/>
                                    <label htmlFor="fit-price" className="text-white pl-2">금액에 맞게</label>
                                </div>
                                <div>
                                    <input type="radio" value="enter" id="enter-price" name="select-price"/>
                                    <label htmlFor="enter-price" className="text-white px-2">직접입력</label>
                                    <input type="number" className="w-32 h-6 text-black rounded-md"/>
                                </div>
                            </div>
                        </fieldset>
                        <input type="text" className="w-full h-10 rounded p-2" placeholder="요청사항은 최대 50자까지 입력할 수 있습니다."/>
                        <button className="bg-yellow-400 text-black font-bold rounded-md h-24">주문하기</button>
                    </div>
                </div>
            </div>
    </main>);
}
