import imgLogo from '../../../public/logo/logo.png';

import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href={'/'} className='shrink'>
            <h1>
                <Image src={imgLogo} alt='Logo company'/>
            </h1>
        </Link>
    );
};

export default Logo;