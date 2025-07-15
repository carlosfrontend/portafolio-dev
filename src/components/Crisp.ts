"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import { usePathname } from "next/navigation";

const CrispChat = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (!window.$crisp) {
            Crisp.configure("cbc48b7b-1a79-4ab2-98b8-665205bbd098");
        }
    }, []);


    useEffect(() => {

        if (typeof window !== 'undefined' && window.$crisp) {
            if (pathname.match(/\/studio\/*/)) {
                Crisp.chat.hide();
            } else {
                Crisp.chat.show();
            }
        }
    }, [pathname]);

    return null;
}

export default CrispChat;