import Image from "next/image";
import lostImg1 from '../../../../public/images/lostPassword/lostimg1.png'
import imgAbsolute from "../../../../public/images/spice/imgAbsolute.png";


const ImageAboutBody = () => {
    return (
        <>
            <div className="flex-1 relative">
                {/* IMAGE LOST PSSW */}
                <Image
                    src={lostImg1}
                    alt={'image lost'}
                    className="w-[100%] h-[100%] object-cover rounded-none mx-auto"
                />
                 <Image
                          src={imgAbsolute}
                          width={230}
                          height={230}
                          alt=""
                          className="absolute bottom-0 right-0 mb-[-2em]"
                          priority
                        />
            </div>
        </>
    );
};
export default ImageAboutBody;
