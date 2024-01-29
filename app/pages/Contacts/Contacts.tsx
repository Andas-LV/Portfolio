import React, { useState } from 'react';
import { SiGithub, SiGmail, SiWhatsapp, SiTelegram } from 'react-icons/si';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaHouseChimney } from 'react-icons/fa6';
import { MdOutlineContentCopy } from 'react-icons/md';
import styles from './contacts.module.css';

interface ContactProps {
    icon: JSX.Element;
    name: string;
    value: string;
}

const Contact: React.FC<ContactProps> = ({ icon, name, value }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(value)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Не удалось скопировать текст: ', err);
            });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                {icon}
                <p>{name}</p>
            </div>
            <div className={styles.underBlock}>
                <p className={styles.value}>{value}</p>
                <button onClick={handleCopyClick}>
                    <MdOutlineContentCopy />
                </button>
            </div>
            {copied && <div className={styles.successMessage}>Successfully copied</div>}
        </div>
    );
};

export const Contacts: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2>Contacts</h2>
            <div className={styles.blocksContainer}>
                <Contact icon={<SiGithub />} name="GitHub" value="github.com" />
                <Contact icon={<SiGmail />} name="Gmail" value="pH2Z3@example.com" />
                <Contact icon={<SiWhatsapp />} name="WhatsApp" value="whatsapp.com" />
                <Contact icon={<SiTelegram />} name="Telegram" value="telegram.me" />
                <Contact icon={<AiOutlinePhone />} name="Phone" value="+7 707 490 91 31" />
                <Contact icon={<FaHouseChimney />} name="Address" value="address" />
            </div>
        </div>
    );
};
