import React, {useEffect, useRef } from 'react';

import {MdContentCopy, MdCheck} from 'react-icons/md';
import {useCopyToClipboard} from '../../lib/useCopyToClipboard';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';
import 'prismjs/themes/prism-okaidia.css';
import '../../lib/style.css';

export const Copyclipboard = ({copyText,language = 'javascript'}) => {
    const reference = useRef('samushi_code');

    const [isCopied, copyToClipboard] = useCopyToClipboard({
        debug: false,
        message: 'Press #{x} to copy',
        interval: 1000
    });

    useEffect(()=>{
        Prism.highlightElement(reference.current);
    }, []);

    return (
        <div className="samushi-code">
            Language-{language}
            <pre>
                <code ref={reference} className={`language-${language}`}>{copyText.toString().trim()}</code>
            </pre>
            <button className='btn-copy' onClick={() => copyToClipboard(copyText)}>
                {isCopied ? <MdCheck size={18} /> : <MdContentCopy size={18} />}
            </button>
        </div>
    );
}