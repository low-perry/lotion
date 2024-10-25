import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px]
                sm:h-[350px] md:h-[400px] md:w-[400px]">
                   <Image
                   src="/placeholder-l-1.png"
                   fill
                   alt="circle"
                   className="object-contain dark:hidden" />
                   <Image
                   src="/placeholder-d-1-1.webp"
                   fill
                   alt="circle"
                   className="object-contain hidden dark:block" />  
                </div>

                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                    src="/placeholder-l-2.jpg"
                    fill
                    alt="square"
                    className="object-contain dark:hidden" />
                     <Image
                    src="/placeholder-d-2.png"
                    fill
                    alt="square"
                    className="object-contain hidden dark:block" />
                </div>
            </div>
        </div>
     );
}