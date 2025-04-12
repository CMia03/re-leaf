import Image from "next/image";
import lostImg1 from '../../../../public/images/lostPassword/lostimg1.png'

const ImageLostPasswordBody = () => {
    return (
        <>
            {/* IMAGE LOST PSSW */}
                <Image
                    src={lostImg1}
                    alt={'image lost'}
                    className="rounded-none"
                />
        </>
    );
};
export default ImageLostPasswordBody;
