import React, {useEffect, useRef } from 'react';
import * as Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import className from 'classnames/bind';

import {MdContentCopy, MdCheck} from 'react-icons/md';
import {useCopyToClipboard} from '../../lib/useCopyToClipboard';
import '../../lib/style.css';

const styles = {
    lineNumber: 'line-numbers'
}

let cx = className.bind(styles);

export const Copyclipboard = ({copyText, language = 'javascript', showLines = true}) => {
    const reference = useRef('samushi_code');

    const [isCopied, copyToClipboard] = useCopyToClipboard({
        debug: false,
        message: 'Press #{x} to copy',
        interval: 1000
    });

    useEffect(()=>{
        Prism.highlightElement(reference.current);
    }, []);

    let classNames = cx({
        lineNumber: showLines
    });

    return (
        <div className="samushi-code">
            <pre className={`language-${language} ${classNames}`}>
                <code ref={reference} className={`language-${language}`}>{copyText.toString().trim()}</code>
            </pre>
            <button className='btn-copy' onClick={() => copyToClipboard(copyText)}>
                {isCopied ? <MdCheck size={18} /> : <MdContentCopy size={18} />}
            </button>
        </div>
    );
}