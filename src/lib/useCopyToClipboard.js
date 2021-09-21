import React, {useState, useEffect, useCallback} from 'react';
import copy from 'copy-to-clipboard';

export const useCopyToClipboard = ({
    debug = false,
    message = '',
    interval = null
}) => {
    const [isCopied, setCopied] = useState(false);

    useEffect(() => {
        let timeout;
        if(isCopied && interval){
            timeout = setTimeout(() => {
                setCopied(false);
            }, interval);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [isCopied, interval]);

    const useCopyToClipboard = useCallback((text) => {
        if(typeof text === 'string' || typeof text === 'number'){
            copy(text.toString(), {
                debug,
                message
            });

            setCopied(true);
        }
    }, []);

    return [isCopied, useCopyToClipboard];
};